/* ══════════════════════════════════════════════════════════════════════
   AquaSicura Web App — Luxury Water Filtration Monitoring
   ThingsBoard REST API Frontend
   ══════════════════════════════════════════════════════════════════════ */

// ══════════════════════════════════════════════════════════════════════
// LANDING PAGE — Navigation & Scroll
// ══════════════════════════════════════════════════════════════════════

function showLoginScreen() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('login-screen').classList.add('active');
    // Hide landing fixed elements but keep login-bg visible
    const landingNav = document.querySelector('.landing-nav');
    const heroBg = document.querySelector('.hero-bg');
    if (landingNav) landingNav.style.display = 'none';
    if (heroBg) heroBg.style.display = 'none';
}

function showLandingScreen() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('landing-screen').classList.add('active');
    // Restore fixed elements
    const landingNav = document.querySelector('.landing-nav');
    const heroBg = document.querySelector('.hero-bg');
    if (landingNav) landingNav.style.display = '';
    if (heroBg) heroBg.style.display = '';
}

function showStoreScreen(scrollTo) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('store-screen').classList.add('active');
    // Hide landing fixed elements (position:fixed escapes parent display:none)
    const landingNav = document.querySelector('.landing-nav');
    const heroBg = document.querySelector('.hero-bg');
    if (landingNav) landingNav.style.display = 'none';
    if (heroBg) heroBg.style.display = 'none';
    // Scroll to top, then optionally scroll to a specific product
    document.getElementById('store-screen').scrollTop = 0;
    if (scrollTo) {
        setTimeout(() => {
            const el = document.getElementById(scrollTo);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    }
}

function storeContact(product) {
    document.getElementById('store-modal-product').textContent = product;
    document.getElementById('store-modal-title').textContent =
        product === 'General Inquiry' ? 'Contact Us' : 'Request Quote';
    document.getElementById('store-contact-modal').classList.add('active');
}

function closeStoreModal() {
    document.getElementById('store-contact-modal').classList.remove('active');
}

function submitStoreInquiry(e) {
    e.preventDefault();
    const data = {
        product:  document.getElementById('store-modal-product').textContent,
        name:     document.getElementById('store-name').value,
        phone:    document.getElementById('store-phone').value,
        email:    document.getElementById('store-email').value,
        location: document.getElementById('store-location').value,
        message:  document.getElementById('store-message').value
    };
    // For now, compose a mailto link (can be replaced with backend API later)
    const subject = encodeURIComponent('AquaSicura Inquiry: ' + data.product);
    const body = encodeURIComponent(
        'Product: ' + data.product + '\n' +
        'Name: ' + data.name + '\n' +
        'Phone: ' + data.phone + '\n' +
        'Email: ' + data.email + '\n' +
        'Location: ' + data.location + '\n' +
        'Message: ' + data.message
    );
    window.open('mailto:info@aquasicura.xyz?subject=' + subject + '&body=' + body);
    closeStoreModal();
    alert('Thank you! Your inquiry has been prepared. Please send the email that just opened, or we will contact you shortly.');
    return false;
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('open');
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.landing-nav');
    if (nav) {
        if (window.scrollY > 60) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    }
});

// ══════════════════════════════════════════════════════════════════════
// APP — State & API
// ══════════════════════════════════════════════════════════════════════

// ── State ───────────────────────────────────────────────────────────
let TB_URL   = '';          // e.g. https://thingsboard.cloud
let TOKEN    = '';          // JWT access token
let REFRESH  = '';          // JWT refresh token
let USER     = null;        // { email, authority, ... }
let IS_ADMIN = false;

// ── Default Alarm Limits (applied to every new device) ──────────────
const DEFAULT_ALARMS = {
    tdsAlarmMin:  100,
    tdsAlarmMax:  300,
    phAlarmMin:   5,
    phAlarmMax:   8,
    tempAlarmMin: 15,
    tempAlarmMax: 45
};

// ── Helpers ─────────────────────────────────────────────────────────
function api(path, opts = {}) {
    const headers = { 'Content-Type': 'application/json', ...opts.headers };
    if (TOKEN) headers['X-Authorization'] = 'Bearer ' + TOKEN;
    return fetch(TB_URL + '/api' + path, { ...opts, headers })
        .then(r => {
            if (r.status === 401) { doLogout(); throw new Error('Session expired'); }
            if (!r.ok) return r.text().then(t => { throw new Error(t); });
            const ct = r.headers.get('content-type') || '';
            return ct.includes('json') ? r.json() : r.text();
        });
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    // Hide fixed elements (landing nav & hero-bg) when not on landing page
    const isLanding = (id === 'landing-screen');
    const landingNav = document.querySelector('.landing-nav');
    const heroBg = document.querySelector('.hero-bg');
    if (landingNav) landingNav.style.display = isLanding ? '' : 'none';
    if (heroBg) heroBg.style.display = isLanding ? '' : 'none';
}

function switchTab(btn) {
    const bar = btn.parentElement;
    bar.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    // Tab-specific init
    const tab = btn.dataset.tab;
    if (tab === 'map') { setTimeout(() => initOrRefreshMap(), 100); }
    if (tab === 'devices' && IS_ADMIN) { loadDevicesTable(); }
    if (tab === 'customers' && IS_ADMIN) { loadCustomers(); }
}

function closeModal(id) { document.getElementById(id).style.display = 'none'; }
function openModal(id)  { document.getElementById(id).style.display = 'flex'; }

function timeAgo(ts) {
    if (!ts) return 'never';
    const s = Math.floor((Date.now() - ts) / 1000);
    if (s < 60) return s + 's ago';
    if (s < 3600) return Math.floor(s/60) + 'm ago';
    if (s < 86400) return Math.floor(s/3600) + 'h ago';
    return Math.floor(s/86400) + 'd ago';
}

// ── Login ───────────────────────────────────────────────────────────
function doLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const pass  = document.getElementById('login-password').value;
    const srv   = document.getElementById('login-server').value.trim().replace(/\/+$/, '');
    TB_URL = (srv.startsWith('http') ? '' : 'https://') + srv;

    const btn = document.getElementById('login-btn');
    const errEl = document.getElementById('login-error');
    btn.disabled = true; btn.textContent = 'Signing in...';
    errEl.style.display = 'none';

    fetch(TB_URL + '/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password: pass })
    })
    .then(r => {
        if (!r.ok) throw new Error('Invalid credentials');
        return r.json();
    })
    .then(data => {
        TOKEN   = data.token;
        REFRESH = data.refreshToken;
        // Save session
        sessionStorage.setItem('tb_token', TOKEN);
        sessionStorage.setItem('tb_refresh', REFRESH);
        sessionStorage.setItem('tb_url', TB_URL);
        return loadUserProfile();
    })
    .then(() => {
        btn.disabled = false; btn.textContent = 'Sign In';
        enterApp();
    })
    .catch(err => {
        btn.disabled = false; btn.textContent = 'Sign In';
        errEl.textContent = err.message;
        errEl.style.display = 'block';
    });
    return false;
}

function loadUserProfile() {
    return api('/auth/user').then(u => {
        USER = u;
        IS_ADMIN = (u.authority === 'TENANT_ADMIN');
    });
}

function doLogout() {
    TOKEN = ''; REFRESH = ''; USER = null;
    sessionStorage.clear();
    showScreen('landing-screen');
}

function enterApp() {
    showScreen('app-screen');
    document.getElementById('nav-user').textContent = USER.email || '';
    document.getElementById('nav-role').textContent = IS_ADMIN ? 'Admin' : 'User';

    if (IS_ADMIN) {
        document.getElementById('admin-tabs').style.display = 'flex';
        document.getElementById('user-tabs').style.display = 'none';
        document.getElementById('dashboard-title').textContent = 'All Devices';
    } else {
        document.getElementById('admin-tabs').style.display = 'none';
        document.getElementById('user-tabs').style.display = 'flex';
        document.getElementById('dashboard-title').textContent = 'My Device';
    }
    refreshDashboard();
}

// ── Auto-restore session on load ────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
    const t = sessionStorage.getItem('tb_token');
    const u = sessionStorage.getItem('tb_url');
    if (t && u) {
        TOKEN  = t;
        REFRESH = sessionStorage.getItem('tb_refresh') || '';
        TB_URL = u;
        loadUserProfile().then(() => enterApp()).catch(() => doLogout());
    } else {
        showScreen('landing-screen');
    }
});

// ── Dashboard ───────────────────────────────────────────────────────
let allDevices = [];  // cache for alarm tab selector
let allDeviceAttrs = {};  // cache: deviceId -> {filterType, filterRef, address, latitude, longitude}
const DEVICE_ATTR_KEYS = 'filterType,filterRef,address,latitude,longitude';
const FILTER_TYPE_ICONS = {
    'Drinking Water Filter': '💧',
    'Shower Filter': '🚿',
    'Swimming Pool Filter': '🏊',
    'Compact Sink Filter': '🔧'
};

function fetchDeviceAttrs(deviceId) {
    return api('/plugins/telemetry/DEVICE/' + deviceId + '/values/attributes/SERVER_SCOPE?keys=' + DEVICE_ATTR_KEYS)
        .then(attrs => {
            const map = {};
            (attrs || []).forEach(a => { map[a.key] = a.value; });
            allDeviceAttrs[deviceId] = map;
            return map;
        })
        .catch(() => {
            allDeviceAttrs[deviceId] = {};
            return {};
        });
}

function refreshDashboard() {
    const container = document.getElementById('device-cards');
    container.innerHTML = '<p class="loading">Loading...</p>';

    let devicesPromise;
    if (IS_ADMIN) {
        devicesPromise = api('/tenant/devices?pageSize=100&page=0&sortProperty=name&sortOrder=ASC');
    } else {
        devicesPromise = api('/customer/' + USER.customerId.id + '/devices?pageSize=100&page=0&sortProperty=name&sortOrder=ASC');
    }

    devicesPromise.then(page => {
        const devices = page.data || [];
        allDevices = devices;
        if (devices.length === 0) {
            container.innerHTML = '<p class="loading">No devices found.</p>';
            return;
        }
        // Fetch latest telemetry AND server attributes for each device
        return Promise.all(devices.map(d =>
            Promise.all([
                api('/plugins/telemetry/DEVICE/' + d.id.id + '/values/timeseries?keys=pH,tds,waterTemp,boxTemp,flowRate,pressure,tdsAlarm,phAlarm,tempAlarm,tdsAlarmMin,tdsAlarmMax,phAlarmMin,phAlarmMax,tempAlarmMin,tempAlarmMax')
                    .catch(() => ({})),
                fetchDeviceAttrs(d.id.id)
            ]).then(([ts, attrs]) => ({ device: d, telemetry: ts, attrs: attrs }))
        ));
    })
    .then(results => {
        if (!results) return;
        container.innerHTML = '';
        results.forEach(r => container.appendChild(buildDeviceCard(r.device, r.telemetry, r.attrs)));
        populateAlarmDeviceSelector();
    })
    .catch(err => {
        container.innerHTML = '<p class="loading">Error: ' + err.message + '</p>';
    });
}

function tv(telemetry, key) {
    if (!telemetry || !telemetry[key] || !telemetry[key][0]) return null;
    return telemetry[key][0].value;
}

function buildDeviceCard(device, ts, attrs) {
    const card = document.createElement('div');
    const ph   = tv(ts, 'pH');
    const tds  = tv(ts, 'tds');
    const temp = tv(ts, 'waterTemp');
    const bTemp = tv(ts, 'boxTemp');
    const flow = tv(ts, 'flowRate');

    const tdsA  = tv(ts, 'tdsAlarm') === 'true';
    const phA   = tv(ts, 'phAlarm')  === 'true';
    const tempA = tv(ts, 'tempAlarm') === 'true';
    const anyAlarm = tdsA || phA || tempA;

    const lastTs = ts && ts['pH'] && ts['pH'][0] ? ts['pH'][0].ts : null;
    const isOnline = lastTs && (Date.now() - lastTs < 7200000); // 2h threshold

    attrs = attrs || {};
    const filterType = attrs.filterType || '';
    const filterIcon = FILTER_TYPE_ICONS[filterType] || '📡';
    const address = attrs.address || '';
    const custName = device.customerTitle || '';

    card.className = 'device-card' + (anyAlarm ? ' alarm-active' : '');
    card.onclick = () => showDeviceDetail(device, ts);

    card.innerHTML = `
        <div class="device-card-header">
            <div>
                <h3>${filterIcon} ${device.name}</h3>
                ${filterType ? '<span class="device-filter-badge">' + filterType + '</span>' : ''}
            </div>
            <span class="device-status ${isOnline ? 'online' : 'offline'}">${isOnline ? 'Online' : 'Offline'}</span>
        </div>
        ${(address || custName) ? '<div class="device-card-meta">' +
            (custName ? '<span class="device-meta-item">👤 ' + custName + '</span>' : '') +
            (address ? '<span class="device-meta-item">📍 ' + address + '</span>' : '') +
        '</div>' : ''}
        <div class="sensor-grid">
            <div class="sensor-item ${phA ? 'alarm' : ''}">
                <div class="sensor-value">${ph !== null ? parseFloat(ph).toFixed(1) : '--'}</div>
                <div class="sensor-label">pH ${phA ? '(!!)' : ''}</div>
            </div>
            <div class="sensor-item ${tdsA ? 'alarm' : ''}">
                <div class="sensor-value">${tds !== null ? Math.round(parseFloat(tds)) : '--'}</div>
                <div class="sensor-label">TDS ppm ${tdsA ? '(!!)' : ''}</div>
            </div>
            <div class="sensor-item ${tempA ? 'alarm' : ''}">
                <div class="sensor-value">${temp !== null ? parseFloat(temp).toFixed(1) : '--'}</div>
                <div class="sensor-label">Water &deg;C ${tempA ? '(!!)' : ''}</div>
            </div>
        </div>
        <div class="device-card-footer">
            ${bTemp !== null ? 'Box: ' + parseFloat(bTemp).toFixed(1) + '&deg;C &nbsp;|&nbsp; ' : ''}
            ${flow !== null ? 'Flow: ' + parseFloat(flow).toFixed(1) + ' L/min &nbsp;|&nbsp; ' : ''}
            Last update: ${timeAgo(lastTs)}
        </div>
    `;
    return card;
}

let currentDetailDevice = null;

function showDeviceDetail(device, ts) {
    currentDetailDevice = device;
    document.getElementById('detail-device-name').textContent = device.name;
    const grid = document.getElementById('detail-grid');
    const attrs = allDeviceAttrs[device.id.id] || {};

    // ── Device Info Bar ──
    const infoBar = document.getElementById('detail-info-bar');
    const infoItems = [];
    if (attrs.filterType) infoItems.push('<span class="info-chip">' + (FILTER_TYPE_ICONS[attrs.filterType]||'') + ' ' + attrs.filterType + '</span>');
    if (attrs.filterRef) infoItems.push('<span class="info-chip">🏷️ ' + attrs.filterRef + '</span>');
    if (device.customerTitle) infoItems.push('<span class="info-chip">👤 ' + device.customerTitle + '</span>');
    if (attrs.address) infoItems.push('<span class="info-chip">📍 ' + attrs.address + '</span>');
    if (attrs.latitude && attrs.longitude) infoItems.push('<span class="info-chip">🌐 ' + parseFloat(attrs.latitude).toFixed(4) + ', ' + parseFloat(attrs.longitude).toFixed(4) + '</span>');
    infoBar.innerHTML = infoItems.length ? infoItems.join('') : '<span class="info-chip" style="opacity:.5">No device info configured</span>';

    // ── Sensor Grid ──
    const keys = [
        { key: 'pH',       label: 'pH',          unit: '',     alarm: 'phAlarm' },
        { key: 'tds',      label: 'TDS',         unit: ' ppm', alarm: 'tdsAlarm' },
        { key: 'waterTemp',label: 'Water Temp',   unit: '&deg;C', alarm: 'tempAlarm' },
        { key: 'boxTemp',  label: 'Box Temp',     unit: '&deg;C', alarm: null },
        { key: 'flowRate', label: 'Flow Rate',    unit: ' L/min', alarm: null },
        { key: 'pressure', label: 'Pressure',     unit: ' PSI',   alarm: null },
    ];

    grid.innerHTML = keys.map(k => {
        const v = tv(ts, k.key);
        const isAlarm = k.alarm && tv(ts, k.alarm) === 'true';
        return `<div class="detail-item ${isAlarm ? 'alarm' : ''}">
            <div class="sensor-value">${v !== null ? parseFloat(v).toFixed(1) : '--'}</div>
            <div class="sensor-label">${k.label}${v !== null ? k.unit : ''} ${isAlarm ? '(ALARM)' : ''}</div>
        </div>`;
    }).join('');

    // Alarm limits display
    const limitsHtml = ['tdsAlarmMin','tdsAlarmMax','phAlarmMin','phAlarmMax','tempAlarmMin','tempAlarmMax']
        .map(k => { const v = tv(ts, k); return v !== null ? `<span style="margin-right:12px;font-size:13px;"><b>${k}:</b> ${v}</span>` : ''; })
        .join('');
    document.getElementById('detail-alarms').innerHTML = limitsHtml ? '<p style="font-size:13px;color:#777;margin-bottom:4px;">Current Alarm Limits:</p>' + limitsHtml : '';

    // ── Edit Section (admin only) ──
    const editSection = document.getElementById('detail-edit-section');
    if (IS_ADMIN) {
        editSection.style.display = 'block';
        document.getElementById('edit-device-filter-type').value = attrs.filterType || 'Drinking Water Filter';
        document.getElementById('edit-device-filter-ref').value = attrs.filterRef || '';
        document.getElementById('edit-device-address').value = attrs.address || '';
        document.getElementById('edit-device-lat').value = attrs.latitude || '';
        document.getElementById('edit-device-lng').value = attrs.longitude || '';
        document.getElementById('edit-device-result').textContent = '';
    } else {
        editSection.style.display = 'none';
    }

    openModal('modal-device-detail');
}

function saveDeviceInfo() {
    if (!currentDetailDevice) return;
    const deviceId = currentDetailDevice.id.id;
    const result = document.getElementById('edit-device-result');
    result.textContent = 'Saving...'; result.className = 'status-msg';

    const attrData = {
        filterType: document.getElementById('edit-device-filter-type').value,
        filterRef: document.getElementById('edit-device-filter-ref').value.trim(),
        address: document.getElementById('edit-device-address').value.trim(),
        latitude: parseFloat(document.getElementById('edit-device-lat').value) || 0,
        longitude: parseFloat(document.getElementById('edit-device-lng').value) || 0
    };

    // Save server-side attributes
    api('/plugins/telemetry/DEVICE/' + deviceId + '/SERVER_SCOPE', {
        method: 'POST',
        body: JSON.stringify(attrData)
    }).then(() => {
        result.textContent = 'Device info saved successfully!';
        result.className = 'status-msg ok';
        allDeviceAttrs[deviceId] = attrData;
        refreshDashboard();
        loadDevicesTable();
    }).catch(err => {
        result.textContent = 'Error: ' + err.message;
        result.className = 'status-msg err';
    });
}

// ── Devices Tab (Admin) ─────────────────────────────────────────────
function loadDevicesTable() {
    api('/tenant/devices?pageSize=100&page=0&sortProperty=name&sortOrder=ASC').then(page => {
        const devices = page.data || [];
        // Fetch attrs for all devices
        return Promise.all(devices.map(d =>
            fetchDeviceAttrs(d.id.id).then(attrs => ({ device: d, attrs }))
        ));
    }).then(results => {
        const tbody = document.getElementById('devices-tbody');
        tbody.innerHTML = '';
        results.forEach(({ device: d, attrs }) => {
            const tr = document.createElement('tr');
            const custName = d.customerTitle || '-';
            const isActive = d.active !== false;
            const filterType = attrs.filterType || '-';
            const address = attrs.address || '-';
            const filterIcon = FILTER_TYPE_ICONS[attrs.filterType] || '';
            tr.innerHTML = `
                <td><strong>${d.name}</strong>${attrs.filterRef ? '<br><small style="color:var(--text-light)">' + attrs.filterRef + '</small>' : ''}</td>
                <td>${filterIcon} ${filterType}</td>
                <td>${address}</td>
                <td>${custName}</td>
                <td>${isActive ? '<span style="color:var(--success)">Yes</span>' : '<span style="color:var(--danger)">No</span>'}</td>
                <td>
                    <button class="btn btn-sm btn-outline" onclick="copyDeviceToken('${d.id.id}')">Copy Token</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteDevice('${d.id.id}','${d.name}')">Delete</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    });
}

function openAddDeviceModal() {
    document.getElementById('new-device-name').value = '';
    document.getElementById('new-device-filter-type').value = 'Drinking Water Filter';
    document.getElementById('new-device-filter-ref').value = '';
    document.getElementById('new-device-address').value = '';
    document.getElementById('new-device-lat').value = '';
    document.getElementById('new-device-lng').value = '';
    document.getElementById('add-device-result').textContent = '';
    openModal('modal-add-device');
}

function addDevice() {
    const name = document.getElementById('new-device-name').value.trim();
    const filterType = document.getElementById('new-device-filter-type').value;
    const filterRef = document.getElementById('new-device-filter-ref').value.trim();
    const address = document.getElementById('new-device-address').value.trim();
    const lat = parseFloat(document.getElementById('new-device-lat').value) || 0;
    const lng = parseFloat(document.getElementById('new-device-lng').value) || 0;
    const result = document.getElementById('add-device-result');
    if (!name) { result.textContent = 'Name is required'; result.className = 'status-msg err'; return; }

    const body = { name: name, type: 'AquaSicura' };
    api('/device', { method: 'POST', body: JSON.stringify(body) })
    .then(dev => {
        // Set default alarm limits as shared attributes
        return api('/plugins/telemetry/DEVICE/' + dev.id.id + '/SHARED_SCOPE', {
            method: 'POST',
            body: JSON.stringify(DEFAULT_ALARMS)
        }).then(() => dev);
    })
    .then(dev => {
        // Save device info as server-side attributes
        const devAttrs = { filterType, filterRef, address, latitude: lat, longitude: lng };
        return api('/plugins/telemetry/DEVICE/' + dev.id.id + '/SERVER_SCOPE', {
            method: 'POST',
            body: JSON.stringify(devAttrs)
        }).then(() => dev);
    })
    .then(dev => {
        // Get the access token
        return api('/device/' + dev.id.id + '/credentials').then(cred => {
            result.className = 'status-msg ok';
            result.innerHTML = 'Device created!<br>Access Token: <strong>' + cred.credentialsId + '</strong>' +
                '<br>Filter: ' + filterType + (filterRef ? ' (' + filterRef + ')' : '') +
                (address ? '<br>Address: ' + address : '') +
                '<br>Default alarm limits applied.' +
                '<br><em>Copy this token and paste it into the device config page.</em>';
            loadDevicesTable();
            refreshDashboard();
        });
    })
    .catch(err => { result.textContent = 'Error: ' + err.message; result.className = 'status-msg err'; });
}

function copyDeviceToken(deviceId) {
    api('/device/' + deviceId + '/credentials').then(cred => {
        navigator.clipboard.writeText(cred.credentialsId).then(() => {
            alert('Token copied: ' + cred.credentialsId);
        }).catch(() => {
            prompt('Copy this token:', cred.credentialsId);
        });
    });
}

function deleteDevice(deviceId, name) {
    if (!confirm('Delete device "' + name + '"? This cannot be undone.')) return;
    api('/device/' + deviceId, { method: 'DELETE' }).then(() => {
        loadDevicesTable();
        refreshDashboard();
    }).catch(err => alert('Error: ' + err.message));
}

// ── Customers Tab (Admin) ───────────────────────────────────────────
function loadCustomers() {
    const container = document.getElementById('customers-list');
    container.innerHTML = '<p class="loading">Loading...</p>';

    api('/customers?pageSize=100&page=0&sortProperty=title&sortOrder=ASC').then(page => {
        const customers = page.data || [];
        if (customers.length === 0) {
            container.innerHTML = '<p class="loading">No customers yet. Click "+ Add Customer" to create one.</p>';
            return;
        }
        container.innerHTML = '';
        // For each customer, load users and devices
        customers.forEach(c => {
            const card = document.createElement('div');
            card.className = 'customer-card';
            card.innerHTML = `
                <h3>${c.title}</h3>
                <div class="customer-users" id="cust-users-${c.id.id}">Loading users...</div>
                <div class="customer-devices" id="cust-devices-${c.id.id}">Loading devices...</div>
                <div style="margin-top:10px;">
                    <button class="btn btn-sm btn-outline" onclick="openAddUserToCustomer('${c.id.id}','${c.title}')">+ Add User</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteCustomer('${c.id.id}','${c.title}')">Delete</button>
                </div>
            `;
            container.appendChild(card);

            // Load users
            api('/customer/' + c.id.id + '/users?pageSize=50&page=0&sortProperty=email&sortOrder=ASC')
                .then(up => {
                    const el = document.getElementById('cust-users-' + c.id.id);
                    const users = up.data || [];
                    if (users.length === 0) el.innerHTML = '<em>No users</em>';
                    else el.innerHTML = '<strong>Users:</strong><ul class="customer-users">' +
                        users.map(u => '<li>' + u.email + ' <button class="btn btn-sm btn-outline" onclick="deleteUser(\'' + u.id.id + '\',\'' + u.email + '\')">x</button></li>').join('') +
                        '</ul>';
                });
            // Load devices
            api('/customer/' + c.id.id + '/devices?pageSize=50&page=0&sortProperty=name&sortOrder=ASC')
                .then(dp => {
                    const el = document.getElementById('cust-devices-' + c.id.id);
                    const devs = dp.data || [];
                    el.innerHTML = '<strong>Devices:</strong> ' + (devs.length ? devs.map(d => d.name).join(', ') : '<em>none</em>');
                });
        });
    });
}

function openAddCustomerModal() {
    document.getElementById('new-customer-name').value = '';
    document.getElementById('new-customer-name').readOnly = false;
    document.getElementById('new-user-email').value = '';
    document.getElementById('new-user-password').value = '';
    document.getElementById('new-user-first').value = '';
    document.getElementById('new-user-last').value = '';
    document.getElementById('add-customer-result').textContent = '';
    // Populate device dropdown with unassigned devices only
    api('/tenant/devices?pageSize=100&page=0&sortProperty=name&sortOrder=ASC').then(page => {
        const sel = document.getElementById('new-customer-device');
        sel.innerHTML = '<option value="">-- Select a device --</option>';
        const NULL_CUSTOMER = '13814000-1dd2-11b2-8080-808080808080';
        (page.data || []).forEach(d => {
            // Show only devices not assigned to any customer (customerId is null or system default)
            const isUnassigned = !d.customerId || d.customerId.id === NULL_CUSTOMER;
            if (isUnassigned) {
                const attrs = allDeviceAttrs[d.id.id] || {};
                const filterIcon = FILTER_TYPE_ICONS[attrs.filterType] || '📡';
                sel.innerHTML += `<option value="${d.id.id}">${filterIcon} ${d.name}</option>`;
            }
        });
    });
    openModal('modal-add-customer');
}

function addCustomerAndUser() {
    const name     = document.getElementById('new-customer-name').value.trim();
    const email    = document.getElementById('new-user-email').value.trim();
    const password = document.getElementById('new-user-password').value;
    const first    = document.getElementById('new-user-first').value.trim();
    const last     = document.getElementById('new-user-last').value.trim();
    const deviceId = document.getElementById('new-customer-device').value;
    const result   = document.getElementById('add-customer-result');

    if (!name) { result.textContent = 'Customer name is required'; result.className = 'status-msg err'; return; }
    if (!email) { result.textContent = 'Email is required for customer login'; result.className = 'status-msg err'; return; }
    if (!password || password.length < 6) { result.textContent = 'Password must be at least 6 characters'; result.className = 'status-msg err'; return; }
    if (!deviceId) { result.textContent = 'Please select a device to assign'; result.className = 'status-msg err'; return; }

    result.textContent = 'Creating customer...'; result.className = 'status-msg';

    // 1. Create customer
    api('/customer', { method: 'POST', body: JSON.stringify({ title: name }) })
    .then(cust => {
        // 2. Assign device to this customer
        return api('/customer/' + cust.id.id + '/device/' + deviceId, { method: 'POST' }).then(() => cust);
    })
    .then(cust => {
        // 3. Create user under this customer
        const userBody = {
            email: email,
            firstName: first || email.split('@')[0],
            lastName: last || '',
            authority: 'CUSTOMER_USER',
            customerId: cust.id
        };
        return api('/user?sendActivationMail=false', { method: 'POST', body: JSON.stringify(userBody) }).then(user => ({ cust, user }));
    })
    .then(({ cust, user }) => {
        // 4. Get activation link and activate with password
        return api('/user/' + user.id.id + '/activationLink').then(link => {
            // link is a full URL string like "https://host/api/noauth/activate?activateToken=xxx"
            // or could be a UI link like "https://host/login/createPassword?activateToken=xxx"
            // Extract the activateToken parameter from it
            let activateToken = '';
            try {
                // Clean the link — ThingsBoard may return it with or without quotes
                const cleanLink = link.replace(/^"|"$/g, '').trim();
                const url = new URL(cleanLink);
                activateToken = url.searchParams.get('activateToken');
            } catch(e) {
                // Fallback: try regex extraction
                const match = link.match(/activateToken=([^&"]+)/);
                if (match) activateToken = match[1];
            }
            if (!activateToken) throw new Error('Could not extract activation token from: ' + link);
            // 5. Activate user with the chosen password (noauth endpoint — no Bearer token)
            return fetch(TB_URL + '/api/noauth/activate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ activateToken: activateToken, password: password })
            }).then(r => {
                if (!r.ok) return r.text().then(t => { throw new Error('Failed to set password: ' + t); });
                return { cust, user };
            });
        });
    })
    .then(({ cust, user }) => {
        result.className = 'status-msg ok';
        const deviceName = allDevices.find(d => d.id.id === deviceId)?.name || deviceId;
        result.innerHTML =
            '<strong>Customer created successfully!</strong><br><br>' +
            '<table style="width:100%;font-size:13px;border-collapse:collapse;">' +
            '<tr><td style="padding:4px 8px;color:var(--text-light);">Customer:</td><td style="padding:4px 8px;"><strong>' + name + '</strong></td></tr>' +
            '<tr><td style="padding:4px 8px;color:var(--text-light);">Device:</td><td style="padding:4px 8px;">' + deviceName + '</td></tr>' +
            '<tr><td style="padding:4px 8px;color:var(--text-light);">Login Email:</td><td style="padding:4px 8px;"><strong>' + email + '</strong></td></tr>' +
            '<tr><td style="padding:4px 8px;color:var(--text-light);">Password:</td><td style="padding:4px 8px;"><strong>' + password + '</strong></td></tr>' +
            '</table>' +
            '<br><em>The customer can now log in at aquasicura.xyz with these credentials to see their device.</em>';
        loadCustomers();
        refreshDashboard();
    })
    .catch(err => { result.textContent = 'Error: ' + err.message; result.className = 'status-msg err'; });
}

function openAddUserToCustomer(customerId, customerTitle) {
    openAddCustomerModal();
    document.getElementById('new-customer-name').value = customerTitle;
    document.getElementById('new-customer-name').readOnly = true;
}

function deleteCustomer(id, title) {
    if (!confirm('Delete customer "' + title + '"? All users under this customer will be removed.')) return;
    api('/customer/' + id, { method: 'DELETE' }).then(() => loadCustomers())
        .catch(err => alert('Error: ' + err.message));
}

function deleteUser(id, email) {
    if (!confirm('Delete user "' + email + '"?')) return;
    api('/user/' + id, { method: 'DELETE' }).then(() => loadCustomers())
        .catch(err => alert('Error: ' + err.message));
}

// ── Alarm Config via ThingsBoard Shared Attributes ──────────────────

// All notification config keys stored as shared attributes per device
const NOTIF_ATTR_KEYS = 'tdsAlarmMin,tdsAlarmMax,phAlarmMin,phAlarmMax,tempAlarmMin,tempAlarmMax,' +
    'alarmDelay,notifWeb,notifList,notifEmail,notifSms,notifEmailAddr,notifSmsPhone';

function populateAlarmDeviceSelector() {
    const sel = document.getElementById('alarm-device-select');
    sel.innerHTML = '';
    allDevices.forEach(d => {
        sel.innerHTML += `<option value="${d.id.id}">${d.name}</option>`;
    });
    if (allDevices.length > 0) loadDeviceAlarmConfig();
    updateNotifPermStatus();
}

function toggleNotifField(type) {
    const cb = document.getElementById('notif-' + type);
    const field = document.getElementById('notif-' + type + '-field');
    if (field) field.style.display = cb.checked ? 'block' : 'none';
}

function requestNotifPermission() {
    if (!('Notification' in window)) {
        alert('Your browser does not support desktop notifications.');
        return;
    }
    Notification.requestPermission().then(perm => { updateNotifPermStatus(); });
}

function updateNotifPermStatus() {
    const statusEl = document.getElementById('notif-web-perm-status');
    const btn = document.getElementById('notif-web-perm-btn');
    if (!statusEl) return;
    if (!('Notification' in window)) {
        statusEl.textContent = 'Not supported by your browser';
        btn.style.display = 'none';
    } else if (Notification.permission === 'granted') {
        statusEl.textContent = 'Permission granted';
        statusEl.style.color = 'var(--success)';
        btn.style.display = 'none';
    } else if (Notification.permission === 'denied') {
        statusEl.textContent = 'Permission denied — enable in browser settings';
        statusEl.style.color = 'var(--danger)';
        btn.style.display = 'none';
    } else {
        statusEl.textContent = '';
        btn.style.display = 'inline-block';
    }
}

function loadDeviceAlarmConfig() {
    const deviceId = document.getElementById('alarm-device-select').value;
    if (!deviceId) return;

    function applyDefaults() {
        document.getElementById('wa-tds-min').value  = DEFAULT_ALARMS.tdsAlarmMin;
        document.getElementById('wa-tds-max').value  = DEFAULT_ALARMS.tdsAlarmMax;
        document.getElementById('wa-ph-min').value   = DEFAULT_ALARMS.phAlarmMin;
        document.getElementById('wa-ph-max').value   = DEFAULT_ALARMS.phAlarmMax;
        document.getElementById('wa-temp-min').value = DEFAULT_ALARMS.tempAlarmMin;
        document.getElementById('wa-temp-max').value = DEFAULT_ALARMS.tempAlarmMax;
        document.getElementById('alarm-delay').value = '5';
        document.getElementById('notif-web').checked    = true;
        document.getElementById('notif-list').checked   = true;
        document.getElementById('notif-email').checked  = false;
        document.getElementById('notif-sms').checked    = false;
        document.getElementById('notif-email-addr').value = '';
        document.getElementById('notif-sms-phone').value  = '';
        toggleNotifField('email');
        toggleNotifField('sms');
    }

    // Read from shared attributes (authoritative source)
    api('/plugins/telemetry/DEVICE/' + deviceId + '/values/attributes/SHARED_SCOPE?keys=' + NOTIF_ATTR_KEYS)
    .then(attrs => {
        if (!attrs || attrs.length === 0) { applyDefaults(); loadAlarmHistory(); return; }
        const map = {};
        attrs.forEach(a => { map[a.key] = a.value; });

        // Limits
        document.getElementById('wa-tds-min').value  = map.tdsAlarmMin  !== undefined ? map.tdsAlarmMin  : DEFAULT_ALARMS.tdsAlarmMin;
        document.getElementById('wa-tds-max').value  = map.tdsAlarmMax  !== undefined ? map.tdsAlarmMax  : DEFAULT_ALARMS.tdsAlarmMax;
        document.getElementById('wa-ph-min').value   = map.phAlarmMin   !== undefined ? map.phAlarmMin   : DEFAULT_ALARMS.phAlarmMin;
        document.getElementById('wa-ph-max').value   = map.phAlarmMax   !== undefined ? map.phAlarmMax   : DEFAULT_ALARMS.phAlarmMax;
        document.getElementById('wa-temp-min').value = map.tempAlarmMin !== undefined ? map.tempAlarmMin : DEFAULT_ALARMS.tempAlarmMin;
        document.getElementById('wa-temp-max').value = map.tempAlarmMax !== undefined ? map.tempAlarmMax : DEFAULT_ALARMS.tempAlarmMax;

        // Delay
        document.getElementById('alarm-delay').value = map.alarmDelay !== undefined ? String(map.alarmDelay) : '5';

        // Notification channels
        document.getElementById('notif-web').checked   = map.notifWeb   !== undefined ? (map.notifWeb === true || map.notifWeb === 'true') : true;
        document.getElementById('notif-list').checked  = map.notifList  !== undefined ? (map.notifList === true || map.notifList === 'true') : true;
        document.getElementById('notif-email').checked = map.notifEmail !== undefined ? (map.notifEmail === true || map.notifEmail === 'true') : false;
        document.getElementById('notif-sms').checked   = map.notifSms   !== undefined ? (map.notifSms === true || map.notifSms === 'true') : false;
        document.getElementById('notif-email-addr').value = map.notifEmailAddr || '';
        document.getElementById('notif-sms-phone').value  = map.notifSmsPhone || '';

        toggleNotifField('email');
        toggleNotifField('sms');
    })
    .catch(() => { applyDefaults(); });

    loadAlarmHistory();
}

function saveDeviceAlarmConfig() {
    const deviceId = document.getElementById('alarm-device-select').value;
    if (!deviceId) return;

    // Validate
    const emailEnabled = document.getElementById('notif-email').checked;
    const smsEnabled   = document.getElementById('notif-sms').checked;
    const emailAddr    = document.getElementById('notif-email-addr').value.trim();
    const smsPhone     = document.getElementById('notif-sms-phone').value.trim();

    if (emailEnabled && !emailAddr) {
        alert('Please enter an email address for email notifications.');
        document.getElementById('notif-email-addr').focus();
        return;
    }
    if (smsEnabled && !smsPhone) {
        alert('Please enter a phone number for SMS notifications.');
        document.getElementById('notif-sms-phone').focus();
        return;
    }

    const attrs = {
        // Limits
        tdsAlarmMin:  parseFloat(document.getElementById('wa-tds-min').value),
        tdsAlarmMax:  parseFloat(document.getElementById('wa-tds-max').value),
        phAlarmMin:   parseFloat(document.getElementById('wa-ph-min').value),
        phAlarmMax:   parseFloat(document.getElementById('wa-ph-max').value),
        tempAlarmMin: parseFloat(document.getElementById('wa-temp-min').value),
        tempAlarmMax: parseFloat(document.getElementById('wa-temp-max').value),
        // Delay
        alarmDelay:   parseInt(document.getElementById('alarm-delay').value),
        // Notification channels
        notifWeb:       document.getElementById('notif-web').checked,
        notifList:      document.getElementById('notif-list').checked,
        notifEmail:     emailEnabled,
        notifSms:       smsEnabled,
        notifEmailAddr: emailAddr,
        notifSmsPhone:  smsPhone
    };

    const status = document.getElementById('alarm-save-status');
    status.textContent = 'Saving...';
    status.className = 'status-msg';

    api('/plugins/telemetry/DEVICE/' + deviceId + '/SHARED_SCOPE', {
        method: 'POST',
        body: JSON.stringify(attrs)
    })
    .then(() => {
        status.innerHTML = 'All alarm settings saved successfully. The device will pick up new limits on its next check (up to 60s).' +
            '<br><small>Notification channels: ' +
            (attrs.notifWeb ? 'Browser ' : '') +
            (attrs.notifList ? 'AlarmList ' : '') +
            (attrs.notifEmail ? 'Email(' + attrs.notifEmailAddr + ') ' : '') +
            (attrs.notifSms ? 'SMS(' + attrs.notifSmsPhone + ') ' : '') +
            '| Delay: ' + attrs.alarmDelay + ' min</small>';
        status.className = 'status-msg ok';
    })
    .catch(err => {
        status.textContent = 'Error: ' + err.message;
        status.className = 'status-msg err';
    });
}

// ── Alarm History (ThingsBoard Alarms API) ─────────────────────────

function loadAlarmHistory() {
    const deviceId = document.getElementById('alarm-device-select').value;
    if (!deviceId) return;
    const tbody = document.getElementById('alarm-history-tbody');
    tbody.innerHTML = '<tr><td colspan="7" class="loading">Loading...</td></tr>';

    // ThingsBoard Alarms API — fetch alarms for this device
    api('/alarm/DEVICE/' + deviceId + '?pageSize=50&page=0&sortProperty=createdTime&sortOrder=DESC')
    .then(page => {
        const alarms = page.data || [];
        if (alarms.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" class="loading">No alarms recorded for this device.</td></tr>';
            return;
        }
        tbody.innerHTML = alarms.map(a => {
            const d = new Date(a.createdTime);
            const dateStr = d.getFullYear() + '-' +
                String(d.getMonth()+1).padStart(2,'0') + '-' +
                String(d.getDate()).padStart(2,'0') + ' ' +
                String(d.getHours()).padStart(2,'0') + ':' +
                String(d.getMinutes()).padStart(2,'0') + ':' +
                String(d.getSeconds()).padStart(2,'0');

            const severity = (a.severity || 'WARNING').toUpperCase();
            const sevClass = severity === 'CRITICAL' ? 'critical' : 'warning';
            const statusVal = (a.status || 'ACTIVE_UNACK').toUpperCase();
            let statusClass = 'active';
            let statusLabel = 'Active';
            if (statusVal.includes('CLEAR')) { statusClass = 'cleared'; statusLabel = 'Cleared'; }
            else if (statusVal.includes('ACK')) { statusClass = 'ack'; statusLabel = 'Acknowledged'; }

            // Parse alarm type and details
            const alarmType = a.type || 'Unknown';
            const details = a.details || {};
            const value = details.value !== undefined ? parseFloat(details.value).toFixed(2) : '--';
            const limit = details.limit !== undefined ? details.limit : '--';

            return '<tr>' +
                '<td>' + dateStr + '</td>' +
                '<td>' + escHtml(alarmType) + '</td>' +
                '<td>' + value + '</td>' +
                '<td>' + limit + '</td>' +
                '<td><span class="alarm-severity ' + sevClass + '">' + severity + '</span></td>' +
                '<td><span class="alarm-status ' + statusClass + '">' + statusLabel + '</span></td>' +
                '<td>' + (statusClass === 'active' ?
                    '<button class="btn btn-sm btn-outline" onclick="ackAlarm(\'' + a.id.id + '\')">Ack</button> ' +
                    '<button class="btn btn-sm btn-outline" onclick="clearAlarm(\'' + a.id.id + '\')">Clear</button>' :
                    statusClass === 'ack' ?
                    '<button class="btn btn-sm btn-outline" onclick="clearAlarm(\'' + a.id.id + '\')">Clear</button>' :
                    '<span style="color:var(--text-light)">--</span>') +
                '</td></tr>';
        }).join('');
    })
    .catch(err => {
        tbody.innerHTML = '<tr><td colspan="7" class="loading">Error: ' + err.message + '</td></tr>';
    });
}

function escHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function ackAlarm(alarmId) {
    api('/alarm/' + alarmId + '/ack', { method: 'POST' })
    .then(() => loadAlarmHistory())
    .catch(err => alert('Error: ' + err.message));
}

function clearAlarm(alarmId) {
    api('/alarm/' + alarmId + '/clear', { method: 'POST' })
    .then(() => loadAlarmHistory())
    .catch(err => alert('Error: ' + err.message));
}

function clearAlarmHistory() {
    if (!confirm('Clear all alarms for this device? This cannot be undone.')) return;
    const deviceId = document.getElementById('alarm-device-select').value;
    if (!deviceId) return;

    // Fetch all active alarms and clear each one
    api('/alarm/DEVICE/' + deviceId + '?pageSize=100&page=0')
    .then(page => {
        const alarms = page.data || [];
        return Promise.all(alarms.map(a =>
            api('/alarm/' + a.id.id + '/clear', { method: 'POST' }).catch(() => {})
        ));
    })
    .then(() => loadAlarmHistory())
    .catch(err => alert('Error: ' + err.message));
}

// ── Browser Notification for Active Alarms (polling) ───────────────
let lastNotifiedAlarms = new Set();

function checkAlarmsAndNotify() {
    if (!TOKEN || !allDevices.length) return;

    allDevices.forEach(device => {
        api('/plugins/telemetry/DEVICE/' + device.id.id + '/values/timeseries?keys=tdsAlarm,phAlarm,tempAlarm,tds,pH,waterTemp')
        .then(ts => {
            const tdsA  = tv(ts, 'tdsAlarm')  === 'true';
            const phA   = tv(ts, 'phAlarm')   === 'true';
            const tempA = tv(ts, 'tempAlarm') === 'true';

            const alarms = [];
            if (tdsA)  alarms.push('TDS: ' + (tv(ts, 'tds') || '?') + ' ppm');
            if (phA)   alarms.push('pH: ' + (tv(ts, 'pH') || '?'));
            if (tempA) alarms.push('Temp: ' + (tv(ts, 'waterTemp') || '?') + '\u00b0C');

            if (alarms.length === 0) {
                lastNotifiedAlarms.delete(device.id.id);
                return;
            }

            // Only notify once per alarm cycle (don't spam)
            const alarmKey = device.id.id + ':' + alarms.join(',');
            if (lastNotifiedAlarms.has(alarmKey)) return;
            lastNotifiedAlarms.add(alarmKey);

            // Check if web notifications are enabled for this device
            if ('Notification' in window && Notification.permission === 'granted') {
                new Notification('AquaSicura Alarm - ' + device.name, {
                    body: alarms.join('\n'),
                    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">💧</text></svg>',
                    tag: 'alarm-' + device.id.id,
                    requireInteraction: true
                });
            }
        })
        .catch(() => {});
    });
}

// Check for alarms every 30 seconds
setInterval(checkAlarmsAndNotify, 30000);

// ── Tab switch hooks ────────────────────────────────────────────────
const origSwitchTab = switchTab;
switchTab = function(btn) {
    origSwitchTab(btn);
    const tab = btn.dataset.tab;
    if (tab === 'devices' && IS_ADMIN) loadDevicesTable();
    if (tab === 'customers' && IS_ADMIN) loadCustomers();
    if (tab === 'alarms') populateAlarmDeviceSelector();
    if (tab === 'charts') { populateChartDeviceSelector(); loadCharts(); }
    if (tab === 'log')    { populateLogDeviceSelector(); loadLog(); }
};

// ── Auto-refresh every 30 seconds ───────────────────────────────────
setInterval(() => {
    if (TOKEN && document.getElementById('tab-dashboard').classList.contains('active')) {
        refreshDashboard();
    }
}, 30000);

// ══════════════════════════════════════════════════════════════════════
// CHARTS — Time-series sensor data using Chart.js
// ══════════════════════════════════════════════════════════════════════

const chartInstances = {};
const CHART_COLORS = {
    pH:       { border: '#4a6fa5', bg: 'rgba(74,111,165,0.12)' },
    tds:      { border: '#e67e22', bg: 'rgba(230,126,34,0.12)' },
    temp:     { border: '#e53935', bg: 'rgba(229,57,53,0.12)' },
    boxTemp:  { border: '#8e24aa', bg: 'rgba(142,36,170,0.12)' },
    flow:     { border: '#43a047', bg: 'rgba(67,160,71,0.12)' },
    pressure: { border: '#00897b', bg: 'rgba(0,137,123,0.12)' }
};

function populateChartDeviceSelector() {
    const sel = document.getElementById('chart-device-select');
    const cur = sel.value;
    sel.innerHTML = '';
    allDevices.forEach(d => {
        sel.innerHTML += '<option value="' + d.id.id + '"' + (d.id.id === cur ? ' selected' : '') + '>' + d.name + '</option>';
    });
}

function populateLogDeviceSelector() {
    const sel = document.getElementById('log-device-select');
    const cur = sel.value;
    sel.innerHTML = '';
    allDevices.forEach(d => {
        sel.innerHTML += '<option value="' + d.id.id + '"' + (d.id.id === cur ? ' selected' : '') + '>' + d.name + '</option>';
    });
}

function loadCharts() {
    const deviceId = document.getElementById('chart-device-select').value;
    if (!deviceId) return;
    const range = parseInt(document.getElementById('chart-range').value);
    const endTs = Date.now();
    const startTs = endTs - range;
    const keys = 'pH,tds,waterTemp,boxTemp,flowRate,pressure';

    api('/plugins/telemetry/DEVICE/' + deviceId + '/values/timeseries?keys=' + keys +
        '&startTs=' + startTs + '&endTs=' + endTs + '&limit=1000&orderBy=ASC')
    .then(ts => {
        renderChart('chart-ph',       ts, 'pH',       'pH',              CHART_COLORS.pH);
        renderChart('chart-tds',      ts, 'tds',      'TDS (ppm)',       CHART_COLORS.tds);
        renderChart('chart-temp',     ts, 'waterTemp', 'Water Temp (°C)', CHART_COLORS.temp);
        renderChart('chart-boxtemp',  ts, 'boxTemp',  'Box Temp (°C)',   CHART_COLORS.boxTemp);
        renderChart('chart-flow',     ts, 'flowRate', 'Flow (L/min)',    CHART_COLORS.flow);
        renderChart('chart-pressure', ts, 'pressure', 'Pressure (mbar)', CHART_COLORS.pressure);
    })
    .catch(err => { console.error('Chart load error:', err); });
}

function renderChart(canvasId, telemetry, key, label, colors) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    // Destroy existing chart
    if (chartInstances[canvasId]) {
        chartInstances[canvasId].destroy();
        delete chartInstances[canvasId];
    }

    const raw = telemetry[key] || [];
    if (raw.length === 0) {
        // No data — show empty chart with message
        chartInstances[canvasId] = new Chart(canvas, {
            type: 'line',
            data: { datasets: [] },
            options: {
                plugins: {
                    title: { display: true, text: 'No data available', color: '#999' }
                }
            }
        });
        return;
    }

    const data = raw.map(p => ({ x: p.ts, y: parseFloat(p.value) }));

    chartInstances[canvasId] = new Chart(canvas, {
        type: 'line',
        data: {
            datasets: [{
                label: label,
                data: data,
                borderColor: colors.border,
                backgroundColor: colors.bg,
                borderWidth: 2,
                pointRadius: data.length > 200 ? 0 : 2,
                pointHoverRadius: 4,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: {
                    type: 'time',
                    time: { tooltipFormat: 'yyyy-MM-dd HH:mm:ss' },
                    ticks: { maxTicksLimit: 8, font: { size: 11 } },
                    grid: { color: 'rgba(0,0,0,0.05)' }
                },
                y: {
                    ticks: { font: { size: 11 } },
                    grid: { color: 'rgba(0,0,0,0.05)' }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    titleFont: { size: 12 },
                    bodyFont: { size: 12 },
                    callbacks: {
                        title: function(ctx) {
                            return new Date(ctx[0].parsed.x).toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// ══════════════════════════════════════════════════════════════════════
// LOG TABLE — Historical telemetry with CSV export
// ══════════════════════════════════════════════════════════════════════

let logData = [];  // cached for CSV export

function loadLog() {
    const deviceId = document.getElementById('log-device-select').value;
    if (!deviceId) return;
    const range = parseInt(document.getElementById('log-range').value);
    const limit = parseInt(document.getElementById('log-limit').value);
    const endTs = Date.now();
    const startTs = endTs - range;
    const keys = 'pH,tds,waterTemp,boxTemp,flowRate,pressure,uvState,fanState,totalErrors,tdsAlarm,phAlarm,tempAlarm';

    const tbody = document.getElementById('log-tbody');
    tbody.innerHTML = '<tr><td colspan="10" class="loading">Loading...</td></tr>';

    api('/plugins/telemetry/DEVICE/' + deviceId + '/values/timeseries?keys=' + keys +
        '&startTs=' + startTs + '&endTs=' + endTs + '&limit=' + limit + '&orderBy=DESC')
    .then(ts => {
        // Build unified time-series: collect all unique timestamps
        const tsMap = {};
        for (const key in ts) {
            (ts[key] || []).forEach(p => {
                if (!tsMap[p.ts]) tsMap[p.ts] = {};
                tsMap[p.ts][key] = p.value;
            });
        }

        // Sort by timestamp descending
        const timestamps = Object.keys(tsMap).map(Number).sort((a,b) => b - a);
        logData = timestamps.map(t => ({
            timestamp: t,
            ...tsMap[t]
        }));

        if (logData.length === 0) {
            tbody.innerHTML = '<tr><td colspan="10" class="loading">No data found for this time range.</td></tr>';
            return;
        }

        tbody.innerHTML = logData.map(row => {
            const d = new Date(row.timestamp);
            const dateStr = d.getFullYear() + '-' +
                String(d.getMonth()+1).padStart(2,'0') + '-' +
                String(d.getDate()).padStart(2,'0') + ' ' +
                String(d.getHours()).padStart(2,'0') + ':' +
                String(d.getMinutes()).padStart(2,'0') + ':' +
                String(d.getSeconds()).padStart(2,'0');

            const hasAlarm = row.tdsAlarm === 'true' || row.phAlarm === 'true' || row.tempAlarm === 'true';
            const cls = hasAlarm ? ' class="alarm-row"' : '';

            return '<tr' + cls + '>' +
                '<td>' + dateStr + '</td>' +
                '<td>' + fmtVal(row.pH, 2) + '</td>' +
                '<td>' + fmtVal(row.tds, 0) + '</td>' +
                '<td>' + fmtVal(row.waterTemp, 1) + '</td>' +
                '<td>' + fmtVal(row.boxTemp, 1) + '</td>' +
                '<td>' + fmtVal(row.flowRate, 2) + '</td>' +
                '<td>' + fmtVal(row.pressure, 1) + '</td>' +
                '<td>' + fmtBool(row.uvState) + '</td>' +
                '<td>' + fmtBool(row.fanState) + '</td>' +
                '<td>' + (row.totalErrors || '0') + '</td>' +
                '</tr>';
        }).join('');
    })
    .catch(err => {
        tbody.innerHTML = '<tr><td colspan="10" class="loading">Error: ' + err.message + '</td></tr>';
    });
}

function fmtVal(v, decimals) {
    if (v === undefined || v === null || v === '') return '--';
    return parseFloat(v).toFixed(decimals);
}

function fmtBool(v) {
    if (v === undefined || v === null) return '--';
    if (v === 'true' || v === true) return '<span style="color:var(--success)">ON</span>';
    return '<span style="color:var(--text-light)">OFF</span>';
}

function exportLogCSV() {
    if (logData.length === 0) { alert('No data to export. Load a log first.'); return; }

    const deviceSel = document.getElementById('log-device-select');
    const deviceName = deviceSel.options[deviceSel.selectedIndex]?.text || 'device';

    const header = 'Timestamp,pH,TDS_ppm,WaterTemp_C,BoxTemp_C,FlowRate_Lmin,Pressure_mbar,UV,Fan,Errors,TDS_Alarm,pH_Alarm,Temp_Alarm';
    const rows = logData.map(row => {
        const d = new Date(row.timestamp);
        const dateStr = d.getFullYear() + '-' +
            String(d.getMonth()+1).padStart(2,'0') + '-' +
            String(d.getDate()).padStart(2,'0') + ' ' +
            String(d.getHours()).padStart(2,'0') + ':' +
            String(d.getMinutes()).padStart(2,'0') + ':' +
            String(d.getSeconds()).padStart(2,'0');
        return [
            dateStr,
            row.pH || '',
            row.tds || '',
            row.waterTemp || '',
            row.boxTemp || '',
            row.flowRate || '',
            row.pressure || '',
            row.uvState || '',
            row.fanState || '',
            row.totalErrors || '0',
            row.tdsAlarm || '',
            row.phAlarm || '',
            row.tempAlarm || ''
        ].join(',');
    });

    const csv = header + '\n' + rows.join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AquaSicura_' + deviceName + '_' + new Date().toISOString().slice(0,10) + '.csv';
    a.click();
    URL.revokeObjectURL(url);
}

// ══════════════════════════════════════════════════════════════════════
// MAP VIEW
// ══════════════════════════════════════════════════════════════════════
let deviceMap = null;
let mapMarkers = [];

function initOrRefreshMap() {
    const container = document.getElementById('map-container');
    if (!container) return;

    if (!deviceMap) {
        // Initialize Leaflet map centered on Dubai
        deviceMap = L.map('map-container', {
            center: [25.2048, 55.2708],
            zoom: 11,
            zoomControl: true,
            scrollWheelZoom: true
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(deviceMap);
    }

    // Invalidate size in case container was hidden
    deviceMap.invalidateSize();

    // Clear existing markers
    mapMarkers.forEach(m => deviceMap.removeLayer(m));
    mapMarkers = [];

    // Add markers for ALL devices — use Dubai default if no coordinates set
    const DUBAI_CENTER_LAT = 25.2048;
    const DUBAI_CENTER_LNG = 55.2708;
    const bounds = [];
    allDevices.forEach((d, idx) => {
        const attrs = allDeviceAttrs[d.id.id] || {};
        let lat = parseFloat(attrs.latitude);
        let lng = parseFloat(attrs.longitude);
        let hasLocation = (lat && lng && !(lat === 0 && lng === 0));

        if (!hasLocation) {
            // Place unlocated devices spread around Dubai so they don't stack
            const angle = (idx * 137.508) * Math.PI / 180; // golden angle spread
            const radius = 0.015 + (idx % 5) * 0.008;
            lat = DUBAI_CENTER_LAT + radius * Math.cos(angle);
            lng = DUBAI_CENTER_LNG + radius * Math.sin(angle);
        }

        const filterType = attrs.filterType || 'Unknown';
        const icon = FILTER_TYPE_ICONS[filterType] || '📡';
        const address = attrs.address || '';
        const custName = d.customerTitle || '';

        // Custom icon — dim style for unlocated devices
        const pinClass = hasLocation ? 'map-marker-pin' : 'map-marker-pin map-marker-unlocated';
        const markerIcon = L.divIcon({
            className: 'device-map-marker',
            html: `<div class="${pinClass}"><span class="map-marker-icon">${icon}</span></div><div class="map-marker-label">${d.name}</div>`,
            iconSize: [40, 52],
            iconAnchor: [20, 52],
            popupAnchor: [0, -52]
        });

        const marker = L.marker([lat, lng], { icon: markerIcon }).addTo(deviceMap);

        // Popup with device info
        const locationNote = hasLocation ? '<p><strong>Coordinates:</strong> ' + lat.toFixed(4) + ', ' + lng.toFixed(4) + '</p>'
            : '<p style="color:var(--warn);font-style:italic;">📍 No address set — showing approximate Dubai location</p>';
        const popupHtml = `
            <div class="map-popup">
                <h4>${icon} ${d.name}</h4>
                <p><strong>Type:</strong> ${filterType}</p>
                ${attrs.filterRef ? '<p><strong>Ref:</strong> ' + attrs.filterRef + '</p>' : ''}
                ${custName ? '<p><strong>Customer:</strong> ' + custName + '</p>' : ''}
                ${address ? '<p><strong>Address:</strong> ' + address + '</p>' : ''}
                ${locationNote}
                <button class="btn btn-sm btn-primary" onclick="mapGoToDevice('${d.id.id}')">View Device</button>
            </div>
        `;
        marker.bindPopup(popupHtml, { maxWidth: 280 });
        mapMarkers.push(marker);
        bounds.push([lat, lng]);
    });

    // Fit bounds if we have markers
    if (bounds.length > 0) {
        if (bounds.length === 1) {
            deviceMap.setView(bounds[0], 15);
        } else {
            deviceMap.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
        }
    }
}

function refreshMap() {
    // Re-fetch device data then update map
    refreshDashboard();
    setTimeout(() => initOrRefreshMap(), 1500);
}

function mapGoToDevice(deviceId) {
    // Find the device and its telemetry, switch to dashboard and open detail
    const device = allDevices.find(d => d.id.id === deviceId);
    if (!device) return;

    // Fetch telemetry for this device
    api('/plugins/telemetry/DEVICE/' + deviceId + '/values/timeseries?keys=pH,tds,waterTemp,boxTemp,flowRate,pressure,tdsAlarm,phAlarm,tempAlarm,tdsAlarmMin,tdsAlarmMax,phAlarmMin,phAlarmMax,tempAlarmMin,tempAlarmMax')
        .then(ts => {
            showDeviceDetail(device, ts);
        })
        .catch(() => {
            showDeviceDetail(device, {});
        });
}
