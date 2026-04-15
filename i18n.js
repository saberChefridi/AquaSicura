/* ══════════════════════════════════════════════════════════════════════
   AquaSicura — Internationalization (i18n)
   Languages: English (default), Arabic, Italian
   ══════════════════════════════════════════════════════════════════════ */

const TRANSLATIONS = {
// ─── NAVIGATION ──────────────────────────────────────────────────────
"nav.philosophy":       { en:"Philosophy",   ar:"\u0641\u0644\u0633\u0641\u0629",    it:"Filosofia" },
"nav.products":         { en:"Products",     ar:"\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a",  it:"Prodotti" },
"nav.store":            { en:"Store",        ar:"\u0627\u0644\u0645\u062a\u062c\u0631",    it:"Negozio" },
"nav.technology":       { en:"Technology",   ar:"\u0627\u0644\u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627", it:"Tecnologia" },
"nav.dashboard":        { en:"Dashboard",    ar:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629", it:"Pannello" },
"nav.home":             { en:"Home",         ar:"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",  it:"Home" },
"nav.logout":           { en:"Logout",       ar:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c", it:"Esci" },

// ─── HERO SECTION ────────────────────────────────────────────────────
"hero.badge":           { en:"Water Filtration Intelligence",
                          ar:"\u0630\u0643\u0627\u0621 \u062a\u0646\u0642\u064a\u0629 \u0627\u0644\u0645\u064a\u0627\u0647",
                          it:"Intelligenza nella Filtrazione dell'Acqua" },
"hero.title1":          { en:"The Essence",
                          ar:"\u062c\u0648\u0647\u0631",
                          it:"L'Essenza" },
"hero.title2":          { en:"of Living Water",
                          ar:"\u0627\u0644\u0645\u0627\u0621 \u0627\u0644\u062d\u064a",
                          it:"dell'Acqua Viva" },
"hero.subtitle":        { en:"In ancient times, water was revered as the source of all life \u2014 a sacred element flowing with vitality. Today, we restore that reverence through precision monitoring and purification.",
                          ar:"\u0641\u064a \u0627\u0644\u0639\u0635\u0648\u0631 \u0627\u0644\u0642\u062f\u064a\u0645\u0629\u060c \u0643\u0627\u0646 \u0627\u0644\u0645\u0627\u0621 \u064a\u064f\u0628\u062c\u0651\u064e\u0644 \u0628\u0627\u0639\u062a\u0628\u0627\u0631\u0647 \u0645\u0635\u062f\u0631 \u0643\u0644 \u062d\u064a\u0627\u0629 \u2014 \u0639\u0646\u0635\u0631 \u0645\u0642\u062f\u0633 \u064a\u062a\u062f\u0641\u0642 \u0628\u0627\u0644\u062d\u064a\u0648\u064a\u0629. \u0627\u0644\u064a\u0648\u0645\u060c \u0646\u0639\u064a\u062f \u0630\u0644\u0643 \u0627\u0644\u062a\u0628\u062c\u064a\u0644 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u0644\u062a\u0646\u0642\u064a\u0629.",
                          it:"Nell'antichit\u00e0, l'acqua era venerata come fonte di ogni vita \u2014 un elemento sacro che scorre con vitalit\u00e0. Oggi, ripristiniamo quella reverenza attraverso il monitoraggio di precisione e la purificazione." },
"hero.discover":        { en:"Discover",     ar:"\u0627\u0643\u062a\u0634\u0641",    it:"Scopri" },
"hero.enter":           { en:"Enter Dashboard", ar:"\u062f\u062e\u0648\u0644 \u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629", it:"Accedi al Pannello" },
"hero.scroll":          { en:"Scroll",       ar:"\u0645\u0631\u0631 \u0644\u0644\u0623\u0633\u0641\u0644", it:"Scorri" },

// ─── PHILOSOPHY SECTION ──────────────────────────────────────────────
"phil.badge":           { en:"Philosophy",   ar:"\u0641\u0644\u0633\u0641\u0629",    it:"Filosofia" },
"phil.title":           { en:"Water is Life.",ar:"\u0627\u0644\u0645\u0627\u0621 \u0647\u0648 \u0627\u0644\u062d\u064a\u0627\u0629.",it:"L'Acqua \u00e8 Vita." },
"phil.title2":          { en:"Yet the water we drink has lost its life.",
                          ar:"\u0644\u0643\u0646 \u0627\u0644\u0645\u0627\u0621 \u0627\u0644\u0630\u064a \u0646\u0634\u0631\u0628\u0647 \u0641\u0642\u062f \u062d\u064a\u0627\u062a\u0647.",
                          it:"Eppure l'acqua che beviamo ha perso la sua vita." },
"phil.greeks.title":    { en:"The Ancient Greeks", ar:"\u0627\u0644\u064a\u0648\u0646\u0627\u0646 \u0627\u0644\u0642\u062f\u0645\u0627\u0621", it:"Gli Antichi Greci" },
"phil.greeks.text":     { en:"Thales of Miletus declared water the <em>arche</em> \u2014 the fundamental principle from which all things emerge. To the ancients, water was not merely a substance but the breath of creation itself.",
                          ar:"\u0623\u0639\u0644\u0646 \u0637\u0627\u0644\u064a\u0633 \u0627\u0644\u0645\u0644\u0637\u064a \u0623\u0646 \u0627\u0644\u0645\u0627\u0621 \u0647\u0648 <em>\u0627\u0644\u0623\u0631\u0643\u064a</em> \u2014 \u0627\u0644\u0645\u0628\u062f\u0623 \u0627\u0644\u0623\u0633\u0627\u0633\u064a \u0627\u0644\u0630\u064a \u062a\u0646\u0628\u062b\u0642 \u0645\u0646\u0647 \u0643\u0644 \u0627\u0644\u0623\u0634\u064a\u0627\u0621. \u0628\u0627\u0644\u0646\u0633\u0628\u0629 \u0644\u0644\u0642\u062f\u0645\u0627\u0621\u060c \u0644\u0645 \u064a\u0643\u0646 \u0627\u0644\u0645\u0627\u0621 \u0645\u062c\u0631\u062f \u0645\u0627\u062f\u0629 \u0628\u0644 \u0646\u0641\u064e\u0633 \u0627\u0644\u062e\u0644\u0642 \u0630\u0627\u062a\u0647.",
                          it:"Talete di Mileto dichiar\u00f2 l'acqua l'<em>arch\u00e9</em> \u2014 il principio fondamentale da cui tutte le cose emergono. Per gli antichi, l'acqua non era semplicemente una sostanza ma il respiro stesso della creazione." },
"phil.dead.title":      { en:"Dead Water",   ar:"\u0627\u0644\u0645\u0627\u0621 \u0627\u0644\u0645\u064a\u062a", it:"Acqua Morta" },
"phil.dead.text":       { en:"Modern treatment strips water of its minerals and memory. What arrives at our taps has traveled through miles of pipes, losing its structure, its minerals, its very essence. We drink, but we are not nourished.",
                          ar:"\u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u062d\u062f\u064a\u062b\u0629 \u062a\u062c\u0631\u062f \u0627\u0644\u0645\u0627\u0621 \u0645\u0646 \u0645\u0639\u0627\u062f\u0646\u0647 \u0648\u0630\u0627\u0643\u0631\u062a\u0647. \u0645\u0627 \u064a\u0635\u0644 \u0625\u0644\u0649 \u0635\u0646\u0627\u0628\u064a\u0631\u0646\u0627 \u0642\u062f \u0633\u0627\u0641\u0631 \u0639\u0628\u0631 \u0623\u0645\u064a\u0627\u0644 \u0645\u0646 \u0627\u0644\u0623\u0646\u0627\u0628\u064a\u0628\u060c \u0641\u0627\u0642\u062f\u064b\u0627 \u0628\u0646\u064a\u062a\u0647 \u0648\u0645\u0639\u0627\u062f\u0646\u0647 \u0648\u062c\u0648\u0647\u0631\u0647. \u0646\u0634\u0631\u0628\u060c \u0644\u0643\u0646\u0646\u0627 \u0644\u0627 \u0646\u062a\u063a\u0630\u0649.",
                          it:"Il trattamento moderno priva l'acqua dei suoi minerali e della sua memoria. Ci\u00f2 che arriva ai nostri rubinetti ha viaggiato per chilometri di tubature, perdendo la sua struttura, i suoi minerali, la sua essenza. Beviamo, ma non siamo nutriti." },
"phil.revival.title":   { en:"Revival",      ar:"\u0627\u0644\u0625\u062d\u064a\u0627\u0621",   it:"Rinascita" },
"phil.revival.text":    { en:"AquaSicura is our answer. Through multi-stage filtration, UV purification, and real-time intelligence, we do not merely clean water \u2014 we <em>revive</em> it. Restoring mineral balance, ensuring purity, bringing water back to life.",
                          ar:"AquaSicura \u0647\u064a \u0625\u062c\u0627\u0628\u062a\u0646\u0627. \u0645\u0646 \u062e\u0644\u0627\u0644 \u0627\u0644\u062a\u0631\u0634\u064a\u062d \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0645\u0631\u0627\u062d\u0644\u060c \u0648\u0627\u0644\u062a\u0646\u0642\u064a\u0629 \u0628\u0627\u0644\u0623\u0634\u0639\u0629 \u0641\u0648\u0642 \u0627\u0644\u0628\u0646\u0641\u0633\u062c\u064a\u0629\u060c \u0648\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0641\u0648\u0631\u064a\u060c \u0646\u062d\u0646 \u0644\u0627 \u0646\u0646\u0638\u0641 \u0627\u0644\u0645\u0627\u0621 \u0641\u062d\u0633\u0628 \u2014 \u0628\u0644 <em>\u0646\u064f\u062d\u064a\u064a\u0647</em>. \u0646\u0633\u062a\u0639\u064a\u062f \u062a\u0648\u0627\u0632\u0646 \u0627\u0644\u0645\u0639\u0627\u062f\u0646\u060c \u0648\u0646\u0636\u0645\u0646 \u0627\u0644\u0646\u0642\u0627\u0621\u060c \u0648\u0646\u0639\u064a\u062f \u0627\u0644\u0645\u0627\u0621 \u0625\u0644\u0649 \u0627\u0644\u062d\u064a\u0627\u0629.",
                          it:"AquaSicura \u00e8 la nostra risposta. Attraverso la filtrazione multistadio, la purificazione UV e l'intelligenza in tempo reale, non ci limitiamo a pulire l'acqua \u2014 la <em>rivitalizziamo</em>. Ripristinando l'equilibrio minerale, garantendo la purezza, riportando l'acqua alla vita." },

// ─── QUOTE ───────────────────────────────────────────────────────────
"quote.text":           { en:"\u201cWater is the driving force of all nature.\u201d",
                          ar:"\u201c\u0627\u0644\u0645\u0627\u0621 \u0647\u0648 \u0627\u0644\u0642\u0648\u0629 \u0627\u0644\u0645\u062d\u0631\u0643\u0629 \u0644\u0643\u0644 \u0627\u0644\u0637\u0628\u064a\u0639\u0629.\u201d",
                          it:"\u201cL'acqua \u00e8 la forza motrice di tutta la natura.\u201d" },
"quote.author":         { en:"\u2014 Leonardo da Vinci", ar:"\u2014 \u0644\u064a\u0648\u0646\u0627\u0631\u062f\u0648 \u062f\u0627 \u0641\u064a\u0646\u0634\u064a", it:"\u2014 Leonardo da Vinci" },

// ─── PRODUCTS SECTION (Landing) ──────────────────────────────────────
"prod.badge":           { en:"Our Solutions", ar:"\u062d\u0644\u0648\u0644\u0646\u0627",  it:"Le Nostre Soluzioni" },
"prod.title1":          { en:"Purification,", ar:"\u062a\u0646\u0642\u064a\u0629\u060c",  it:"Purificazione," },
"prod.title2":          { en:"Tailored to Every Drop.", ar:"\u0645\u0635\u0645\u0645\u0629 \u0644\u0643\u0644 \u0642\u0637\u0631\u0629.", it:"Su Misura per Ogni Goccia." },
"prod.intro":           { en:"From the kitchen tap to the swimming pool \u2014 every water source deserves revival. Choose the solution that fits your life.",
                          ar:"\u0645\u0646 \u0635\u0646\u0628\u0648\u0631 \u0627\u0644\u0645\u0637\u0628\u062e \u0625\u0644\u0649 \u062d\u0645\u0627\u0645 \u0627\u0644\u0633\u0628\u0627\u062d\u0629 \u2014 \u0643\u0644 \u0645\u0635\u062f\u0631 \u0645\u064a\u0627\u0647 \u064a\u0633\u062a\u062d\u0642 \u0627\u0644\u0625\u062d\u064a\u0627\u0621. \u0627\u062e\u062a\u0631 \u0627\u0644\u062d\u0644 \u0627\u0644\u0645\u0646\u0627\u0633\u0628 \u0644\u062d\u064a\u0627\u062a\u0643.",
                          it:"Dal rubinetto della cucina alla piscina \u2014 ogni fonte d'acqua merita di rinascere. Scegli la soluzione adatta alla tua vita." },
"prod.popular":         { en:"Most Popular",  ar:"\u0627\u0644\u0623\u0643\u062b\u0631 \u0634\u0639\u0628\u064a\u0629", it:"Pi\u00f9 Popolare" },
"prod.viewstore":       { en:"View in Store",  ar:"\u0639\u0631\u0636 \u0641\u064a \u0627\u0644\u0645\u062a\u062c\u0631", it:"Vedi nel Negozio" },
"prod.installation":    { en:"Installation",   ar:"\u0627\u0644\u062a\u0631\u0643\u064a\u0628",    it:"Installazione" },
"prod.advantages":      { en:"Advantages",     ar:"\u0627\u0644\u0645\u0632\u0627\u064a\u0627",    it:"Vantaggi" },
"prod.afterservice":    { en:"After Service",   ar:"\u062e\u062f\u0645\u0629 \u0645\u0627 \u0628\u0639\u062f \u0627\u0644\u0628\u064a\u0639", it:"Assistenza Post-Vendita" },
"prod.smartmon":        { en:"Smart Monitoring", ar:"\u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0630\u0643\u064a\u0629", it:"Monitoraggio Intelligente" },
"prod.easyinstall":     { en:"Easy Install",    ar:"\u062a\u0631\u0643\u064a\u0628 \u0633\u0647\u0644", it:"Facile Installazione" },

// Product names & taglines
"prod.drink.name":      { en:"Drinking Water Filter", ar:"\u0641\u0644\u062a\u0631 \u0645\u064a\u0627\u0647 \u0627\u0644\u0634\u0631\u0628", it:"Filtro per Acqua Potabile" },
"prod.drink.tag":       { en:"Pure water, straight from your tap.",
                          ar:"\u0645\u064a\u0627\u0647 \u0646\u0642\u064a\u0629\u060c \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0646 \u0635\u0646\u0628\u0648\u0631\u0643.",
                          it:"Acqua pura, direttamente dal rubinetto." },
"prod.shower.name":     { en:"Shower Filter",  ar:"\u0641\u0644\u062a\u0631 \u0627\u0644\u062f\u064f\u0634", it:"Filtro Doccia" },
"prod.shower.tag":      { en:"Bathe in water that cares for your skin.",
                          ar:"\u0627\u0633\u062a\u062d\u0645 \u0628\u0645\u064a\u0627\u0647 \u062a\u0639\u062a\u0646\u064a \u0628\u0628\u0634\u0631\u062a\u0643.",
                          it:"Fai la doccia con acqua che si prende cura della tua pelle." },
"prod.pool.name":       { en:"Swimming Pool Filter", ar:"\u0641\u0644\u062a\u0631 \u062d\u0645\u0627\u0645 \u0627\u0644\u0633\u0628\u0627\u062d\u0629", it:"Filtro per Piscina" },
"prod.pool.tag":        { en:"Crystal-clear water, chemical-free serenity.",
                          ar:"\u0645\u064a\u0627\u0647 \u0635\u0627\u0641\u064a\u0629 \u0643\u0627\u0644\u0643\u0631\u064a\u0633\u062a\u0627\u0644\u060c \u0633\u0643\u064a\u0646\u0629 \u062e\u0627\u0644\u064a\u0629 \u0645\u0646 \u0627\u0644\u0643\u064a\u0645\u064a\u0627\u0626\u064a\u0627\u062a.",
                          it:"Acqua cristallina, serenit\u00e0 senza prodotti chimici." },
"prod.compact.name":    { en:"Compact Sink Filter", ar:"\u0641\u0644\u062a\u0631 \u0627\u0644\u062d\u0648\u0636 \u0627\u0644\u0645\u062f\u0645\u062c", it:"Filtro Compatto per Lavello" },
"prod.compact.tag":     { en:"Small space, big purification.",
                          ar:"\u0645\u0633\u0627\u062d\u0629 \u0635\u063a\u064a\u0631\u0629\u060c \u062a\u0646\u0642\u064a\u0629 \u0643\u0628\u064a\u0631\u0629.",
                          it:"Piccolo spazio, grande purificazione." },

// ─── MISSION / TECHNOLOGY SECTION ────────────────────────────────────
"mission.badge":        { en:"Mission",       ar:"\u0627\u0644\u0645\u0647\u0645\u0629",    it:"Missione" },
"mission.title1":       { en:"Precision Monitoring,", ar:"\u0645\u0631\u0627\u0642\u0628\u0629 \u062f\u0642\u064a\u0642\u0629\u060c", it:"Monitoraggio di Precisione," },
"mission.title2":       { en:"Pristine Water.",       ar:"\u0645\u064a\u0627\u0647 \u0646\u0642\u064a\u0629.",       it:"Acqua Pura." },
"mission.f1.title":     { en:"Real-Time Sensors",     ar:"\u0623\u062c\u0647\u0632\u0629 \u0627\u0633\u062a\u0634\u0639\u0627\u0631 \u0641\u0648\u0631\u064a\u0629", it:"Sensori in Tempo Reale" },
"mission.f1.text":      { en:"pH, TDS, temperature, flow rate, and pressure \u2014 measured every second, reported every minute. Nothing escapes our vigilance.",
                          ar:"pH\u060c TDS\u060c \u062f\u0631\u062c\u0629 \u0627\u0644\u062d\u0631\u0627\u0631\u0629\u060c \u0645\u0639\u062f\u0644 \u0627\u0644\u062a\u062f\u0641\u0642\u060c \u0648\u0627\u0644\u0636\u063a\u0637 \u2014 \u062a\u064f\u0642\u0627\u0633 \u0643\u0644 \u062b\u0627\u0646\u064a\u0629\u060c \u0648\u062a\u064f\u0628\u0644\u063a \u0643\u0644 \u062f\u0642\u064a\u0642\u0629. \u0644\u0627 \u0634\u064a\u0621 \u064a\u0641\u0644\u062a \u0645\u0646 \u0645\u0631\u0627\u0642\u0628\u062a\u0646\u0627.",
                          it:"pH, TDS, temperatura, portata e pressione \u2014 misurati ogni secondo, riportati ogni minuto. Nulla sfugge alla nostra vigilanza." },
"mission.f2.title":     { en:"Intelligent Alarms",    ar:"\u0625\u0646\u0630\u0627\u0631\u0627\u062a \u0630\u0643\u064a\u0629",  it:"Allarmi Intelligenti" },
"mission.f2.text":      { en:"Configurable thresholds with multi-channel notifications. Browser, email, SMS, WhatsApp \u2014 know instantly when water quality deviates.",
                          ar:"\u062d\u062f\u0648\u062f \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062a\u0643\u0648\u064a\u0646 \u0645\u0639 \u0625\u0634\u0639\u0627\u0631\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u0642\u0646\u0648\u0627\u062a. \u0627\u0644\u0645\u062a\u0635\u0641\u062d\u060c \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u060c SMS\u060c WhatsApp \u2014 \u0627\u0639\u0631\u0641 \u0641\u0648\u0631\u064b\u0627 \u0639\u0646\u062f \u0627\u0646\u062d\u0631\u0627\u0641 \u062c\u0648\u062f\u0629 \u0627\u0644\u0645\u064a\u0627\u0647.",
                          it:"Soglie configurabili con notifiche multicanale. Browser, email, SMS, WhatsApp \u2014 saprai immediatamente quando la qualit\u00e0 dell'acqua devia." },
"mission.f3.title":     { en:"UV Purification",       ar:"\u0627\u0644\u062a\u0646\u0642\u064a\u0629 \u0628\u0627\u0644\u0623\u0634\u0639\u0629 \u0641\u0648\u0642 \u0627\u0644\u0628\u0646\u0641\u0633\u062c\u064a\u0629", it:"Purificazione UV" },
"mission.f3.text":      { en:"Automated UV lamp sterilization eliminates 99.9% of bacteria and viruses, controlled and monitored through our smart relay system.",
                          ar:"\u0627\u0644\u062a\u0639\u0642\u064a\u0645 \u0627\u0644\u062a\u0644\u0642\u0627\u0626\u064a \u0628\u0645\u0635\u0628\u0627\u062d UV \u064a\u0642\u0636\u064a \u0639\u0644\u0649 99.9% \u0645\u0646 \u0627\u0644\u0628\u0643\u062a\u064a\u0631\u064a\u0627 \u0648\u0627\u0644\u0641\u064a\u0631\u0648\u0633\u0627\u062a\u060c \u0648\u064a\u062a\u0645 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a\u0647 \u0648\u0645\u0631\u0627\u0642\u0628\u062a\u0647 \u0639\u0628\u0631 \u0646\u0638\u0627\u0645 \u0627\u0644\u062a\u062a\u0627\u0628\u0639 \u0627\u0644\u0630\u0643\u064a.",
                          it:"La sterilizzazione automatica con lampada UV elimina il 99,9% di batteri e virus, controllata e monitorata tramite il nostro sistema relay intelligente." },
"mission.f4.title":     { en:"Cloud Dashboard",       ar:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0633\u062d\u0627\u0628\u0629",  it:"Dashboard Cloud" },
"mission.f4.text":      { en:"Monitor every device from anywhere. Historical charts, exportable logs, and alarm management \u2014 all from your browser.",
                          ar:"\u0631\u0627\u0642\u0628 \u0643\u0644 \u062c\u0647\u0627\u0632 \u0645\u0646 \u0623\u064a \u0645\u0643\u0627\u0646. \u0631\u0633\u0648\u0645 \u0628\u064a\u0627\u0646\u064a\u0629 \u062a\u0627\u0631\u064a\u062e\u064a\u0629\u060c \u0633\u062c\u0644\u0627\u062a \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062a\u0635\u062f\u064a\u0631\u060c \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0625\u0646\u0630\u0627\u0631\u0627\u062a \u2014 \u0643\u0644 \u0630\u0644\u0643 \u0645\u0646 \u0645\u062a\u0635\u0641\u062d\u0643.",
                          it:"Monitora ogni dispositivo da qualsiasi luogo. Grafici storici, log esportabili e gestione allarmi \u2014 tutto dal tuo browser." },

// ─── CTA SECTION ─────────────────────────────────────────────────────
"cta.title":            { en:"Begin Your Journey",   ar:"\u0627\u0628\u062f\u0623 \u0631\u062d\u0644\u062a\u0643",   it:"Inizia il Tuo Viaggio" },
"cta.text":             { en:"Access the AquaSicura monitoring dashboard to see your water quality in real time.",
                          ar:"\u0627\u062f\u062e\u0644 \u0644\u0648\u062d\u0629 \u0645\u0631\u0627\u0642\u0628\u0629 AquaSicura \u0644\u0631\u0624\u064a\u0629 \u062c\u0648\u062f\u0629 \u0645\u064a\u0627\u0647\u0643 \u0641\u064a \u0627\u0644\u0648\u0642\u062a \u0627\u0644\u0641\u0639\u0644\u064a.",
                          it:"Accedi alla dashboard di monitoraggio AquaSicura per vedere la qualit\u00e0 della tua acqua in tempo reale." },

// ─── FOOTER ──────────────────────────────────────────────────────────
"footer.copy":          { en:"\u00a9 2026 AquaSicura. Reviving the essence of water.",
                          ar:"\u00a9 2026 AquaSicura. \u0625\u062d\u064a\u0627\u0621 \u062c\u0648\u0647\u0631 \u0627\u0644\u0645\u0627\u0621.",
                          it:"\u00a9 2026 AquaSicura. Rivitalizzare l'essenza dell'acqua." },

// ─── STORE SCREEN ────────────────────────────────────────────────────
"store.back":           { en:"\u2190 Home",    ar:"\u2192 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629", it:"\u2190 Home" },
"store.navtitle":       { en:"AquaSicura Store", ar:"\u0645\u062a\u062c\u0631 AquaSicura", it:"Negozio AquaSicura" },
"store.hero.badge":     { en:"Our Solutions & Pricing", ar:"\u062d\u0644\u0648\u0644\u0646\u0627 \u0648\u0627\u0644\u0623\u0633\u0639\u0627\u0631", it:"Le Nostre Soluzioni e Prezzi" },
"store.hero.title":     { en:"Water Purification", ar:"\u062a\u0646\u0642\u064a\u0629 \u0627\u0644\u0645\u064a\u0627\u0647", it:"Purificazione dell'Acqua" },
"store.hero.title2":    { en:"Tailored for You", ar:"\u0645\u0635\u0645\u0645\u0629 \u0644\u0643", it:"Su Misura per Te" },
"store.hero.sub":       { en:"From residential taps to commercial pools \u2014 every drop matters. Browse our systems, view pricing, and request a free water analysis.",
                          ar:"\u0645\u0646 \u0635\u0646\u0627\u0628\u064a\u0631 \u0627\u0644\u0645\u0646\u0627\u0632\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0628\u062d \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629 \u2014 \u0643\u0644 \u0642\u0637\u0631\u0629 \u0645\u0647\u0645\u0629. \u062a\u0635\u0641\u062d \u0623\u0646\u0638\u0645\u062a\u0646\u0627\u060c \u0648\u0627\u0637\u0644\u0639 \u0639\u0644\u0649 \u0627\u0644\u0623\u0633\u0639\u0627\u0631\u060c \u0648\u0627\u0637\u0644\u0628 \u062a\u062d\u0644\u064a\u0644 \u0645\u064a\u0627\u0647 \u0645\u062c\u0627\u0646\u064a.",
                          it:"Dai rubinetti residenziali alle piscine commerciali \u2014 ogni goccia conta. Sfoglia i nostri sistemi, visualizza i prezzi e richiedi un'analisi gratuita dell'acqua." },
"store.demo.badge":     { en:"Special Offer",  ar:"\u0639\u0631\u0636 \u062e\u0627\u0635",   it:"Offerta Speciale" },
"store.demo.title":     { en:"Water Quality Analysis & Demo",
                          ar:"\u062a\u062d\u0644\u064a\u0644 \u062c\u0648\u062f\u0629 \u0627\u0644\u0645\u064a\u0627\u0647 \u0648\u0639\u0631\u0636 \u062a\u0648\u0636\u064a\u062d\u064a",
                          it:"Analisi della Qualit\u00e0 dell'Acqua e Demo" },
"store.demo.label":     { en:"Analysis & Demo", ar:"\u0627\u0644\u062a\u062d\u0644\u064a\u0644 \u0648\u0627\u0644\u0639\u0631\u0636", it:"Analisi e Demo" },
"store.demo.refund":    { en:"Fully refundable with any system purchase",
                          ar:"\u0642\u0627\u0628\u0644 \u0644\u0644\u0627\u0633\u062a\u0631\u062f\u0627\u062f \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0639\u0646\u062f \u0634\u0631\u0627\u0621 \u0623\u064a \u0646\u0638\u0627\u0645",
                          it:"Completamente rimborsabile con qualsiasi acquisto di sistema" },
"store.booknow":        { en:"Book Now",        ar:"\u0627\u062d\u062c\u0632 \u0627\u0644\u0622\u0646",  it:"Prenota Ora" },
"store.sysprice":       { en:"System Price",     ar:"\u0633\u0639\u0631 \u0627\u0644\u0646\u0638\u0627\u0645", it:"Prezzo del Sistema" },
"store.total":          { en:"Total",            ar:"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a",  it:"Totale" },
"store.totalfrom":      { en:"Total from",       ar:"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a \u0645\u0646", it:"Totale da" },
"store.reqquote":       { en:"Request Quote",    ar:"\u0627\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631", it:"Richiedi Preventivo" },
"store.reqsurvey":      { en:"Request Site Survey", ar:"\u0627\u0637\u0644\u0628 \u0645\u0639\u0627\u064a\u0646\u0629 \u0627\u0644\u0645\u0648\u0642\u0639", it:"Richiedi Sopralluogo" },
"store.ordernow":       { en:"Order Now",        ar:"\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646", it:"Ordina Ora" },
"store.free":           { en:"Free",             ar:"\u0645\u062c\u0627\u0646\u064a",    it:"Gratuito" },
"store.flagship":       { en:"Flagship",         ar:"\u0627\u0644\u0631\u0627\u0626\u062f",    it:"Prodotto di Punta" },
"store.cta.title":      { en:"Not sure which system is right for you?",
                          ar:"\u063a\u064a\u0631 \u0645\u062a\u0623\u0643\u062f \u0645\u0646 \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0646\u0627\u0633\u0628 \u0644\u0643\u061f",
                          it:"Non sei sicuro quale sistema sia giusto per te?" },
"store.contactus":      { en:"Contact Us",       ar:"\u0627\u062a\u0635\u0644 \u0628\u0646\u0627", it:"Contattaci" },
"store.backhome":       { en:"Back to Home",     ar:"\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0631\u0626\u064a\u0633\u064a\u0629", it:"Torna alla Home" },

// ─── STORE CONTACT MODAL ─────────────────────────────────────────────
"modal.title":          { en:"Request Quote",    ar:"\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631", it:"Richiedi Preventivo" },
"modal.name":           { en:"Full Name",        ar:"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644", it:"Nome Completo" },
"modal.phone":          { en:"Phone / WhatsApp", ar:"\u0627\u0644\u0647\u0627\u062a\u0641 / WhatsApp", it:"Telefono / WhatsApp" },
"modal.email":          { en:"Email",            ar:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a", it:"Email" },
"modal.location":       { en:"Location",         ar:"\u0627\u0644\u0645\u0648\u0642\u0639", it:"Posizione" },
"modal.message":        { en:"Message (optional)", ar:"\u0631\u0633\u0627\u0644\u0629 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)", it:"Messaggio (opzionale)" },
"modal.send":           { en:"Send Inquiry",     ar:"\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631", it:"Invia Richiesta" },

// ─── LOGIN SCREEN ────────────────────────────────────────────────────
"login.title":          { en:"AquaSicura",       ar:"AquaSicura", it:"AquaSicura" },
"login.subtitle":       { en:"Water Filtration Monitoring", ar:"\u0645\u0631\u0627\u0642\u0628\u0629 \u062a\u0646\u0642\u064a\u0629 \u0627\u0644\u0645\u064a\u0627\u0647", it:"Monitoraggio Filtrazione Acqua" },
"login.email":          { en:"Email",            ar:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a", it:"Email" },
"login.password":       { en:"Password",         ar:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", it:"Password" },
"login.server":         { en:"ThingsBoard Server", ar:"\u062e\u0627\u062f\u0645 ThingsBoard", it:"Server ThingsBoard" },
"login.signin":         { en:"Sign In",          ar:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644", it:"Accedi" },

// ─── DASHBOARD TABS & UI ─────────────────────────────────────────────
"tab.dashboard":        { en:"Dashboard",        ar:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629", it:"Pannello" },
"tab.charts":           { en:"Charts",           ar:"\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u064a\u0629", it:"Grafici" },
"tab.log":              { en:"Log",              ar:"\u0627\u0644\u0633\u062c\u0644",     it:"Registro" },
"tab.devices":          { en:"Devices",          ar:"\u0627\u0644\u0623\u062c\u0647\u0632\u0629",   it:"Dispositivi" },
"tab.customers":        { en:"Customers",        ar:"\u0627\u0644\u0639\u0645\u0644\u0627\u0621",   it:"Clienti" },
"tab.alarms":           { en:"Alarms",           ar:"\u0627\u0644\u0625\u0646\u0630\u0627\u0631\u0627\u062a", it:"Allarmi" },
"tab.mydevice":         { en:"My Device",        ar:"\u062c\u0647\u0627\u0632\u064a",    it:"Il Mio Dispositivo" },
"dash.alldevices":      { en:"All Devices",      ar:"\u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u062c\u0647\u0632\u0629", it:"Tutti i Dispositivi" },
"dash.refresh":         { en:"Refresh",          ar:"\u062a\u062d\u062f\u064a\u062b",    it:"Aggiorna" },
"dash.loading":         { en:"Loading devices...", ar:"\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0623\u062c\u0647\u0632\u0629...", it:"Caricamento dispositivi..." },
"dash.exportcsv":       { en:"Export CSV",        ar:"\u062a\u0635\u062f\u064a\u0631 CSV", it:"Esporta CSV" },

// ─── MAP & DEVICE INFO ───────────────────────────────────────────────
"tab.map":              { en:"Map",              ar:"\u0627\u0644\u062e\u0631\u064a\u0637\u0629",  it:"Mappa" },
"map.title":            { en:"Device Map",       ar:"\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0623\u062c\u0647\u0632\u0629", it:"Mappa Dispositivi" },
"dev.name":             { en:"Device Name",      ar:"\u0627\u0633\u0645 \u0627\u0644\u062c\u0647\u0627\u0632", it:"Nome Dispositivo" },
"dev.filtertype":       { en:"Filter Type",      ar:"\u0646\u0648\u0639 \u0627\u0644\u0641\u0644\u062a\u0631", it:"Tipo di Filtro" },
"dev.filterref":        { en:"Filter Reference", ar:"\u0645\u0631\u062c\u0639 \u0627\u0644\u0641\u0644\u062a\u0631", it:"Riferimento Filtro" },
"dev.address":          { en:"Installation Address", ar:"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0631\u0643\u064a\u0628", it:"Indirizzo Installazione" },
"dev.lat":              { en:"Latitude",         ar:"\u062e\u0637 \u0627\u0644\u0639\u0631\u0636", it:"Latitudine" },
"dev.lng":              { en:"Longitude",        ar:"\u062e\u0637 \u0627\u0644\u0637\u0648\u0644", it:"Longitudine" },
"dev.assigncust":       { en:"Assign to Customer", ar:"\u062a\u0639\u064a\u064a\u0646 \u0644\u0644\u0639\u0645\u064a\u0644", it:"Assegna al Cliente" },
"dev.addtitle":         { en:"Add New Device",   ar:"\u0625\u0636\u0627\u0641\u0629 \u062c\u0647\u0627\u0632 \u062c\u062f\u064a\u062f", it:"Aggiungi Nuovo Dispositivo" },
"dev.editinfo":         { en:"Edit Device Info", ar:"\u062a\u0639\u062f\u064a\u0644 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062c\u0647\u0627\u0632", it:"Modifica Info Dispositivo" },
"dev.saveinfo":         { en:"Save Device Info", ar:"\u062d\u0641\u0638 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062c\u0647\u0627\u0632", it:"Salva Info Dispositivo" },
"dev.active":           { en:"Active",           ar:"\u0646\u0634\u0637",      it:"Attivo" },

// ─── LANGUAGE SELECTOR ───────────────────────────────────────────────
"lang.en":              { en:"English",  ar:"English",  it:"English" },
"lang.ar":              { en:"\u0639\u0631\u0628\u064a", ar:"\u0639\u0631\u0628\u064a", it:"Arabo" },
"lang.it":              { en:"Italiano", ar:"Italiano", it:"Italiano" }
};

// ─── Current Language ────────────────────────────────────────────────
let currentLang = localStorage.getItem('aquasicura_lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('aquasicura_lang', lang);
    applyTranslations();
    // Set RTL for Arabic
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    // Update all language button labels
    const flags = { en:'🇬🇧', ar:'🇦🇪', it:'🇮🇹' };
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.textContent = flags[lang] || lang.toUpperCase();
    });
    // Close all dropdowns
    document.querySelectorAll('.lang-switcher').forEach(el => el.classList.remove('open'));
}

function toggleLangDropdown(e, id) {
    e && e.stopPropagation();
    const targetId = id || 'lang-dropdown';
    // Close all other dropdowns first
    document.querySelectorAll('.lang-switcher').forEach(el => {
        if (el.id !== targetId) el.classList.remove('open');
    });
    document.getElementById(targetId).classList.toggle('open');
}

// Close all dropdowns on click outside
document.addEventListener('click', () => {
    document.querySelectorAll('.lang-switcher').forEach(el => el.classList.remove('open'));
});

function applyTranslations() {
    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const t = TRANSLATIONS[key];
        if (t) {
            const val = t[currentLang] || t.en;
            // Use innerHTML for keys that contain HTML tags
            if (val.includes('<em>') || val.includes('<br>') || val.includes('<strong>')) {
                el.innerHTML = val;
            } else {
                el.textContent = val;
            }
        }
    });
    // Placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        const t = TRANSLATIONS[key];
        if (t) el.placeholder = t[currentLang] || t.en;
    });
}

// Apply on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});
