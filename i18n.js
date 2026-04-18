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
"nav.literature":       { en:"Literature",   ar:"\u0627\u0644\u0623\u062f\u0628",                                 it:"Letteratura" },
"nav.hydration":        { en:"Hydration",    ar:"\u0627\u0644\u0625\u0631\u062a\u0648\u0627\u0621",               it:"Idratazione" },
"nav.art":              { en:"Art",          ar:"\u0627\u0644\u0641\u0646",                                         it:"Arte" },

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

// ─── CUSTOMER MANAGEMENT ─────────────────────────────────────────────
"cust.addtitle":        { en:"Add New Customer", ar:"إضافة عميل جديد", it:"Aggiungi Nuovo Cliente" },
"cust.name":            { en:"Customer Name",    ar:"اسم العميل",     it:"Nome Cliente" },
"cust.firstname":       { en:"First Name",       ar:"الاسم الأول",    it:"Nome" },
"cust.lastname":        { en:"Last Name",        ar:"اسم العائلة",    it:"Cognome" },
"cust.selectdevice":    { en:"Select Device to Assign", ar:"اختر الجهاز للتعيين", it:"Seleziona Dispositivo da Assegnare" },
"cust.create":          { en:"Create Customer",  ar:"إنشاء العميل",   it:"Crea Cliente" },

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
"lang.it":              { en:"Italiano", ar:"Italiano", it:"Italiano" },

// ─── CLASSIC PAGES — Shared footer ───────────────────────────────────
"classic.footer.copy":  { en:"&copy; 2026 AquaSicura &middot; Reviving the essence of water.",
                          ar:"&copy; 2026 أكواسيكورا &middot; إحياء جوهر الماء.",
                          it:"&copy; 2026 AquaSicura &middot; Riportando in vita l'essenza dell'acqua." },

// ─── LITERATURE PAGE ─────────────────────────────────────────────────
"lit.hero.badge":       { en:"A Reading Room",
                          ar:"غرفة القراءة",
                          it:"Una Sala di Lettura" },
"lit.hero.h1":          { en:"<strong>Water in</strong> Literature",
                          ar:"<strong>الماء في</strong> الأدب",
                          it:"<strong>L'Acqua nella</strong> Letteratura" },
"lit.hero.lede":        { en:"Across centuries and civilisations, the greatest minds have turned to water for metaphor, meaning and meditation. Here is a small shelf of their works \u2014 scripture, philosophy, fiction and science \u2014 each a witness to the same truth: that water is the first book of life.",
                          ar:"عبر القرون والحضارات، التفت أعظم العقول إلى الماء بحثاً عن الاستعارة والمعنى والتأمل. هنا رفٌّ صغير من أعمالهم \u2014 كتاب مقدس، وفلسفة، وخيال، وعلم \u2014 كلٌّ منها شاهد على الحقيقة ذاتها: أن الماء هو الكتاب الأول للحياة.",
                          it:"Attraverso i secoli e le civiltà, le menti più grandi si sono rivolte all'acqua per metafore, significati e meditazione. Ecco un piccolo scaffale delle loro opere \u2014 scrittura sacra, filosofia, narrativa e scienza \u2014 ciascuna testimone della stessa verità: che l'acqua è il primo libro della vita." },

// Book 1 — The Holy Qur'an
"lit.quran.h3":         { en:"The Holy Qur\u2019an",      ar:"القرآن الكريم",        it:"Il Santo Corano" },
"lit.quran.by":         { en:"Revealed Scripture of Islam", ar:"الوحي الإسلامي المقدس", it:"Scrittura Rivelata dell'Islam" },
"lit.quran.desc":       { en:"Among the earliest written meditations on water, the Qur\u2019an affirms water as the living origin of every created thing and as a recurring sign of the Creator\u2019s mercy upon the earth.",
                          ar:"بين أقدم التأملات المكتوبة عن الماء، يؤكد القرآن الكريم أن الماء هو أصل كل مخلوق حي، وعلامة متكررة على رحمة الخالق بالأرض.",
                          it:"Tra le prime meditazioni scritte sull'acqua, il Corano afferma l'acqua come origine vivente di ogni cosa creata e come segno ricorrente della misericordia del Creatore sulla terra." },
"lit.quran.bq":         { en:"&ldquo;And We made from water every living thing. Will they not then believe?&rdquo;<footer>Surah Al-Anbiya, 21:30</footer>",
                          ar:"&ldquo;وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ۖ أَفَلَا يُؤْمِنُونَ&rdquo;<footer>سورة الأنبياء، 21:30</footer>",
                          it:"&ldquo;E facemmo dall'acqua ogni cosa vivente. Non crederanno dunque?&rdquo;<footer>Surah Al-Anbiya, 21:30</footer>" },

// Book 2 — Tao Te Ching
"lit.tao.h3":           { en:"Tao Te Ching",     ar:"تاو تي تشينغ",          it:"Tao Te Ching" },
"lit.tao.by":           { en:"Laozi &middot; Ancient China", ar:"لاوتزي &middot; الصين القديمة", it:"Laozi &middot; Cina Antica" },
"lit.tao.desc":         { en:"The foundational text of Taoism places water at the very heart of its wisdom. To the sage, water is the emblem of virtue: yielding, patient, life-giving, finding without effort the humblest places that others scorn.",
                          ar:"يضع النصُّ التأسيسي للطاوية الماءَ في صميم حكمته. بالنسبة للحكيم، الماء رمز الفضيلة: متخلٍّ، صبور، مانح للحياة، يجد بلا جهد أكثر الأماكن تواضعاً التي يحتقرها الآخرون.",
                          it:"Il testo fondante del Taoismo pone l'acqua al cuore stesso della sua saggezza. Per il saggio, l'acqua è l'emblema della virtù: cedevole, paziente, vivificante, che trova senza sforzo i luoghi più umili che gli altri disprezzano." },
"lit.tao.bq":           { en:"&ldquo;The highest good is like water. Water benefits all things and does not contend. It dwells in places that the multitude disdains &mdash; therein lies its closeness to the Tao.&rdquo;<footer>Chapter 8</footer>",
                          ar:"&ldquo;أعلى الخير كالماء. الماء ينفع كل شيء ولا يتنافس. يسكن الأماكن التي يحتقرها الجمهور &mdash; وفي ذلك يكمن قربه من التاو.&rdquo;<footer>الفصل الثامن</footer>",
                          it:"&ldquo;Il bene supremo è come l'acqua. L'acqua giova a tutte le cose e non contende. Dimora nei luoghi che la moltitudine disprezza &mdash; in ciò risiede la sua vicinanza al Tao.&rdquo;<footer>Capitolo 8</footer>" },

// Book 3 — Moby-Dick
"lit.moby.h3":          { en:"Moby-Dick",         ar:"موبي دِك",              it:"Moby Dick" },
"lit.moby.by":          { en:"Herman Melville &middot; 1851", ar:"هرمان ملفيل &middot; 1851", it:"Herman Melville &middot; 1851" },
"lit.moby.desc":        { en:"Melville\u2019s great American epic opens upon the sea as if upon a cathedral. For him the ocean is mirror, adversary and altar \u2014 the element to which every thoughtful soul is, sooner or later, inevitably drawn.",
                          ar:"تفتح ملحمة ملفيل الأمريكية العظيمة على البحر كما لو كانت على كاتدرائية. فبالنسبة له، المحيط مرآة وخصم ومذبح \u2014 العنصر الذي تنجذب إليه كل روح متأملة، عاجلاً أم آجلاً، حتماً.",
                          it:"Il grande poema epico americano di Melville si apre sul mare come su una cattedrale. Per lui l'oceano è specchio, avversario e altare \u2014 l'elemento verso cui ogni anima pensante è, prima o poi, inevitabilmente attratta." },
"lit.moby.bq":          { en:"&ldquo;Meditation and water are wedded for ever.&rdquo;<footer>Chapter 1, &ldquo;Loomings&rdquo;</footer>",
                          ar:"&ldquo;التأمل والماء متزاوجان إلى الأبد.&rdquo;<footer>الفصل الأول، &ldquo;البوادر&rdquo;</footer>",
                          it:"&ldquo;La meditazione e l'acqua sono sposate per sempre.&rdquo;<footer>Capitolo 1, &ldquo;Presentimenti&rdquo;</footer>" },

// Book 4 — The Old Man and the Sea
"lit.oldman.h3":        { en:"The Old Man and the Sea", ar:"الشيخ والبحر",     it:"Il Vecchio e il Mare" },
"lit.oldman.by":        { en:"Ernest Hemingway &middot; 1952", ar:"إرنست همنغواي &middot; 1952", it:"Ernest Hemingway &middot; 1952" },
"lit.oldman.desc":      { en:"A lone Cuban fisherman, a great marlin, and the vast Gulf Stream. Hemingway\u2019s Nobel-winning novella is a parable of endurance upon living water \u2014 a meditation on dignity, solitude and the sea\u2019s immense indifference to man.",
                          ar:"صياد كوبي وحيد، وسمكة مارلين عظيمة، وتيار الخليج الشاسع. الرواية القصيرة الفائزة بجائزة نوبل لهمنغواي مثَلٌ عن الصمود على الماء الحي \u2014 تأمل في الكرامة والوحدة وعدم اكتراث البحر الهائل بالإنسان.",
                          it:"Un solitario pescatore cubano, un grande marlin e la vasta Corrente del Golfo. La novella di Hemingway, vincitrice del Nobel, è una parabola di resistenza sull'acqua viva \u2014 una meditazione sulla dignità, la solitudine e l'immensa indifferenza del mare verso l'uomo." },
"lit.oldman.bq":        { en:"&ldquo;The sea is the sea. The old man was thinking. The sea is kind and very beautiful.&rdquo;",
                          ar:"&ldquo;البحر هو البحر. كان الشيخ يفكر. البحر طيب وجميل جداً.&rdquo;",
                          it:"&ldquo;Il mare è il mare. Il vecchio stava pensando. Il mare è gentile e molto bello.&rdquo;" },

// Book 5 — Twenty Thousand Leagues
"lit.verne.h3":         { en:"Vingt mille lieues sous les mers", ar:"عشرون ألف فرسخ تحت الماء", it:"Ventimila leghe sotto i mari" },
"lit.verne.by":         { en:"Jules Verne &middot; 1870", ar:"جول فيرن &middot; 1870", it:"Jules Verne &middot; 1870" },
"lit.verne.desc":       { en:"Aboard the <em>Nautilus</em>, Captain Nemo reveals an underwater world of coral palaces and sunken cities. Verne\u2019s vision was prophecy: the ocean as another living planet, vast and teeming, awaiting our reverence.",
                          ar:"على متن <em>الناوتيلوس</em>، يكشف الكابتن نيمو عن عالم تحت الماء من القصور المرجانية والمدن الغارقة. كانت رؤية فيرن نبوءة: المحيط كوكبٌ حي آخر، شاسع ومعمور، ينتظر إجلالنا.",
                          it:"A bordo del <em>Nautilus</em>, il Capitano Nemo rivela un mondo sottomarino di palazzi di corallo e città sommerse. La visione di Verne era profezia: l'oceano come un altro pianeta vivente, vasto e brulicante, in attesa della nostra riverenza." },
"lit.verne.bq":         { en:"&ldquo;The sea is everything. It covers seven tenths of the terrestrial globe. Its breath is pure and healthy. It is an immense desert, where man is never lonely.&rdquo;",
                          ar:"&ldquo;البحر هو كل شيء. يغطي سبعة أعشار الكرة الأرضية. نسيمه نقي وصحي. إنه صحراء شاسعة، حيث لا يكون الإنسان وحيداً أبداً.&rdquo;",
                          it:"&ldquo;Il mare è tutto. Copre i sette decimi del globo terrestre. Il suo respiro è puro e sano. È un immenso deserto dove l'uomo non è mai solo.&rdquo;" },

// Book 6 — Codex Leicester
"lit.davinci.h3":       { en:"Codex Leicester",   ar:"مخطوطة ليستر",          it:"Codice Leicester" },
"lit.davinci.by":       { en:"Leonardo da Vinci &middot; c. 1508", ar:"ليوناردو دا فينشي &middot; حوالي 1508", it:"Leonardo da Vinci &middot; c. 1508" },
"lit.davinci.desc":     { en:"Of Leonardo\u2019s notebooks, none is so entirely devoted to water. Seventy-two pages of mirror-script, sketches of eddies, rivers and rain \u2014 a Renaissance hymn to hydraulics and to the principle the master called the <em>vetturale della natura</em>, the vehicle of nature.",
                          ar:"من بين دفاتر ليوناردو، لا يوجد ما يُكرَّس كلياً للماء مثله. اثنان وسبعون صفحة من الكتابة المعكوسة ورسوم للدوامات والأنهار والمطر \u2014 ترنيمة عصر النهضة للهيدروليكا وللمبدأ الذي أسماه المعلم <em>فيتوالي ديلا ناتورا</em>، مركبة الطبيعة.",
                          it:"Tra i taccuini di Leonardo, nessuno è così interamente dedicato all'acqua. Settantadue pagine di scrittura speculare, schizzi di vortici, fiumi e piogge \u2014 un inno rinascimentale all'idraulica e al principio che il maestro chiamava la <em>vetturale della natura</em>, il veicolo della natura." },
"lit.davinci.bq":       { en:"&ldquo;Water is the driving force of all nature.&rdquo;",
                          ar:"&ldquo;الماء هو القوة المحركة لكل الطبيعة.&rdquo;",
                          it:"&ldquo;L'acqua è la forza motrice di tutta la natura.&rdquo;" },

// Book 7 — Walden
"lit.walden.h3":        { en:"Walden",             ar:"والدن",                  it:"Walden" },
"lit.walden.by":        { en:"Henry David Thoreau &middot; 1854", ar:"هنري ديفيد ثورو &middot; 1854", it:"Henry David Thoreau &middot; 1854" },
"lit.walden.desc":      { en:"Two years by a New England pond: Thoreau taught a generation that the surface of still water is the truest mirror of a tranquil mind. Every page returns to the pond as teacher, witness and friend.",
                          ar:"عامان بجوار بركة في نيو إنغلاند: علّم ثورو جيلاً أن سطح الماء الهادئ هو أصدق مرآة للعقل المطمئن. تعود كل صفحة إلى البركة بوصفها معلماً وشاهداً وصديقاً.",
                          it:"Due anni presso uno stagno del New England: Thoreau insegnò a una generazione che la superficie dell'acqua ferma è il più vero specchio di una mente tranquilla. Ogni pagina ritorna allo stagno come insegnante, testimone e amico." },
"lit.walden.bq":        { en:"&ldquo;A lake is the landscape\u2019s most beautiful and expressive feature. It is earth\u2019s eye; looking into which the beholder measures the depth of his own nature.&rdquo;",
                          ar:"&ldquo;البحيرة هي أجمل ملامح المشهد الطبيعي وأكثرها تعبيراً. إنها عين الأرض؛ وبالنظر فيها يقيس المتأمل عمق طبيعته الخاصة.&rdquo;",
                          it:"&ldquo;Un lago è il tratto più bello ed espressivo del paesaggio. È l'occhio della terra; guardandovi dentro, l'osservatore misura la profondità della propria natura.&rdquo;" },

// Book 8 — Hidden Messages in Water
"lit.emoto.h3":         { en:"The Hidden Messages in Water", ar:"الرسائل الخفية في الماء", it:"I Messaggi Nascosti nell'Acqua" },
"lit.emoto.by":         { en:"Masaru Emoto &middot; 2001", ar:"ماسارو إيموتو &middot; 2001", it:"Masaru Emoto &middot; 2001" },
"lit.emoto.desc":       { en:"A modern Japanese study \u2014 poetic, controversial, endlessly photographed \u2014 of how intention and environment appear reflected in the crystalline structure of frozen water. Whether one reads it as science or as meditation, the message is the same: water remembers.",
                          ar:"دراسة يابانية حديثة \u2014 شاعرية، مثيرة للجدل، لا تنتهي تصويراتها \u2014 حول كيف تبدو النية والبيئة منعكستين في البنية البلورية للماء المتجمد. سواء قرأها المرء كعلم أو تأمل، فالرسالة واحدة: الماء يتذكر.",
                          it:"Uno studio giapponese moderno \u2014 poetico, controverso, infinitamente fotografato \u2014 su come intenzione e ambiente sembrino riflettersi nella struttura cristallina dell'acqua congelata. Che lo si legga come scienza o come meditazione, il messaggio è lo stesso: l'acqua ricorda." },
"lit.emoto.bq":         { en:"&ldquo;Water is the mirror that has the ability to show us what we cannot see. It is the blueprint for our reality.&rdquo;",
                          ar:"&ldquo;الماء هو المرآة القادرة على إرائنا ما لا نستطيع رؤيته. إنه مخطط واقعنا.&rdquo;",
                          it:"&ldquo;L'acqua è lo specchio che ha la capacità di mostrarci ciò che non possiamo vedere. È il progetto della nostra realtà.&rdquo;" },

// ─── HYDRATION PAGE ──────────────────────────────────────────────────
"hyd.hero.badge":       { en:"A Brief Treatise",
                          ar:"رسالة موجزة",
                          it:"Un Breve Trattato" },
"hyd.hero.h1":          { en:"<strong>The Art of</strong> Hydration",
                          ar:"<strong>فن</strong> الترطيب",
                          it:"<strong>L'Arte della</strong> Idratazione" },
"hyd.hero.lede":        { en:"A short companion, gathered from modern medicine and ancient wisdom alike, on how to drink water well \u2014 the temperature, the minerals, the posture, and the quiet discipline that turns a simple glass into a daily act of health.",
                          ar:"رفيق قصير، مستقى من الطب الحديث والحكمة القديمة على حدٍّ سواء، حول كيفية شرب الماء جيداً \u2014 الحرارة، والمعادن، والوضعية، والانضباط الهادئ الذي يحوّل كوباً بسيطاً إلى فعل صحي يومي.",
                          it:"Un breve compagno, raccolto dalla medicina moderna e dalla saggezza antica, su come bere l'acqua bene \u2014 la temperatura, i minerali, la postura e la silenziosa disciplina che trasforma un semplice bicchiere in un atto quotidiano di salute." },

// Chapter I
"hyd.ch1.num":          { en:"Chapter I",          ar:"الفصل الأول",           it:"Capitolo I" },
"hyd.ch1.title":        { en:"On the Temperature of Water", ar:"في حرارة الماء", it:"Sulla Temperatura dell'Acqua" },
"hyd.ch1.lead":         { en:"Water that is too cold shocks the stomach, constricts its vessels, and slows the very digestion it was drawn to aid. Water that is too hot scalds the delicate lining of the gut. The happy mean, long recommended by physicians, is water drawn neither from ice nor from flame \u2014 but from the natural temperature of a cool cellar: somewhere between fifteen and twenty-five degrees Celsius.",
                          ar:"الماء البارد جداً يصدم المعدة ويضيّق أوعيتها ويبطئ الهضم الذي جاء ليساعد فيه. أما الماء الساخن جداً فيحرق البطانة الرقيقة للأمعاء. الوسط الفاضل، الذي أوصى به الأطباء منذ أمد بعيد، هو ماءٌ لا يُستمد من الثلج ولا من اللهب \u2014 بل من الحرارة الطبيعية لقبو بارد: في مكان ما بين خمسة عشر وخمسة وعشرين درجة مئوية.",
                          it:"L'acqua troppo fredda scuote lo stomaco, restringe i suoi vasi e rallenta la stessa digestione che era destinata ad aiutare. L'acqua troppo calda scotta il delicato rivestimento dell'intestino. La via di mezzo felice, raccomandata da tempo dai medici, è l'acqua che non proviene né dal ghiaccio né dalla fiamma \u2014 ma dalla temperatura naturale di una cantina fresca: tra i quindici e i venticinque gradi Celsius." },
"hyd.ch1.p2":           { en:"At this \u201croom temperature\u201d the body need not expend energy to warm or to cool what it receives; the water is absorbed swiftly through the stomach wall and reaches the tissues at the pace nature intended. Upon waking, a glass of warm (never hot) water is gentler still, rousing the digestive organs without jolting them.",
                          ar:"عند \"درجة حرارة الغرفة\" هذه، لا يحتاج الجسم إلى طاقة لتدفئة ما يتلقاه أو تبريده؛ يُمتص الماء بسرعة عبر جدار المعدة ويصل إلى الأنسجة بالإيقاع الذي تقصده الطبيعة. عند الاستيقاظ، كوب من الماء الدافئ (لا الساخن) أكثر لطفاً بعد، إذ يوقظ أعضاء الهضم دون أن يزعزعها.",
                          it:"A questa \"temperatura ambiente\" il corpo non ha bisogno di spendere energia per riscaldare o raffreddare ciò che riceve; l'acqua viene assorbita rapidamente attraverso la parete dello stomaco e raggiunge i tessuti al ritmo che la natura intendeva. Al risveglio, un bicchiere di acqua tiepida (mai calda) è ancora più delicato, stimolando gli organi digestivi senza scuoterli." },
"hyd.ch1.aside":        { en:"Cold water is a pleasure in great heat, but after exertion or with meals it is best set aside. The Prophet Muhammad (peace be upon him) is reported to have preferred cool, sweet water \u2014 not iced \u2014 and the physicians of Salerno gave the same counsel a thousand years ago.",
                          ar:"الماء البارد متعة في الحرارة الشديدة، لكن بعد الجهد أو مع الوجبات من الأفضل تجنبه. يُروى أن النبي محمداً (صلى الله عليه وسلم) كان يُفضّل الماء البارد العذب \u2014 لا المثلج \u2014 وقد أسدى أطباء ساليرنو النصيحة ذاتها منذ ألف عام.",
                          it:"L'acqua fredda è un piacere nel grande caldo, ma dopo lo sforzo o con i pasti è meglio evitarla. Si riferisce che il Profeta Muhammad (pace su di lui) preferisse acqua fresca e dolce \u2014 non ghiacciata \u2014 e i medici di Salerno dettero lo stesso consiglio mille anni fa." },

// Chapter II
"hyd.ch2.num":          { en:"Chapter II",          ar:"الفصل الثاني",          it:"Capitolo II" },
"hyd.ch2.title":        { en:"On the Manner of Drinking", ar:"في أسلوب الشرب",  it:"Sul Modo di Bere" },
"hyd.ch2.lead":         { en:"Modern gastroenterology and the traditions of East and West converge upon a single quiet instruction: drink slowly, and drink seated. Gulping half a litre in a single breath overwhelms the stomach, dilutes the gastric acid needed for digestion, and loads the kidneys with a sudden volume they must then hastily expel.",
                          ar:"تتقاطع أمراض الجهاز الهضمي الحديثة وتقاليد الشرق والغرب في تعليمة واحدة هادئة: اشرب ببطء، واشرب جالساً. ابتلاع نصف لتر في نفس واحد يُرهق المعدة، ويُخفف الحمض المعدي اللازم للهضم، ويُحمّل الكلى حجماً مفاجئاً يجب طرده على عجل.",
                          it:"La gastroenterologia moderna e le tradizioni di Oriente e Occidente convergono in una sola tranquilla istruzione: bevi lentamente, e bevi seduto. Inghiottire mezzo litro in un solo respiro travolge lo stomaco, diluisce l'acido gastrico necessario per la digestione e carica i reni di un volume improvviso che devono poi espellere frettolosamente." },
"hyd.ch2.p2":           { en:"Sipping, by contrast, allows saliva \u2014 which is itself mildly alkaline \u2014 to mingle with the water; it gives the stomach time to signal satiety; and it permits cells to draw what they need rather than pass the excess away as urine. A small cup, refilled often, nourishes the body more deeply than a tall glass drained at once.",
                          ar:"الرشف بالمقابل يسمح للعاب \u2014 وهو قلوي بطبيعته \u2014 بالامتزاج بالماء؛ ويمنح المعدة وقتاً للإشارة بالشبع؛ ويتيح للخلايا أخذ ما تحتاجه بدلاً من طرد الفائض كبول. كوب صغير يُعبأ كثيراً يغذي الجسم بعمق أكثر من كوب كبير يُفرغ دفعة واحدة.",
                          it:"Sorseggiare, al contrario, permette alla saliva \u2014 che è di per sé leggermente alcalina \u2014 di mescolarsi con l'acqua; dà allo stomaco il tempo di segnalare la sazietà; e consente alle cellule di prendere ciò di cui hanno bisogno piuttosto che espellere l'eccesso come urina. Una tazza piccola, riempita spesso, nutre il corpo più in profondità di un bicchiere alto svuotato tutto in una volta." },
"hyd.ch2.li1":          { en:"<strong>Sit down to drink.</strong> Standing compresses the stomach and sends water under pressure; seated, the organs are aligned and at rest. The Islamic tradition forbids drinking while standing, and modern studies note gentler renal and cardiac response when seated.",
                          ar:"<strong>اجلس لتشرب.</strong> الوقوف يضغط على المعدة ويرسل الماء تحت الضغط؛ أما الجلوس، فتكون الأعضاء متوازية ومرتاحة. يحظر الإسلام الشرب وقوفاً، وتلاحظ الدراسات الحديثة استجابة كلوية وقلبية أهدأ عند الجلوس.",
                          it:"<strong>Siediti per bere.</strong> Stare in piedi comprime lo stomaco e invia l'acqua sotto pressione; da seduti, gli organi sono allineati e a riposo. La tradizione islamica vieta di bere in piedi, e gli studi moderni notano una risposta renale e cardiaca più mite quando si è seduti." },
"hyd.ch2.li2":          { en:"<strong>Three breaths, not one.</strong> Pause between sips. Breathe. This is an old counsel found in Arab <em>adab</em> and in Ayurveda alike.",
                          ar:"<strong>ثلاثة أنفاس، لا نفس واحد.</strong> توقف بين الرشفات. تنفس. هذه نصيحة قديمة وُجدت في <em>الأدب</em> العربي وفي الأيورفيدا على حدٍّ سواء.",
                          it:"<strong>Tre respiri, non uno.</strong> Fai una pausa tra un sorso e l'altro. Respira. Questo è un antico consiglio presente sia nell'<em>adab</em> arabo che nell'Ayurveda." },
"hyd.ch2.li3":          { en:"<strong>Do not drown the meal.</strong> A small sip with food is welcome; a large glass during the meal thins digestive juices and bloats the stomach. Drink most of your water between meals.",
                          ar:"<strong>لا تُغرق الوجبة.</strong> رشفة صغيرة مع الطعام مرحّب بها؛ كوب كبير خلال الوجبة يُخفف عصارات الهضم ويُضخّم المعدة. اشرب معظم مائك بين الوجبات.",
                          it:"<strong>Non affogare il pasto.</strong> Un piccolo sorso con il cibo è benvenuto; un bicchiere abbondante durante il pasto diluisce i succhi digestivi e gonfia lo stomaco. Bevi la maggior parte della tua acqua tra i pasti." },
"hyd.ch2.li4":          { en:"<strong>Hold the glass in the right hand,</strong> as is traditional \u2014 a small courtesy to the water and to yourself.",
                          ar:"<strong>أمسك الكوب بيدك اليمنى،</strong> كما هو المتعارف عليه \u2014 مجاملة صغيرة للماء ولنفسك.",
                          it:"<strong>Tieni il bicchiere nella mano destra,</strong> come da tradizione \u2014 una piccola cortesia verso l'acqua e verso te stesso." },

// Chapter III
"hyd.ch3.num":          { en:"Chapter III",         ar:"الفصل الثالث",          it:"Capitolo III" },
"hyd.ch3.title":        { en:"Of Minerals &amp; Living Waters", ar:"في المعادن ومياه الحياة", it:"Dei Minerali e delle Acque Vive" },
"hyd.ch3.lead":         { en:"Pure water \u2014 that is, chemically pure H&#x2082;O \u2014 is not healthy water. The body requires that its drink carry the traces of the earth through which it has passed. A few dissolved minerals are not impurities but nourishment; they are what transform mere liquid into <em>living water</em>.",
                          ar:"الماء النقي \u2014 أي ثاني أكسيد الهيدروجين النقي كيميائياً \u2014 ليس ماءً صحياً. يتطلب الجسم أن يحمل شرابه آثار الأرض التي مرّ بها. بعض المعادن المذابة ليست شوائب بل غذاء؛ هي ما يحوّل السائل المجرد إلى <em>ماء حي</em>.",
                          it:"L'acqua pura \u2014 cioè la pura H&#x2082;O chimica \u2014 non è acqua sana. Il corpo richiede che la sua bevanda porti le tracce della terra attraverso cui è passata. Alcuni minerali disciolti non sono impurità ma nutrimento; sono ciò che trasforma un semplice liquido in <em>acqua viva</em>." },
"hyd.ch3.p2":           { en:"The World Health Organisation recommends a Total Dissolved Solids (TDS) of roughly 150 to 300 mg/L for pleasant, healthful drinking water. Below 100, water tastes flat and leaches minerals from the body; above 500, it may taste heavy. Within that temperate range, the following elements are the most precious:",
                          ar:"توصي منظمة الصحة العالمية بمجموع المواد الذائبة (TDS) بما يتراوح بين 150 و300 ملغ/لتر للمياه الصالحة للشرب الصحية اللطيفة. دون 100، يبدو طعم الماء باهتاً ويسحب المعادن من الجسم؛ فوق 500، قد يبدو طعمه ثقيلاً. ضمن هذا النطاق المعتدل، تُعد العناصر التالية الأثمن:",
                          it:"L'Organizzazione Mondiale della Sanità raccomanda un Totale di Solidi Disciolti (TDS) di circa 150&ndash;300 mg/L per un'acqua potabile piacevole e salubre. Al di sotto di 100, l'acqua ha un sapore piatto e liscia i minerali dal corpo; al di sopra di 500, può avere un sapore pesante. In questo intervallo temperato, i seguenti elementi sono i più preziosi:" },
"hyd.ch3.aside":        { en:"Water stripped to zero TDS by reverse osmosis without re-mineralisation is <em>aggressive</em> water: it will readily take minerals from the very body it is meant to sustain. Every AquaSicura system therefore concludes with a mineral re-injection stage \u2014 the final breath of life returned to the filtered stream.",
                          ar:"الماء الذي يُجرَّد من جميع المواد الذائبة بالتناضح العكسي دون إعادة المعادن هو ماء <em>عدواني</em>: سيأخذ المعادن بسهولة من الجسم ذاته الذي يُفترض أنه يغذيه. لذلك يُختتم كل نظام AquaSicura بمرحلة إعادة حقن المعادن \u2014 النفَس الأخير للحياة الذي يُعاد إلى التيار المفلتر.",
                          it:"L'acqua ridotta a zero TDS dall'osmosi inversa senza rimineralizzazione è acqua <em>aggressiva</em>: preleverà facilmente i minerali dallo stesso corpo che dovrebbe sostenere. Ogni sistema AquaSicura si conclude quindi con uno stadio di re-iniezione minerale \u2014 l'ultimo respiro di vita restituito al flusso filtrato." },
"hyd.mineral.ca.name":  { en:"Calcium",             ar:"الكالسيوم",              it:"Calcio" },
"hyd.mineral.ca.det":   { en:"Builds bone and tooth; regulates heart rhythm. 40\u201380 mg/L is ideal.",
                          ar:"يبني العظام والأسنان؛ ينظم إيقاع القلب. المثالي 40\u201380 ملغ/لتر.",
                          it:"Costruisce ossa e denti; regola il ritmo cardiaco. 40\u201380 mg/L è l'ideale." },
"hyd.mineral.mg.name":  { en:"Magnesium",           ar:"المغنيسيوم",             it:"Magnesio" },
"hyd.mineral.mg.det":   { en:"Calms nerve and muscle; guards against cramp. Target 20\u201350 mg/L.",
                          ar:"يهدئ الأعصاب والعضلات؛ يحمي من التشنجات. الهدف 20\u201350 ملغ/لتر.",
                          it:"Calma nervi e muscoli; protegge dai crampi. Obiettivo 20\u201350 mg/L." },
"hyd.mineral.k.name":   { en:"Potassium",           ar:"البوتاسيوم",             it:"Potassio" },
"hyd.mineral.k.det":    { en:"Balances sodium; steadies blood pressure and the heartbeat.",
                          ar:"يوازن الصوديوم؛ يثبّت ضغط الدم وضربات القلب.",
                          it:"Bilancia il sodio; stabilizza la pressione sanguigna e il battito cardiaco." },
"hyd.mineral.na.name":  { en:"Sodium",              ar:"الصوديوم",               it:"Sodio" },
"hyd.mineral.na.det":   { en:"Essential in trace \u2014 yet never above 20 mg/L in daily drinking water.",
                          ar:"أساسي بكميات ضئيلة \u2014 لكن لا يتجاوز 20 ملغ/لتر في الماء اليومي.",
                          it:"Essenziale in tracce \u2014 ma mai sopra 20 mg/L nell'acqua potabile quotidiana." },
"hyd.mineral.hco.name": { en:"Bicarbonate",         ar:"البيكربونات",            it:"Bicarbonato" },
"hyd.mineral.hco.det":  { en:"Gentle buffer; keeps the stomach calm and the blood faintly alkaline.",
                          ar:"مُعادِل لطيف؛ يُبقي المعدة هادئة والدم قلوياً بخفة.",
                          it:"Tampone delicato; mantiene lo stomaco calmo e il sangue leggermente alcalino." },
"hyd.mineral.sio.name": { en:"Silica",              ar:"السيليكا",               it:"Silice" },
"hyd.mineral.sio.det":  { en:"Quiet architect of skin, hair and connective tissue.",
                          ar:"المهندس الصامت للجلد والشعر والأنسجة الضامة.",
                          it:"Silenziosa artefice di pelle, capelli e tessuto connettivo." },

// Chapter IV
"hyd.ch4.num":          { en:"Chapter IV",          ar:"الفصل الرابع",           it:"Capitolo IV" },
"hyd.ch4.title":        { en:"On the Rhythm of the Day", ar:"في إيقاع اليوم",    it:"Sul Ritmo del Giorno" },
"hyd.ch4.lead":         { en:"A healthy adult needs roughly two litres of water a day \u2014 more in heat, exertion or illness. Yet more important than the sum is the rhythm by which it is taken. Drink a little, often, through the waking hours, and the body receives a steady river rather than a tide.",
                          ar:"يحتاج البالغ السليم إلى ما يقارب ليترين من الماء يومياً \u2014 أكثر في الحرارة أو الجهد أو المرض. لكن الأهم من المجموع هو الإيقاع الذي يُؤخذ به. اشرب القليل كثيراً خلال ساعات الصحو، وسيتلقى الجسم نهراً ثابتاً لا مدّاً وجزراً.",
                          it:"Un adulto sano ha bisogno di circa due litri d'acqua al giorno \u2014 di più nel caldo, nello sforzo o nella malattia. Eppure più importante della quantità è il ritmo con cui viene assunta. Bevi poco, spesso, durante le ore di veglia, e il corpo riceverà un fiume costante piuttosto che una marea." },
"hyd.ch4.li1":          { en:"<strong>On waking.</strong> One glass of warm water, sipped slowly, before anything else. It stirs the digestive fire gently and rehydrates the blood thickened by the night.",
                          ar:"<strong>عند الاستيقاظ.</strong> كوب واحد من الماء الدافئ، يُرشف ببطء، قبل أي شيء آخر. يحرّك نار الهضم بلطف ويُرطّب الدم الذي أصبح كثيفاً بفعل الليل.",
                          it:"<strong>Al risveglio.</strong> Un bicchiere di acqua tiepida, sorseggiato lentamente, prima di ogni altra cosa. Stimola dolcemente il fuoco digestivo e reidrata il sangue addensato dalla notte." },
"hyd.ch4.li2":          { en:"<strong>Half an hour before meals.</strong> A glass primes the stomach and sharpens the sense of true hunger.",
                          ar:"<strong>نصف ساعة قبل الوجبات.</strong> كوب يُعدّ المعدة ويُحدّد الإحساس بالجوع الحقيقي.",
                          it:"<strong>Mezz'ora prima dei pasti.</strong> Un bicchiere prepara lo stomaco e affina il senso della vera fame." },
"hyd.ch4.li3":          { en:"<strong>Between meals.</strong> Small sips every twenty or thirty minutes. This is the body\u2019s preferred rhythm.",
                          ar:"<strong>بين الوجبات.</strong> رشفات صغيرة كل عشرين أو ثلاثين دقيقة. هذا هو الإيقاع المفضّل للجسم.",
                          it:"<strong>Tra i pasti.</strong> Piccoli sorsi ogni venti o trenta minuti. Questo è il ritmo preferito dal corpo." },
"hyd.ch4.li4":          { en:"<strong>After exertion.</strong> Cool \u2014 not iced \u2014 water, sipped, never gulped.",
                          ar:"<strong>بعد الجهد.</strong> ماء بارد \u2014 لا مثلج \u2014 يُرشف، لا يُبتلع دفعة واحدة.",
                          it:"<strong>Dopo lo sforzo.</strong> Acqua fresca \u2014 non ghiacciata \u2014 sorseggiata, mai ingurgitata." },
"hyd.ch4.li5":          { en:"<strong>Evening.</strong> Taper the quantity an hour before sleep, that the kidneys too may rest.",
                          ar:"<strong>المساء.</strong> قلّل الكمية قبل ساعة من النوم، حتى تستريح الكلى أيضاً.",
                          it:"<strong>Sera.</strong> Riduci la quantità un'ora prima del sonno, affinché anche i reni possano riposare." },

// Chapter V
"hyd.ch5.num":          { en:"Chapter V",           ar:"الفصل الخامس",           it:"Capitolo V" },
"hyd.ch5.title":        { en:"A Closing Counsel",   ar:"نصيحة ختامية",           it:"Un Consiglio Finale" },
"hyd.ch5.p":            { en:"Hydration is the quietest of the disciplines. It asks no equipment, no appointment, no effort \u2014 only attention. Drink water that is clean, mineralised and alive; drink it seated, sipped and warmed to the temperament of the body; drink it through the whole of the day, rather than all at once. Do this, and one of the humblest habits of the household becomes, in time, one of the surest foundations of a long and luminous life.",
                          ar:"الترطيب هو أهدأ الانضباطات. لا يطلب معدات، ولا مواعيد، ولا جهد \u2014 بل الانتباه فقط. اشرب ماءً نظيفاً ومعدنياً وحياً؛ اشربه جالساً، رشفةً رشفة، دافئاً بمقدار ما يتحمل الجسم؛ اشربه طوال اليوم، لا دفعة واحدة. افعل هذا، وسيتحول أحد أبسط عادات المنزل، مع الوقت، إلى أحد أرسخ أسس الحياة الطويلة المضيئة.",
                          it:"L'idratazione è la più silenziosa delle discipline. Non richiede attrezzature, né appuntamenti, né sforzo \u2014 solo attenzione. Bevi acqua pulita, mineralizzata e viva; bevila da seduto, a sorsi, riscaldata alla temperatura del corpo; bevila nel corso di tutta la giornata, piuttosto che tutta in una volta. Fai questo, e una delle abitudini più umili della casa diventa, col tempo, uno dei fondamenti più sicuri di una vita lunga e luminosa." },
"hyd.ch5.signoff":      { en:"&mdash; <em>the house of AquaSicura</em> &mdash;",
                          ar:"&mdash; <em>دار أكواسيكورا</em> &mdash;",
                          it:"&mdash; <em>la casa di AquaSicura</em> &mdash;" },
"hyd.disclaimer":       { en:"This page is offered for reflection and general guidance; it does not constitute medical advice. Consult a qualified physician for any condition relating to hydration, kidney function, blood pressure or mineral balance.",
                          ar:"هذه الصفحة مقدَّمة للتأمل والإرشاد العام؛ ولا تُشكّل نصيحة طبية. استشر طبيباً مؤهلاً لأي حالة تتعلق بالترطيب أو وظائف الكلى أو ضغط الدم أو توازن المعادن.",
                          it:"Questa pagina è offerta per riflessione e orientamento generale; non costituisce consiglio medico. Consultare un medico qualificato per qualsiasi condizione relativa all'idratazione, alla funzione renale, alla pressione sanguigna o all'equilibrio minerale." },

// ─── ART PAGE ────────────────────────────────────────────────────────
"art.hero.badge":       { en:"A Private Gallery",   ar:"معرض خاص",              it:"Una Galleria Privata" },
"art.hero.h1":          { en:"<strong>Water in</strong> Art",
                          ar:"<strong>الماء في</strong> الفن",
                          it:"<strong>L'Acqua nell'</strong>Arte" },
"art.hero.lede":        { en:"The painter, like the poet, has always returned to water. Waves and ponds, storms and still lagoons \u2014 eight of the great canvases in which water is not background, but the true subject: living, breathing, untamed.",
                          ar:"لطالما عاد الرسام، كالشاعر، إلى الماء. الأمواج والبرك، والعواصف والبحيرات الهادئة \u2014 ثمانية من اللوحات العظيمة التي لم يكن الماء فيها خلفية، بل الموضوع الحقيقي: حياً، يتنفس، غير مروَّض.",
                          it:"Il pittore, come il poeta, è sempre tornato all'acqua. Onde e stagni, tempeste e lagune quiete \u2014 otto delle grandi tele in cui l'acqua non è sfondo, ma il vero soggetto: vivo, respirante, indomito." },
// Painting 1 — Hokusai
"art.p1.plate":         { en:"Plate I",             ar:"اللوحة الأولى",          it:"Tavola I" },
"art.p1.caption":       { en:"Met Museum &middot; Edo Period", ar:"متحف ميت &middot; عصر إيدو", it:"Met Museum &middot; Periodo Edo" },
"art.p1.desc":          { en:"The most celebrated wave ever drawn. Hokusai\u2019s claw-like curl, rising over three slender fishing boats with Mount Fuji impossibly distant beyond it, has become the very emblem of the ocean\u2019s sublime indifference to men and mountains alike \u2014 a woodblock print that travelled the world and changed Western art forever.",
                          ar:"الموجة الأكثر شهرة على الإطلاق. تُجسّد موجة هوكوساي المخالبيّة، التي ترتفع فوق ثلاثة قوارب صيد نحيلة ويبدو جبل فوجي بعيداً بعداً مستحيلاً خلفها، رمزاً لامبالاة المحيط السامية بالرجال والجبال على حدٍّ سواء \u2014 طبعة على خشب سافرت العالم وغيّرت الفن الغربي إلى الأبد.",
                          it:"L'onda più celebrata mai disegnata. Il ricciolo artigliato di Hokusai, che si innalza su tre snelle barche da pesca con il Monte Fuji impossibilmente distante oltre di essa, è diventato l'emblema stesso dell'indifferenza sublime dell'oceano verso uomini e montagne \u2014 una stampa su legno che ha viaggiato per il mondo e ha cambiato l'arte occidentale per sempre." },
// Painting 2 — Aivazovsky
"art.p2.plate":         { en:"Plate II",            ar:"اللوحة الثانية",         it:"Tavola II" },
"art.p2.caption":       { en:"Russian Museum &middot; Saint Petersburg", ar:"المتحف الروسي &middot; سانت بطرسبرغ", it:"Museo Russo &middot; San Pietroburgo" },
"art.p2.desc":          { en:"Survivors cling to a shattered mast at the dawn after a storm. The Armenian-Russian master, unrivalled painter of seas, renders the water as a living being: luminous, terrible, and somehow \u2014 in the warm gold of the rising sun \u2014 merciful. An old sailor\u2019s belief names the ninth wave the most fearful; Aivazovsky paints it as the last.",
                          ar:"يتمسك الناجون بصارية مهشمة في فجر ما بعد العاصفة. يُجسّد السيد الأرمني الروسي، الرسام اللامنافَس للبحار، الماء كائناً حياً: مضيئاً، مرعباً، وبطريقة ما \u2014 في الذهب الدافئ لشمس تشرق \u2014 رحيماً. يُسمّي المعتقد القديم للبحارة الموجة التاسعة الأشد رعباً؛ بينما رسمها إيفازوفسكي بوصفها الأخيرة.",
                          it:"I sopravvissuti si aggrappano a un albero spezzato all'alba dopo la tempesta. Il maestro armeno-russo, pittore insuperabile di mari, rende l'acqua come un essere vivente: luminoso, terribile, e in qualche modo \u2014 nell'oro caldo del sole nascente \u2014 misericordioso. Una vecchia credenza marinara chiama la nona onda la più temibile; Aivazovsky la dipinge come l'ultima." },
// Painting 3 — Monet
"art.p3.plate":         { en:"Plate III",           ar:"اللوحة الثالثة",         it:"Tavola III" },
"art.p3.caption":       { en:"Mus&eacute;e de l&#x2019;Orangerie &middot; Paris", ar:"متحف الأورانجري &middot; باريس", it:"Mus&eacute;e de l'Orangerie &middot; Parigi" },
"art.p3.desc":          { en:"In the garden pond at Giverny Monet found a world sufficient for the last thirty years of his life. The surface is neither water nor sky but both at once: reflection dissolves matter, and the viewer stands suspended between the floating lilies and the clouds beneath them. The great <em>Nymph&eacute;as</em> cycle is the quietest monument of Impressionism.",
                          ar:"في بركة حديقة جيفيرني، وجد مونيه عالماً كافياً لثلاثين عاماً الأخيرة من حياته. السطح ليس ماءً ولا سماءً بل كلاهما معاً: الانعكاس يذيب المادة، ويقف المشاهد معلقاً بين الزنبق العائم والغيوم تحته. دورة <em>النيمفياس</em> الكبرى هي أهدأ معلم في الانطباعية.",
                          it:"Nel laghetto del giardino a Giverny, Monet trovò un mondo sufficiente per gli ultimi trent'anni della sua vita. La superficie non è né acqua né cielo ma entrambi insieme: il riflesso dissolve la materia, e lo spettatore rimane sospeso tra le ninfee galleggianti e le nuvole sotto di esse. Il grande ciclo delle <em>Nymph&eacute;as</em> è il monumento più silenzioso dell'Impressionismo." },
// Painting 4 — Turner
"art.p4.plate":         { en:"Plate IV",            ar:"اللوحة الرابعة",         it:"Tavola IV" },
"art.p4.caption":       { en:"National Gallery &middot; London", ar:"المعرض الوطني &middot; لندن", it:"National Gallery &middot; Londra" },
"art.p4.desc":          { en:"A ghost-white ship-of-the-line, hero of Trafalgar, is drawn across still estuary water by a dark tug to be broken up for scrap; the sun sets behind her in gold and crimson. Turner\u2019s elegy for the age of sail is carried by the Thames itself \u2014 a river turned mirror of a disappearing world. Often named Britain\u2019s favourite painting.",
                          ar:"سفينة حربية بيضاء كالشبح، بطلة معركة ترافالغار، تُسحب عبر مياه مصبّ ساكنة بقاطرة داكنة لتُفكَّك خردة؛ والشمس تغرب خلفها بالذهب والقرمزي. مرثاة تيرنر لعصر الإبحار تحملها نهر التيمز ذاته \u2014 نهر صار مرآة لعالم يتلاشى. كثيراً ما تُسمى اللوحة المفضلة في بريطانيا.",
                          it:"Una nave da guerra bianca come un fantasma, eroina di Trafalgar, viene trainata attraverso le acque ferme dell'estuario da un rimorchiatore scuro per essere demolita; il sole tramonta dietro di lei in oro e cremisi. L'elegia di Turner per l'età della vela è portata dal Tamigi stesso \u2014 un fiume diventato specchio di un mondo che svanisce. Spesso definita il dipinto preferito della Gran Bretagna." },
// Painting 5 — Homer
"art.p5.plate":         { en:"Plate V",             ar:"اللوحة الخامسة",         it:"Tavola V" },
"art.p5.caption":       { en:"Metropolitan Museum of Art &middot; New York", ar:"متحف الفن المتروبوليتاني &middot; نيويورك", it:"Metropolitan Museum of Art &middot; New York" },
"art.p5.desc":          { en:"A dismasted sloop, a lone Black sailor, circling sharks, a distant schooner and an approaching waterspout \u2014 Homer\u2019s American masterpiece is unsparing and magnificent. The sea here is power, fate, and a vast unjudged beauty. Hemingway read this painting as much as any book when he wrote <em>The Old Man and the Sea</em>.",
                          ar:"قارب شراعي بلا صارية، وبحار أسود وحيد، وأسماك قرش تدور حوله، ومركب شراعي بعيد، وعمود مائي يقترب \u2014 التحفة الفنية الأمريكية لهومر لا ترحم وهي رائعة. البحر هنا قوة ومصير وجمال شاسع غير محكوم عليه. قرأ همنغواي هذه اللوحة بقدر أي كتاب حين كتب <em>الشيخ والبحر</em>.",
                          it:"Una barca disalberata, un solitario marinaio di colore, squali che girano, una scialuppa distante e una tromba d'acqua che si avvicina \u2014 il capolavoro americano di Homer è spietato e magnifico. Il mare qui è potere, destino e una vasta bellezza non giudicata. Hemingway lesse questo dipinto quanto qualsiasi libro quando scrisse <em>Il Vecchio e il Mare</em>." },
// Painting 6 — Friedrich
"art.p6.plate":         { en:"Plate VI",            ar:"اللوحة السادسة",         it:"Tavola VI" },
"art.p6.caption":       { en:"Alte Nationalgalerie &middot; Berlin", ar:"معرض ألته ناتسيونالغالري &middot; برلين", it:"Alte Nationalgalerie &middot; Berlino" },
"art.p6.desc":          { en:"A single small figure stands on a dune before an immensity of sea and sky. No horizon line, no ship, no comfort \u2014 only water, air, and a human silhouette no larger than a thumbprint. Friedrich\u2019s Romantic meditation on solitude and the infinite is, in truth, a painting of how small we are, and how beautifully so.",
                          ar:"شخصية صغيرة وحيدة تقف على كثيب أمام شساعة البحر والسماء. لا خط أفق، ولا سفينة، ولا عزاء \u2014 سوى الماء والهواء وصورة إنسانية لا تكبر بصمة إبهام. تأمل فريدريش الرومانسي في الوحدة واللانهاية هو، في الحقيقة، لوحة عن مدى صغرنا، وعن جمال ذلك الصغر.",
                          it:"Una sola piccola figura sta su una duna davanti a un'immensità di mare e cielo. Nessuna linea d'orizzonte, nessuna nave, nessun conforto \u2014 solo acqua, aria e una silhouette umana non più grande di un'impronta di pollice. La meditazione romantica di Friedrich sulla solitudine e l'infinito è, in verità, un dipinto su quanto siamo piccoli, e quanto magnificamente lo siamo." },
// Painting 7 — Courbet
"art.p7.plate":         { en:"Plate VII",           ar:"اللوحة السابعة",         it:"Tavola VII" },
"art.p7.caption":       { en:"Mus&eacute;e d&#x2019;Orsay &middot; Paris", ar:"متحف أورسيه &middot; باريس", it:"Mus&eacute;e d'Orsay &middot; Parigi" },
"art.p7.desc":          { en:"Courbet painted the Norman coast again and again, building his waves with the palette knife in thick, almost sculpted strokes. This close, low view of a single cresting wave \u2014 the beach empty, the horizon heavy with cloud \u2014 is the sea without ornament: muscular, lonely, entirely itself. C&eacute;zanne called it the finest wave ever painted.",
                          ar:"رسم كوربيه ساحل نورماندي مراراً، يبني موجاته بسكين اللوح بضربات كثيفة تكاد تكون منحوتة. هذا المنظور القريب المنخفض لموجة واحدة تتكسر \u2014 الشاطئ خالٍ، والأفق ثقيل بالغيوم \u2014 هو البحر بلا زينة: عضلي، وحيد، هو ذاته تماماً. أسماها سيزان أجمل موجة رُسمت على الإطلاق.",
                          it:"Courbet dipinse la costa normanna ancora e ancora, costruendo le sue onde con il coltello da tavolozza in pennellate spesse, quasi scolpite. Questa visione ravvicinata e bassa di un'unica onda che si increspa \u2014 la spiaggia vuota, l'orizzonte pesante di nuvole \u2014 è il mare senza ornamento: muscoloso, solitario, interamente se stesso. C&eacute;zanne la chiamò l'onda più bella mai dipinta." },
// Painting 8 — Botticelli
"art.p8.plate":         { en:"Plate VIII",          ar:"اللوحة الثامنة",         it:"Tavola VIII" },
"art.p8.caption":       { en:"Uffizi Gallery &middot; Florence", ar:"معرض أوفيتسي &middot; فلورنسا", it:"Galleria degli Uffizi &middot; Firenze" },
"art.p8.desc":          { en:"From the foam of the Aegean, upon a great scallop shell, beauty is born into the world. Botticelli\u2019s Renaissance allegory is also, quietly, a painting about water: the sea as origin, as mother, as the first cradle of life. The gentle waves under Venus\u2019 shell were, for a Florentine poet-painter, nothing less than the beginning of all things.",
                          ar:"من رغوة بحر إيجه، على صدفة عملاقة، يولد الجمال إلى العالم. رمزية بوتيتشيلي في عصر النهضة هي أيضاً، بهدوء، لوحة عن الماء: البحر كأصل، وكأم، وكأول مهد للحياة. الأمواج اللطيفة تحت صدفة فينوس كانت، لرسام شاعر فلورنسي، لا أقل من بداية كل شيء.",
                          it:"Dalla spuma dell'Egeo, su un grande guscio di capasanta, la bellezza nasce nel mondo. L'allegoria rinascimentale di Botticelli è anche, silenziosamente, un dipinto sull'acqua: il mare come origine, come madre, come prima culla della vita. Le dolci onde sotto la conchiglia di Venere erano, per un pittore-poeta fiorentino, niente meno che l'inizio di tutte le cose." },
// Art closing quote
"art.closing":          { en:"&ldquo;In every drop of water there is a story of life.&rdquo;<cite>&mdash; A closing meditation</cite>",
                          ar:"&ldquo;في كل قطرة ماء قصة حياة.&rdquo;<cite>&mdash; تأمل ختامي</cite>",
                          it:"&ldquo;In ogni goccia d'acqua c'è una storia di vita.&rdquo;<cite>&mdash; Una meditazione finale</cite>" }
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
            // Use innerHTML for any value that contains HTML markup
            if (val.includes('<')) {
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
