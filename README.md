# 🏉 I Discepoli – Rugby Team Website

Landing page for **I Discepoli**, an Italian amateur summer rugby team.  
Static, dependency-free, deployable anywhere.

---

## Structure

```
discepoli_web/
├── index.html   # Page shell — never needs editing
├── config.js    # ← all content lives here
├── script.js    # Reads config and builds the DOM
└── style.css    # All styling
```

**You only ever need to edit `config.js`.**

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Team name, tagline, CTA buttons |
| **Valori & Obiettivi** | Team values and goals |
| **I Giocatori** | Player cards with photo, role, bio — horizontally scrollable |
| **Galleria** | Photo grid with large/tall/normal sizes |
| **Roadmap** | Year tabs, each showing a zigzag timeline of tournaments |
| **I Migliori Tifosi** | Fan cards — same layout as players |
| **The Holy Board** | Circular photo cards for team management |
| **Merch** | Product showcase (no payment, display only) |
| **Contatti** | Contact info, social links, contact form |

---

## Local development

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

No build step, no dependencies, no bundler.

---

## How to update content

All content is in `config.js`. Common tasks:

**Add a player**
```js
// in CONFIG.team.players
{ number: 7, name: "Mario Rossi", role: "Ala", bio: "Il più veloce.", photo: "photos/mario.jpg" }
```

**Add a gallery photo**
```js
// in CONFIG.gallery.photos
// size: "large" (2×2), "tall" (1×2), or omit for normal
{ src: "photos/match.jpg", alt: "Partita 2026", size: "large" }
```

**Add a tournament to the roadmap**
```js
// in CONFIG.roadmap.years[n].tournaments
{ name: "Torneo X", location: "Milano", result: "1° posto 🏆", image: "photos/torneo.jpg" }
```

**Add a board member**
```js
// in CONFIG.board.members
{ name: "Luca Bianchi", role: "Allenatore", bio: "Urla tanto, sa poco.", photo: "photos/luca.jpg" }
```

**Change the accent color**
```js
// in CONFIG.site
accentColor: "#e53935"  // any hex color
```

**Hide a social icon**
```js
// in CONFIG.contacts.socials
instagram: null  // set to null to hide
```

---

## Hosting

The site is hosted on a **Synology NAS** via Web Station + reverse proxy.

- Files live at `/volume1/web/discepoli/`
- Accessible at `http://discepoli.roncax.synology.me`
- Upload updated files via File Station to deploy

---

## Photos

Place local photos anywhere under the project folder and reference them by relative path in `config.js`:

```js
photo: "photos/players/mario.jpg"
photo: "photos/roadmap/torneo2026.jpg"
photo: "photos/merch/jersey.jpg"
```

Placeholder images use [picsum.photos](https://picsum.photos) — replace them with real photos when available.
