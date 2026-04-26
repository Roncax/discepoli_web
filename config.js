/**
 * ╔══════════════════════════════════════════════════════╗
 * ║          I DISCEPOLI – CONFIGURATION FILE            ║
 * ║  Edit this file to update all website content.       ║
 * ║  You never need to touch index.html or script.js.    ║
 * ║                                                      ║
 * ║  Text fields support two languages:                  ║
 * ║    { it: "Testo italiano", en: "English text" }      ║
 * ║  If only one language is provided it is used for     ║
 * ║  both. Plain strings are always shown as-is.         ║
 * ╚══════════════════════════════════════════════════════╝
 */

const CONFIG = {
  // ── Site identity ────────────────────────────────────
  site: {
    title: "I Discepoli – Rugby Team",
    teamName: "I Discepoli",
    accentColor: "#4684f7f6",
    eyebrow: { it: "Rugby Club · Religione", en: "Rugby Club · Religion" },
    dynamicDescription: {
      prefix: { it: "Siamo ", en: "We are " },
      words: [
        { it: "una squadra di rugby", en: "a rugby team" },
        { it: "un culto", en: "a cult" },
        { it: "i migliori in città", en: "the best in town" },
        { it: "dei cavalli", en: "dei cavalli" },
        { it: "in cerca di Fendu", en: "in cerca di Fendu" },
      ],
    },
  },

  // ── UI strings (form, nav, footer) ───────────────────
  ui: {
    nav: {
      values: { it: "Valori", en: "Values" },
      team: { it: "Team", en: "Team" },
      gallery: { it: "Galleria", en: "Gallery" },
      roadmap: { it: "Roadmap", en: "Roadmap" },
      merch: { it: "Merch", en: "Merch" },
      fans: { it: "Tifosi", en: "Fans" },
      sponsors: { it: "Sponsor", en: "Sponsors" },
      board: { it: "Board", en: "Board" },
      contacts: { it: "Contatti", en: "Contacts" },
    },
    hero: {
      primary: { it: "Scopri il Team", en: "Meet the Team" },
      secondary: { it: "Shop Merch", en: "Shop Merch" },
    },
    contact: {
      emailLabel: { it: "Email", en: "Email" },
      phoneLabel: { it: "Telefono", en: "Phone" },
      locationLabel: { it: "Dove giochiamo", en: "Where we play" },
      instagramLabel: { it: "Instagram", en: "Instagram" },
      facebookLabel: { it: "Facebook", en: "Facebook" },
      linktreeLabel: { it: "Link", en: "Links" },
    },
    form: {
      name: { it: "Nome", en: "Name" },
      namePh: { it: "Il tuo nome", en: "Your name" },
      email: { it: "Email", en: "Email" },
      emailPh: { it: "la@tua.email", en: "your@email.com" },
      message: { it: "Messaggio", en: "Message" },
      messagePh: { it: "Scrivi qui...", en: "Write here..." },
      submit: { it: "Invia messaggio", en: "Send message" },
      sending: { it: "Invio in corso…", en: "Sending…" },
      success: {
        it: "✓ Messaggio inviato! Ti risponderemo presto.",
        en: "✓ Message sent! We'll get back to you soon.",
      },
    },
    buy: { it: "Acquista", en: "Buy" },
    order: {
      eyebrow: { it: "Ordine per", en: "Order for" },
      name: { it: "Il tuo nome", en: "Your name" },
      email: { it: "La tua email (opzionale)", en: "Your email (optional)" },
      phone: { it: "Il tuo telefono", en: "Your phone number" },
      size: { it: "Taglia", en: "Size" },
      qty: { it: "Quantità", en: "Quantity" },
      msg: {
        it: "Messaggio personalizzato (opzionale)",
        en: "Custom message (optional)",
      },
      submit: { it: "Invia ordine", en: "Send order" },
      sending: { it: "Invio in corso…", en: "Sending…" },
      success: {
        it: "✓ Ordine ricevuto! Ti contatteremo presto.",
        en: "✓ Order received! We'll contact you soon.",
      },
      error: {
        it: "Errore nell'invio. Riprova o scrivici direttamente.",
        en: "Send error. Retry or contact us directly.",
      },
      payment: { it: "Metodo di pagamento", en: "Payment method" },
      paymentPaypal: { it: "PayPal", en: "PayPal" },
      paymentIban: { it: "Bonifico bancario", en: "Bank transfer" },
      summary: { it: "Riepilogo ordine", en: "Order summary" },
      summaryProduct: { it: "Prodotto", en: "Product" },
      summarySize: { it: "Taglia", en: "Size" },
      summaryQty: { it: "Quantità", en: "Quantity" },
      summaryPayment: { it: "Pagamento", en: "Payment" },
      back: { it: "← Modifica", en: "← Edit" },
      next: { it: "Riepilogo →", en: "Summary →" },
      paymentDetails: {
        it: "Istruzioni di pagamento",
        en: "Payment instructions",
      },
      paypalBtn: { it: "Paga con PayPal →", en: "Pay with PayPal →" },
      ibanHolder: { it: "Intestatario", en: "Account holder" },
      ibanBank: { it: "Banca", en: "Bank" },
      ibanCode: { it: "IBAN", en: "IBAN" },
      confirmEmail: {
        it: "Controlla la tua email per la conferma.",
        en: "Check your email for confirmation.",
      },
    },
    footerCopy: {
      it: "Tutti i diritti riservati.",
      en: "All rights reserved.",
    },
    addPhoto: { it: "📸 Aggiungi foto", en: "📸 Add photo" },
    galleryDriveLink: {
      it: "Vedi tutto su Drive →",
      en: "View all on Drive →",
    },
    availabilityOut: { it: "Fuori produzione", en: "OUT of production" },
    availabilityOnSight: {
      it: "Cercaci ai Tornei!",
      en: "Look for us at the tournaments!",
    },
  },

  // ── Hero ─────────────────────────────────────────────
  hero: {
    image: "photos/hero.jpg",
  },

  // ── Values & Objectives ──────────────────────────────
  values: {
    tag: { it: "Il Vangelo", en: "The Gospel" },
    title: { it: "I Comandamenti", en: "The Commandments" },
    subtitle: {
      it: "Scritti nel fango, tramandati di meta in meta. Rivelati dal Divino in persona. Chi li viola, paga il terzo tempo.",
      en: "Written in the mud, passed down try by try. Revealed by Divino himself. Those who break them buy the after-match.",
    },
    items: [
      {
        icon: "✝️",
        title: { it: "La Fede viene prima", en: "Faith comes first" },
        text: {
          it: "Non importa il punteggio, non importa il meteo, non importa se hai le ginocchia rotte. Si scende in campo. Sempre. Il Divino lo vuole.",
          en: "Score doesn't matter, weather doesn't matter, broken knees don't matter. You take the field. Always. Divino wills it.",
        },
      },
      {
        icon: "🍺",
        title: {
          it: "Il Terzo Tempo è Sacro",
          en: "The After-Match is Sacred",
        },
        text: {
          it: "La partita finisce al fischio. Il terzo tempo non finisce mai. Chi lascia prima del secondo giro è un eretico e verrà giudicato.",
          en: "The game ends at the whistle. The after-match never ends. Those who leave before the second round are heretics and shall be judged.",
        },
      },
      {
        icon: "🙏",
        title: { it: "Ama il tuo compagno", en: "Love thy teammate" },
        text: {
          it: "Anche quando sbaglia la meta a tre metri dalla linea. Anche quando passa la palla al momento sbagliato. Soprattutto allora.",
          en: "Even when he drops the try three metres from the line. Even when he passes at the wrong moment. Especially then.",
        },
      },
      {
        icon: "😇",
        title: { it: "Il Martire del Campo", en: "The Field Martyr" },
        text: {
          it: "Ogni squadra ha il suo santo patrono: quello che gioca infortunato, che corre in difesa quando tutti mollano, e che porta le birre senza lamentarsi.",
          en: "Every team has its patron saint: the one who plays injured, who runs in defence when everyone gives up, and carries the beers without complaint.",
        },
      },
    ],
  },

  // ── Team / Players ───────────────────────────────────
  team: {
    tag: { it: "Il Roster", en: "The Roster" },
    title: { it: "I Giocatori", en: "The Players" },
    subtitle: {
      it: "Ogni Discepolo porta qualcosa di unico. Ecco chi siamo davvero.",
      en: "Every Discepolo brings something unique. Here's who we really are.",
    },
    players: [
      {
        name: "Matteo Affuso",
        nickname: "Affusino",
        bio: { it: "Un piede magico", en: "Player description." },
        photo: "photos/players/affusino.jpg",
      },
      {
        name: "Filippo Bertossi",
        nickname: "Berto",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player2/400/300",
      },
      {
        name: "Giacomo Bertossi",
        nickname: "Berto",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player2/400/300",
      },
      {
        name: "Umberto Bisotti",
        nickname: "Biso",
        bio: {
          it: "Ha sempre bisogno di un abbraccio",
          en: "Player description.",
        },
        photo: "https://picsum.photos/seed/player3/400/300",
      },
      {
        name: "Brasher Filippo",
        nickname: "Bresh",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player4/400/300",
      },
      {
        name: "Bugli Alessandro",
        nickname: "Bugli A",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/ale bugli.jpg",
      },
      {
        name: "Davide Bugli",
        nickname: "Dave",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/dade bugli.jpg",
      },
      {
        name: "Davide Grossi",
        nickname: "Davide",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/dade bugli.jpg",
      },
      {
        name: "Pietro Grossi",
        nickname: "Pie",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/dade bugli.jpg",
      },
      {
        name: "Jacopo Leoncavallo",
        nickname: "Jacopo",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/dade bugli.jpg",
      },
      {
        name: "Ernesto Cafasso",
        nickname: "Dave",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/dade bugli.jpg",
      },
      {
        name: "Leonardo Bugli",
        nickname: "Dave",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/dade bugli.jpg",
      },
      {
        name: "Alberto Cominato",
        nickname: "Comi",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/dade bugli.jpg",
      },
      {
        name: "Federico Armellotti",
        nickname: "Champ",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/champ.jpg",
      },
      {
        name: "Cristian Radice",
        nickname: "Cricchio",
        bio: { it: "Cavallo di razza", en: "Player description." },
        photo: "photos/players/cris.jpg",
      },
      {
        name: "Simone Lorenzo Cuzzola",
        nickname: "Cuzzo",
        bio: {
          it: "Non lasciatelo da solo in trasferta, potrebbe non tornare",
          en: "Player description.",
        },
        photo: "photos/players/cuzzo.jpg",
      },
      {
        name: "Dani",
        nickname: "Dani",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player10/400/300",
      },
      {
        name: "Dave",
        nickname: "Dave",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player11/400/300",
      },
      {
        name: "Paolo Roncaglioni",
        nickname: "Divino",
        bio: { it: "L'unico e il solo", en: "Player description." },
        photo: "photos/players/divi.jpg",
      },
      {
        name: "Amicucci Edmondo",
        nickname: "Eddy",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/eddi.jpg",
      },
      {
        name: "Fabio Morosi",
        nickname: "Fabione",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/fabione.jpg",
      },
      {
        name: "Franco",
        nickname: "Franco",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/franco.jpg",
      },
      {
        name: "Dario Ernesto Notarangelo",
        nickname: "Darietto",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/franco.jpg",
      },
      {
        name: "Giacomo Elemi",
        nickname: "Jack",
        bio: { it: "Un diavolo in campo", en: "Player description." },
        photo: "photos/players/giec.jpg",
      },
      {
        name: "Michele Ferrara",
        nickname: "Michele",
        bio: { it: "Lorem ipsum", en: "Player description." },
        photo: "photos/players/giec.jpg",
      },
      {
        name: "Giorgio Boccardo",
        nickname: "Gino",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player17/400/300",
      },
      {
        name: "Giacomo Grillandini",
        nickname: "Grillo",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player18/400/300",
      },
      {
        name: "Lorenzo Borio",
        nickname: "Lorenzo",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player18/400/300",
      },
      {
        name: "Guido Poletti",
        nickname: "Guido",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/guido.jpg",
      },
      {
        name: "Jacopo L",
        nickname: "Jacopo L",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player20/400/300",
      },
      {
        name: "Lorenzo Villa",
        nickname: "Lollo",
        bio: { it: "Il cavallo originale", en: "Player description." },
        photo: "photos/players/lollo.jpg",
      },
      {
        name: "Damuele Mangiarotti",
        nickname: "Mangia",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/mangiarotti.jpg",
      },
      {
        name: "Davide Mastromauro",
        nickname: "Mastro",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/mastro.jpg",
      },
      {
        name: "Mazza",
        nickname: "Mazza",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/mazza.jpg",
      },
      {
        name: "Luca Milanesi",
        nickname: "Mila",
        bio: {
          it: "Portatore di bad vibes dal 1997",
          en: "Player description.",
        },
        photo: "photos/players/mila.jpg",
      },
      {
        name: "Pablo Jesus Garcia Trejo",
        nickname: "Pablo",
        bio: { it: "La nostra quota messicana", en: "Player description." },
        photo: "https://picsum.photos/seed/player26/400/300",
      },
      {
        name: "Paolo Crepaldi",
        nickname: "Paolino",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/paolino.jpg",
      },
      {
        name: "Parma",
        nickname: "Parma",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player28/400/300",
      },
      {
        name: "Peter Spreafico",
        nickname: "Unto",
        bio: {
          it: "I suoi campi di esperienza: elettrotecnica e dar fastidio",
          en: "Player description.",
        },
        photo: "photos/players/peter.jpg",
      },
      {
        name: "Raoul D'ercole",
        nickname: "Raoul",
        bio: { it: "PORCO***O", en: "Player description." },
        photo: "photos/players/raoule.jpg",
      },
      {
        name: "Riccardo Daniello",
        nickname: "Ricky",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/richi daniello.jpg",
      },
      {
        name: "Andrea Rivolta",
        nickname: "Rivo",
        bio: {
          it: "Il fornitore ufficiale dei discepoli di alcool e cattive idee",
          en: "Player description.",
        },
        photo: "photos/players/rivo.jpg",
      },
      {
        name: "Marco Romanò",
        nickname: "Romanò",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/romano.jpg",
      },
      {
        name: "Carlo Ronza",
        nickname: "Ronza",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player34/400/300",
      },
      {
        name: "Alessandro Fumagalli",
        nickname: "Rosso",
        bio: { it: "Un purosangue dal manto rosso", en: "Player description." },
        photo: "https://picsum.photos/seed/player35/400/300",
      },
      {
        name: "Davide Saita",
        nickname: "Saita",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "photos/players/saita.jpg",
      },
      {
        name: "Alessandro Santarelli",
        nickname: "Santa",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player37/400/300",
      },
      {
        name: "Giacomo Pozzi",
        nickname: "Shudo",
        bio: { it: "Il maestro.. fuori dal campo", en: "Player description." },
        photo: "photos/players/shudo.jpg",
      },
      {
        name: "Davide Signorelli",
        nickname: "Signo",
        bio: { it: "Il petto piú grosso di Milano", en: "Player description." },
        photo: "photos/players/signo.jpg",
      },
      {
        name: "Emanuele Tavecchia",
        nickname: "Tav",
        bio: {
          it: "Istigatore ufficiale Discepoli",
          en: "Player description.",
        },
        photo: "photos/players/tav.jpg",
      },
      {
        name: "Telli Alessio",
        nickname: "Telli",
        bio: { it: "Inventore dei rocket-pass", en: "Player description." },
        photo: "photos/players/telli.jpg",
      },
      {
        name: "Daniel Ladd Davis Timothy",
        nickname: "Tim",
        bio: { it: "La nostra quota australiana", en: "Player description." },
        photo: "photos/players/tim.jpg",
      },
      {
        name: "Tommaso Pellegrini",
        nickname: "Tommy",
        bio: {
          it: "Uno scorbutico dal cuore d'oro",
          en: "Player description.",
        },
        photo: "photos/players/tommi.jpg",
      },
      {
        name: "Trivillin Filippo",
        nickname: "Trivi",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player44/400/300",
      },
      {
        name: "Carlo Platania",
        nickname: "Carlo",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player44/400/300",
      },
      {
        name: "Giannantonio Visentin",
        nickname: "Vise",
        bio: { it: "Il migliore amico di Tommy", en: "Player description." },
        photo: "https://picsum.photos/seed/player45/400/300",
      },
      {
        name: "Beniamino Sacchi",
        nickname: "Beniamino",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player45/400/300",
      },
      {
        name: "Riccardo Cosimo Schiavone",
        nickname: "Riccardo",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player45/400/300",
      },
      {
        name: "Pietro Tesser",
        nickname: "Pietro",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player45/400/300",
      },
      {
        name: "Francesco Zanzi",
        nickname: "Francesco",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player45/400/300",
      },
      {
        name: "Pietro Maresca",
        nickname: "Pié",
        bio: { it: "Descrizione del giocatore.", en: "Player description." },
        photo: "https://picsum.photos/seed/player45/400/300",
      },
    ],
  },

  // ── Gallery ──────────────────────────────────────────
  gallery: {
    tag: { it: "Momenti", en: "Moments" },
    title: { it: "Galleria", en: "Gallery" },
    subtitle: {
      it: "Immagini dal campo, dal terzo tempo e da tutto il resto.",
      en: "Photos from the pitch, the after-match, and everything in between.",
    },
    driveUrl:
      "https://drive.google.com/drive/folders/1FgG4gxCDIsFki6w36vsNjNwX84Otm0bR?usp=sharing",
    // size: "large" (2×2), "tall" (1×2), or omit for normal
    photos: [
      {
        src: "photos/gallery/team.jpg",
        alt: { it: "Holy Party", en: "Holy Party" },
        size: "large",
      },
      {
        src: "photos/gallery/gallery_3.jpg",
        alt: { it: "Allenamento", en: "Training" },
      },
      {
        src: "photos/gallery/team_2.jpg",
        alt: { it: "Riscaldamento", en: "Warm-up" },
      },
      {
        src: "photos/gallery/gallery_1.jpg",
        alt: { it: "Foto di squadra", en: "Team photo" },
        size: "tall",
      },
      {
        src: "photos/gallery/biso_gallery.jpg",
        alt: { it: "In campo", en: "On the pitch" },
      },
      {
        src: "photos/gallery/tarvisio.jpg",
        alt: { it: "Esultanza", en: "Celebration" },
      },
      {
        src: "photos/gallery/gallery_2.jpg",
        alt: { it: "Allenamento", en: "Training" },
      },
      {
        src: "photos/gallery/gallery_4.jpg",
        alt: { it: "Allenamento", en: "Training" },
      },
    ],
    placeholderCount: 7,
  },

  // ── Roadmap ──────────────────────────────────────────
  roadmap: {
    tag: { it: "La nostra storia", en: "Our story" },
    title: { it: "Roadmap", en: "Roadmap" },
    subtitle: {
      it: "I tornei a cui abbiamo partecipato, anno per anno.",
      en: "The tournaments we've entered, year by year.",
    },
    years: [
      {
        year: "2019",
        status: "past",
        tournaments: [
          {
            name: { it: "Seven of the Heaven", en: "Seven of the Heaven" },
            date: "19/05",
          },
          {
            name: { it: "Beach Cologno", en: "Beach Cologno" },
            date: "25/05",
          },
          { name: { it: "Cologno", en: "Cologno" }, date: "01/06" },
          {
            name: { it: "Milano Rugby Festival", en: "Milano Rugby Festival" },
            date: "7-8-9/06",
          },
          {
            name: { it: "Gussago Seven", en: "Gussago Seven" },
            date: "15/06",
          },
          {
            name: { it: "Valdobbiadene", en: "Valdobbiadene" },
            date: "22/06",
          },
          { name: { it: "PizziTorneo", en: "PizziTorneo" }, date: "29/06" },
          {
            name: { it: "Alpago Beach", en: "Alpago Beach" },
            date: "06/07",
          },
          {
            name: { it: "Grigliatona Cuoricina", en: "Grigliatona Cuoricina" },
            date: "13-14/07",
          },
          { name: { it: "X-Masters", en: "X-Masters" }, date: "20-21/07" },
          {
            name: { it: "Ritiro Spirituale", en: "Ritiro Spirituale" },
            date: "27-28/07",
          },
        ],
      },
      {
        year: "2022",
        status: "past",
        tournaments: [
          {
            name: { it: "Arena Sevens", en: "Arena Sevens" },
            date: "18/06",
          },
          {
            name: { it: "Rosolina Beach", en: "Rosolina Beach" },
            date: "02-03/07",
          },
          {
            name: { it: "Grigliata Ottiglio", en: "Grigliata Ottiglio" },
            date: "09-10/07",
          },
          {
            name: { it: "Alpago Beach", en: "Alpago Beach" },
            date: "16-17/07",
          },
        ],
      },
      {
        year: "2023",
        status: "past",
        tournaments: [
          {
            name: {
              it: "OffBeat 7's / Lainate 7's",
              en: "OffBeat 7's / Lainate 7's",
            },
            date: "27/05",
            image: "photos/tournaments/offbeat_2023.jpg",
          },
          {
            name: { it: "Milano Rugby Festival", en: "Milano Rugby Festival" },
            date: "03-04/06",
            image: "photos/tournaments/mrf_2023.jpg",
          },
          {
            name: { it: "Novara Beach", en: "Novara Beach" },
            date: "17/06",
            image: "photos/tournaments/novara_2023.jpg",
          },
          {
            name: { it: "Figueira Beach", en: "Figueira Beach" },
            date: "30/06-03/07",
            image: "photos/tournaments/figueira_2023.png",
          },
          {
            name: { it: "Alpago Beach", en: "Alpago Beach" },
            date: "15/07",
            image: "photos/tournaments/alpago_2023.jpg",
          },
        ],
      },
      {
        year: "2024",
        status: "past",
        tournaments: [
          {
            name: { it: "Milano Rugby Festival", en: "Milano Rugby Festival" },
            date: "31/05-02/06",
            image: "photos/tournaments/mrf_2024.jpg",
          },
          {
            name: { it: "Arena Sevens", en: "Arena Sevens" },
            date: "08/06",
          },
          {
            name: { it: "Annone Touch", en: "Annone Touch" },
            date: "15/06",
          },
          {
            name: { it: "L'aia Beach", en: "L'aia Beach" },
            date: "22-23/06 🇳🇱",
            image: "https://picsum.photos/seed/laia2024/600/300",
          },
          {
            name: { it: "Grigliata Ottiglio", en: "Grigliata Ottiglio" },
            date: "29-30/06",
            image: "https://picsum.photos/seed/ottiglio2024/600/300",
          },
          {
            name: { it: "Tolosa Water Touch", en: "Tolosa Water Touch" },
            date: "06-07/07 🇫🇷",
            image: "https://picsum.photos/seed/tolosa2024/600/300",
          },
          {
            name: { it: "Alpago Beach", en: "Alpago Beach" },
            date: "13-14/07",
          },
          {
            name: {
              it: "Attività fine stagione",
              en: "End of season activity",
            },
            date: "20-21/07",
          },
        ],
      },
      {
        year: "2025",
        status: "past",
        tournaments: [
          {
            name: { it: "Snow Rugby", en: "Snow Rugby" },
            date: "11-12/01",
            image: "https://picsum.photos/seed/snow2025/600/300",
          },
          {
            name: { it: "Noceto Touch", en: "Noceto Touch" },
            date: "24-25/05",
          },
          {
            name: { it: "Milano Rugby Festival", en: "Milano Rugby Festival" },
            date: "31/05-01/06",
            image: "photos/tournaments/mrf_2025.jpg",
          },
          {
            name: {
              it: "Torneo Città di Rovato",
              en: "Torneo Città di Rovato",
            },
            date: "07/06",
          },
          { name: { it: "Varese 7's", en: "Varese 7's" }, date: "14/06" },
          {
            name: { it: "Touch Annone", en: "Touch Annone" },
            date: "21/06",
          },
          {
            name: { it: "Grigliata Ottiglio", en: "Grigliata Ottiglio" },
            date: "28/06",
            image: "https://picsum.photos/seed/ottiglio2025/600/300",
          },
          {
            name: { it: "Alpago Beach", en: "Alpago Beach" },
            date: "12-13/07",
            image: "https://picsum.photos/seed/alpago2025/600/300",
          },
          {
            name: { it: "Cheltenham 7's", en: "Cheltenham 7's" },
            date: "18-19/07 🇬🇧",
            image: "https://picsum.photos/seed/cheltenham2025/600/300",
          },
        ],
      },
      {
        year: "2026",
        status: "active",
        tournaments: [
          { name: { it: "Touch Cluri", en: "Touch Cluri" }, date: "02/05" },
          {
            name: { it: "Festa Discepoli", en: "Festa Discepoli" },
            date: "9 o 16/05",
          },
          {
            name: { it: "San Marino 7's", en: "San Marino 7's" },
            date: "23-24/05",
          },
          {
            name: { it: "Milano Rugby Festival", en: "Milano Rugby Festival" },
            date: "30-31/05",
          },
          {
            name: { it: "Nocetouch / Para 7's", en: "Nocetouch / Para 7's" },
            date: "06/06",
          },
          {
            name: {
              it: "Varese 7's / Rovato 7's / Valtellina 7's",
              en: "Varese 7's / Rovato 7's / Valtellina 7's",
            },
            date: "13/06",
          },
          {
            name: {
              it: "Annone Touch / Off Beat 7's",
              en: "Annone Touch / Off Beat 7's",
            },
            date: "20/06",
          },
          { name: { it: "Calvi 7's", en: "Calvi 7's" }, date: "27-28/06" },
        ],
      },
      {
        year: "2027",
        status: "future",
        tournaments: [
          {
            name: {
              it: "Obiettivo: vincere tutto",
              en: "Goal: win everything",
            },
            location: { it: "Da definire", en: "TBD" },
          },
        ],
      },
    ],
  },

  // ── Best Fans ─────────────────────────────────────────
  fans: {
    tag: { it: "Curva Sud", en: "The Stands" },
    title: { it: "I Migliori Tifosi", en: "Best Fans" },
    subtitle: {
      it: "Chi ci supporta dal bordo campo, con la fede, con la birra in mano. Eroi silenziosi.",
      en: "Those who support us from the sideline, with faith, beer in hand. Silent heroes.",
    },
    fans: [
      {
        name: "Potti",
        title: { it: "Supporter #1", en: "Supporter #1" },
        bio: {
          it: "La supporter numero uno, presente fin dall'inizio. ",
          en: "The number one supporter, there from day one. ",
        },
        photo: "photos/fans/potti.jpg",
      },
      {
        name: "Alice",
        title: { it: "Team Manager", en: "Team Manager" },
        bio: {
          it: "La TM che ci sopporta e tiene a bada il jack-sistema. Organizza il caos con il sorriso.",
          en: "The TM who puts up with us and keeps the jack-system in check. Manages the chaos with a smile.",
        },
        photo: "photos/fans/ali.jpg",
      },
      {
        name: "Rwan",
        title: { it: "Fan & Giocatore Onorario", en: "Fan & Honorary Player" },
        bio: {
          it: "Tifoso doc che ha anche messo gli scarpini in un paio di tornei. Sa di cosa parla.",
          en: "A true fan who also laced up his boots at a couple of tournaments. He knows what he's talking about.",
        },
        photo: "photos/fans/ru.jpg",
      },
      {
        name: "Camo",
        title: { it: "Patron del Moss", en: "Moss Patron" },
        bio: {
          it: "Proprietario del Moss Bar e fornitore ufficiale del luogo sacro dove si tengono le nostre feste. Senza di lui non ci sarebbe il dopo-torneo.",
          en: "Owner of Moss Bar and official provider of the sacred venue for our parties. Without him there's no after-party.",
        },
        photo: "photos/fans/camo.jpg",
      },
    ],
  },

  // ── Sponsors ─────────────────────────────────────────
  sponsors: {
    tag: { it: "Partner", en: "Partners" },
    title: { it: "I Nostri Sponsor", en: "Our Sponsors" },
    subtitle: {
      it: "Grazie a chi rende possibile tutto questo.",
      en: "Thanks to those who make all this possible.",
    },
    items: [
      {
        name: "Armauto",
        url: "https://www.instagram.com/armauto_service/",
        logo: "photos/sponsors/armauto.jpg",
      },
      {
        name: "Ginger 3D",
        url: "https://www.gingeradditive.com/",
        logo: "photos/sponsors/ginger3d.png",
      },
      {
        name: "Moss",
        url: "https://www.facebook.com/MossMonza/",
        logo: "photos/sponsors/moss.png",
      },
    ],
  },

  // ── Holy Board ───────────────────────────────────────
  board: {
    tag: { it: "La Dirigenza", en: "Management" },
    title: { it: "The Holy Board", en: "The Holy Board" },
    subtitle: {
      it: "Le menti (e le colpe) dietro I Discepoli. Persone straordinarie con troppo tempo libero.",
      en: "The minds (and the blame) behind I Discepoli. Extraordinary people with too much free time.",
    },
    members: [
      {
        name: "Giec",
        role: {
          it: "Devil Reincarnated",
          en: "Devil Reincarnated",
        },
        bio: {
          it: "Il cervello dietro tutto. O almeno così dice lui.",
          en: "The brain behind everything. Or so he claims.",
        },
        photo: "photos/board/giec.png",
      },
      {
        name: "Divino",
        role: { it: "L'unico e il solo", en: "The one and only" },
        bio: {
          it: "Non ha bisogno di presentazioni. Lo sa anche lui.",
          en: "Needs no introduction. He knows it too.",
        },
        photo: "photos/board/divi.png",
      },
      {
        name: "Alice",
        role: {
          it: "Social Media Manager & TM",
          en: "Social Media Manager & TM",
        },
        bio: {
          it: "Gestisce i social con stile. Ha anche dei difetti, ma non è questo il momento.",
          en: "Manages socials with style. She also has flaws, but this is not the time.",
        },
        photo: "photos/board/ali.png",
      },
      {
        name: "Rwu",
        role: {
          it: "TM, aguzzina e ricattatrice",
          en: "Secretary, tormentor & blackmailer",
        },
        bio: {
          it: "Tiene i registri, tiene le redini e tiene in pugno tutti.",
          en: "Keeps the records, the reins, and everyone in her grip.",
        },
        photo: "photos/board/ru.png",
      },
      {
        name: "Shudo",
        role: { it: "Tesoriere", en: "Treasurer" },
        bio: {
          it: "Controlla il budget. Spoiler: non basta mai.",
          en: "Controls the budget. Spoiler: it's never enough.",
        },
        photo: "photos/board/shu.png",
      },
      {
        name: "Tommy",
        role: {
          it: "Email & Iscrizioni Tornei",
          en: "Emails & Tournament Entry",
        },
        bio: {
          it: "Si occupa di comunicare e iscrivere la squadra ai tornei. Senza di lui non giocheremmo da nessuna parte.",
          en: "Handles comms and tournament registrations. Without him we'd play nowhere.",
        },
        photo: "photos/board/tommy.jpg",
      },
      {
        name: "Dade",
        role: { it: "Fotografo", en: "Photographer" },
        bio: {
          it: "Cattura ogni momento sul campo e fuori. Se una foto è bella, è merito suo.",
          en: "Captures every moment on and off the pitch. If a photo looks good, credit goes to him.",
        },
        photo: "photos/board/dade.jpg",
      },
    ],
  },

  // ── Merch ────────────────────────────────────────────
  merch: {
    tag: { it: "Store", en: "Store" },
    title: { it: "Merch", en: "Merch" },
    subtitle: {
      it: "Indossa i colori dei Discepoli. Essere parte della famiglia non è solo in campo.",
      en: "Wear the Discepoli colours. Being part of the family goes beyond the pitch.",
    },
    orderEndpoint: "https://formsubmit.co/ajax/discepoliteam@gmail.com",
    payment: {
      iban: {
        holder: "Giacomo Pozzi",
        iban: "IT24P36772223000EM000295137",
      },
      paypal: "https://www.paypal.com/paypalme/idiscepoli",
    },
    products: [
      {
        name: { it: "Divisa (2024)", en: "Kit (2024)" },
        desc: {
          it: "La divisa ufficiale della stagione 2024. Tessuto tecnico, colori della squadra, paradiso garantito.",
          en: "The official 2024 season kit. Technical fabric, team colours, guaranteed heaven.",
        },
        price: "€ 45,00",
        sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
        badge: { it: "Bestseller", en: "Bestseller" },
        images: ["photos/merch/kit_2024_front.jpg"],
      },
      {
        name: { it: "Maglietta", en: "T-Shirt" },
        desc: {
          it: "La classica maglietta dei Discepoli. Cotone morbido, logo stampato, da indossare sempre.",
          en: "The classic Discepoli tee. Soft cotton, printed logo, wear it everywhere.",
        },
        price: "€ 10,00",
        sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
        images: ["photos/merch/maglietta.jpg"],
      },
      {
        name: { it: "Cappellino", en: "Cap" },
        desc: {
          it: "Il logo dei Discepoli ricamato su cappellino snapback. Stile da campioni.",
          en: "The Discepoli logo embroidered on a snapback cap. Champions' style.",
        },
        sizes: ["Unica"],
        images: ["photos/merch/cap.png"],
        price: "€ 24,00",
      },

      {
        name: { it: "Canotta", en: "Vest" },
        desc: {
          it: "Canotta tecnica per gli allenamenti estivi. Fresca, leggera, con il logo sul petto.",
          en: "Technical vest for summer training. Cool, light, with the logo on the chest.",
        },
        badge: { it: "Nuovo", en: "New" },
        badgeStyle: "new",
        price: "€ 30,00",
        sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
        images: ["photos/merch/canotta.png"],
      },
      {
        name: { it: "Santini", en: "Holy Card" },
        desc: {
          it: "Un santino da tenere nel portafoglio. Per i veri credenti.",
          en: "A holy card to keep in your wallet. For the true believers.",
        },
        sizes: ["Unica"],
        images: ["photos/merch/santino.jpeg"],
        availability: "on-sight",
      },
      {
        name: { it: "Sticker", en: "Sticker" },
        desc: {
          it: "Adesivi ufficiali dei Discepoli. Attaccarli ovunque è obbligatorio per statuto.",
          en: "Official Discepoli stickers. Sticking them everywhere is mandatory by statute.",
        },
        sizes: ["Unica"],
        images: ["photos/merch/sticker.jpeg"],
        availability: "on-sight",
      },
      {
        name: { it: "Pantaloncini", en: "Shorts" },
        desc: {
          it: "Pantaloncini da gioco abbinati alla divisa. Leggeri e resistenti agli eretici.",
          en: "Match shorts to pair with the kit. Lightweight and heretic-resistant.",
        },
        price: "€ 15,00",
        sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
        images: ["photos/merch/pantaloncini.png"],
        availability: "out",
      },
    ],
  },

  // ── Contacts ─────────────────────────────────────────
  contacts: {
    tag: { it: "Parlaci", en: "Talk to us" },
    title: { it: "Contatti", en: "Contacts" },
    subtitle: {
      it: "Vuoi unirti? Vuoi sfidarci? Vuoi solo mandarci un saluto? Siamo qui.",
      en: "Want to join? Want to challenge us? Just want to say hi? We're here.",
    },
    email: "discepoliteam@gmail.com",
    phone: "+39 366 3586183",
    date: "Paradiso, Ovunque",
    socials: {
      instagram: "https://www.instagram.com/i_discepoli/",
      facebook: "https://es-la.facebook.com/IDiscepoliRugby/",
      linktree: "https://linktr.ee/idiscepoli",
    },
  },
};
nm;
