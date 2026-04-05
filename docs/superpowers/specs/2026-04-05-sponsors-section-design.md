# Sponsors Section — Design Spec

**Date:** 2026-04-05
**Status:** Approved

## Summary

Add a sponsors section between the fans section and the board section. Each sponsor shows a logo image, name, and a clickable link to their website.

## Position

In page order: after `#fans`, before `#board`.

## Config (`config.js`)

New top-level `sponsors` key:

```js
sponsors: {
  tag:   { it: "Partner", en: "Partners" },
  title: { it: "I Nostri Sponsor", en: "Our Sponsors" },
  subtitle: {
    it: "Grazie a chi rende possibile tutto questo.",
    en: "Thanks to those who make all this possible.",
  },
  items: [
    {
      name: "Sponsor Name",
      logo: "photos/sponsor-logo.png",  // optional — URL or local path
      url:  "https://example.com",
    },
  ],
},
```

- `logo` is optional. If omitted, a placeholder div with the sponsor's first initial renders.
- `url` opens in a new tab (`target="_blank" rel="noopener"`).

## Nav

- Add `sponsors: { it: "Sponsor", en: "Sponsors" }` to `CONFIG.ui.nav`.
- Add `{ key: 'sponsors', href: '#sponsors' }` to the nav array in `script.js`, between `fans` and `board`.

## DOM (`index.html`)

Insert between `#fans` and `#board`:

```html
<section class="section" id="sponsors">
  <div class="container">
    <div class="section-header" id="sponsors-header"></div>
    <div class="sponsors-grid" id="sponsors-grid"></div>
  </div>
</section>
```

## JS (`script.js`)

New `renderSponsors()` function:
- Sets `#sponsors-header` via `sectionHeader()`
- Clears and rebuilds `#sponsors-grid`
- Each card is an `<a class="sponsor-card">` with `href=url`, `target="_blank"`, `rel="noopener"`
- Card content: logo `<img>` (or placeholder `<div>` with first initial if no logo) + `<span>` with sponsor name
- Called in `renderAll()` after `renderFans()`

## CSS (`style.css`)

```css
.sponsors-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.sponsor-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 28px 32px;
  width: 180px;
  text-decoration: none;
  color: var(--text);
  transition: transform 0.2s, box-shadow 0.2s;
}

.sponsor-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
}

.sponsor-logo {
  width: 100px;
  height: 60px;
  object-fit: contain;
}

.sponsor-logo-placeholder {
  width: 100px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.1);
  border-radius: 8px;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--green);
}

.sponsor-name {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.8;
}
```
