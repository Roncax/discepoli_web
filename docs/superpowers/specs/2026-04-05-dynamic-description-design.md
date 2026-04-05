# Dynamic Description — Design Spec

**Date:** 2026-04-05
**Status:** Approved

## Summary

Replace the static hero tagline with a typewriter-animated "We are …" line that cycles through a configurable list of phrases.

## Config

Remove `site.tagline`. Add `site.dynamicDescription`:

```js
site: {
  dynamicDescription: {
    prefix: { it: "Siamo ", en: "We are " },
    words: [
      { it: "una squadra di rugby", en: "a rugby team" },
      { it: "un culto",             en: "a cult"        },
      { it: "i migliori in città",  en: "the best in town" },
    ],
  },
}
```

Both prefix and each word support `{ it, en }` bilingual objects. On language switch the typewriter restarts with the new language's words.

## DOM (`index.html`)

Replace:
```html
<p class="hero-subtitle" id="hero-subtitle"></p>
```
With:
```html
<p class="hero-subtitle" id="hero-subtitle">
  <span id="hero-dynamic-prefix"></span><span id="hero-dynamic-word"></span><span class="typewriter-cursor">|</span>
</p>
```

## Behaviour (`script.js`)

`renderHero()` sets `#hero-dynamic-prefix` text and calls `startTypewriter(words, el)`.

`startTypewriter(words, el)`:
- Clears any running interval/timeout before starting (safe for language re-renders)
- Loops infinitely through `words`
- Per word:
  1. Type character by character — `typeSpeed: 80ms`
  2. Pause when complete — `pauseAfterType: 1800ms`
  3. Delete character by character — `deleteSpeed: 40ms`
  4. Pause before next word — `pauseAfterDelete: 400ms`

## CSS (`style.css`)

```css
.typewriter-cursor {
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
```

No other style changes needed — `.hero-subtitle` already provides correct sizing and color.
