# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static single-page landing site for "I Discepoli", an Italian amateur rugby team. No build step, no framework, no dependencies — just three files served directly by any static host.

## Development

Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

No linting, bundling, or test suite exists.

## Architecture

The site uses a strict content/presentation/behaviour separation across three files:

- **`config.js`** — single `CONFIG` object with all editable content (team info, players, gallery photos, roadmap items, merch products, contacts). This is the **only file** users ever need to edit to update the site.
- **`script.js`** — reads `CONFIG` and builds the DOM at load time; also handles navbar scroll, hamburger menu, scroll-reveal animations (IntersectionObserver), and active nav highlighting. The contact form uses a simulated async send — replace with a real backend or Formspree.
- **`style.css`** — all visual styling. Accent color is controlled by `--green` / `--green-dark` CSS variables (set in `:root`) and also via `CONFIG.site.accentColor` (used by `script.js` to override `--green` dynamically).

`index.html` is a pure shell: every visible text node and card is injected by `script.js`. The load order matters — `config.js` must come before `script.js`.

## Key Conventions

- **All content changes go in `config.js` only.** `index.html` and `script.js` should not need touching for content updates.
- Player photos: add `photo: "photos/name.jpg"` to a player object in `CONFIG.team.players`.
- Gallery photos: add objects with `{ src, alt, size }` to `CONFIG.gallery.photos`; `size` can be `"large"` (2×2 grid) or `"tall"` (1×2 grid).
- Roadmap item `status` must be `"past"`, `"active"`, or `"future"` — drives CSS classes and the glowing dot.
- Merch badge color: default green; add `badgeStyle: "new"` for gold.
- Setting a social to `null` in `CONFIG.contacts.socials` hides that icon entirely.

## TODO


- reachable site, actually is not reachable out of local network
- don't add photo in git, just add it in server (add them to personal nas?)
- auto push website