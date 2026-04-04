/**
 * ╔══════════════════════════════════════════════════════╗
 * ║          I DISCEPOLI – CONFIGURATION FILE            ║
 * ║  Edit this file to update all website content.       ║
 * ║  You never need to touch index.html or script.js.    ║
 * ╚══════════════════════════════════════════════════════╝
 */

const CONFIG = {

  // ── Site identity ────────────────────────────────────
  site: {
    title:      "I Discepoli – Rugby Team",
    teamName:   "I Discepoli",
    eyebrow:    "Rugby Club · Estate",
    tagline:    "Uniti dal fango, dalla passione e dal terzo tempo.",
    // Accent color — changes the whole color scheme
    accentColor: "#2dce6c",
  },

  // ── Hero buttons ─────────────────────────────────────
  hero: {
    primaryBtn:  { label: "Scopri il Team", href: "#team" },
    secondaryBtn: { label: "Shop Merch",   href: "#merch" },
  },

  // ── Values & Objectives ──────────────────────────────
  values: {
    tag:      "Chi siamo",
    title:    "Valori & Obiettivi",
    subtitle: "Siamo un gruppo di amici che ogni estate si trasforma in una squadra. Il rugby è il pretesto, la fratellanza è lo scopo.",
    items: [
      {
        icon:  "⚡",
        title: "Spirito di squadra",
        text:  "In campo e fuori, vince chi non lascia indietro nessuno. Ogni placcaggio è condiviso, ogni meta è di tutti.",
      },
      {
        icon:  "🔥",
        title: "Passione autentica",
        text:  "Non siamo professionisti, ma giochiamo con la stessa intensità. La passione non si allena, si vive.",
      },
      {
        icon:  "🤝",
        title: "Rispetto",
        text:  "Per l'avversario, per il campo, per il terzo tempo. Il rugby insegna a rispettare chi ti affronta.",
      },
      {
        icon:  "🎯",
        title: "Obiettivi",
        text:  "Crescere ogni anno, portare nuovi giocatori, disputare più tornei estivi e alzare qualche trofeo.",
      },
    ],
  },

  // ── Team / Players ───────────────────────────────────
  team: {
    tag:      "Il Roster",
    title:    "I Giocatori",
    subtitle: "Ogni Discepolo porta qualcosa di unico. Ecco chi siamo davvero.",
    players: [
      {
        number: 1,
        name:   "Nome Cognome",
        role:   "Pilone",
        bio:    "Descrizione del giocatore, aneddoti, caratteristiche sul campo e fuori.",
        // photo: "photos/nome.jpg",  ← uncomment and set path to use a real photo
      },
      {
        number: 2,
        name:   "Nome Cognome",
        role:   "Tallonatore",
        bio:    "Descrizione del giocatore, aneddoti, caratteristiche sul campo e fuori.",
      },
      {
        number: 3,
        name:   "Nome Cognome",
        role:   "Mediano di mischia",
        bio:    "Descrizione del giocatore, aneddoti, caratteristiche sul campo e fuori.",
      },
      {
        number: 4,
        name:   "Nome Cognome",
        role:   "Trequarti",
        bio:    "Descrizione del giocatore, aneddoti, caratteristiche sul campo e fuori.",
      },
      {
        number: 5,
        name:   "Nome Cognome",
        role:   "Ala",
        bio:    "Descrizione del giocatore, aneddoti, caratteristiche sul campo e fuori.",
      },
      {
        number: 6,
        name:   "Nome Cognome",
        role:   "Estremo",
        bio:    "Descrizione del giocatore, aneddoti, caratteristiche sul campo e fuori.",
      },
    ],
  },

  // ── Gallery ──────────────────────────────────────────
  gallery: {
    tag:      "Momenti",
    title:    "Galleria",
    subtitle: "Immagini dal campo, dal terzo tempo e da tutto il resto.",
    // Each photo: { src, alt, size }
    // size can be: "large" (2×2), "tall" (1×2), or omit for normal (1×1)
    // Leave the array empty [] to show placeholder tiles.
    photos: [
      // { src: "photos/match1.jpg", alt: "Partita 2025", size: "large" },
      // { src: "photos/team.jpg",   alt: "Foto di squadra" },
      // { src: "photos/terzo.jpg",  alt: "Terzo tempo",   size: "tall" },
    ],
    // How many placeholder tiles to show when photos array is empty
    placeholderCount: 7,
  },

  // ── Roadmap ──────────────────────────────────────────
  // Each entry is a year with a list of tournaments.
  // status: "past" | "active" | "future"
  // Tournament result is optional — omit if not applicable.
  roadmap: {
    tag:      "La nostra storia",
    title:    "Roadmap",
    subtitle: "I tornei a cui abbiamo partecipato, anno per anno.",
    years: [
      {
        year:   "2024",
        status: "past",
        tournaments: [
          { name: "Torneo Estivo Example", location: "Milano", result: "3° posto" },
          { name: "Coppa Amici Rugby",     location: "Torino", result: "Partecipazione" },
        ],
      },
      {
        year:   "2025",
        status: "past",
        tournaments: [
          { name: "Torneo del Fango",   location: "Roma",    result: "Finalisti" },
          { name: "Summer Rugby Cup",   location: "Firenze", result: "1° posto 🏆" },
          { name: "Trofeo Città Aperta", location: "Napoli", result: "Partecipazione" },
        ],
      },
      {
        year:   "2026",
        status: "active",
        tournaments: [
          { name: "Torneo Estivo Example", location: "Bologna", result: "In corso..." },
          // Add more as the season progresses
        ],
      },
      {
        year:   "2027",
        status: "future",
        tournaments: [
          { name: "Obiettivo: vincere tutto", location: "Da definire" },
        ],
      },
    ],
  },

  // ── Best Fans ─────────────────────────────────────────
  fans: {
    tag:      "Curva Sud",
    title:    "I Migliori Tifosi",
    subtitle: "Chi ci supporta dal bordo campo, nel fango, con la birra in mano. Eroi silenziosi.",
    fans: [
      {
        name: "Nome Tifoso",
        title: "Fan #1",
        bio:  "Descrizione del tifoso — da quanto segue la squadra, aneddoti, motivo per cui è il migliore.",
        // photo: "photos/fans/nome.jpg",
      },
      {
        name: "Nome Tifoso",
        title: "Fan #2",
        bio:  "Descrizione del tifoso — da quanto segue la squadra, aneddoti, motivo per cui è il migliore.",
      },
      {
        name: "Nome Tifoso",
        title: "Fan #3",
        bio:  "Descrizione del tifoso — da quanto segue la squadra, aneddoti, motivo per cui è il migliore.",
      },
    ],
  },

  // ── Merch ────────────────────────────────────────────
  merch: {
    tag:      "Store",
    title:    "Merch",
    subtitle: "Indossa i colori dei Discepoli. Essere parte della famiglia non è solo in campo.",
    note:     "Il negozio aprirà presto. Contattaci per pre-ordini o taglie speciali.",
    products: [
      {
        name:      "Jersey Ufficiale",
        desc:      "La maglia da gioco. Tessuto tecnico, colori della squadra, orgoglio garantito.",
        price:     "€ 45,00",
        badge:     "Bestseller",
        // badgeStyle: "new"  ← add this for a gold "New" badge instead of green
        // image: "photos/merch/jersey.jpg",
      },
      {
        name:  "Hoodie Discepoli",
        desc:  "Per il terzo tempo, per il dopo-allenamento, per sempre.",
        price: "€ 55,00",
      },
      {
        name:       "Cap Ricamato",
        desc:       "Il logo dei Discepoli ricamato su cappellino snapback. Stile da campioni.",
        price:      "€ 25,00",
        badge:      "New",
        badgeStyle: "new",
      },
      {
        name:  "Borsa da Sport",
        desc:  "Capiente, resistente, con il logo. Per portare tutto (inclusa la scusa per essere in ritardo).",
        price: "€ 35,00",
      },
    ],
  },

  // ── Contacts ─────────────────────────────────────────
  contacts: {
    tag:      "Parlaci",
    title:    "Contatti",
    subtitle: "Vuoi unirti? Vuoi sfidarci? Vuoi solo mandarci un saluto? Siamo qui.",
    email:    "discepoli@rugby.it",
    phone:    "+39 000 000 0000",
    location: "Campo da inserire, Città",
    // Set to null to hide a social icon
    socials: {
      instagram: "#",
      whatsapp:  "#",
      facebook:  "#",
    },
  },

};
