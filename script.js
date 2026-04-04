/* ═══════════════════════════════════════════════
   I Discepoli – script.js
   Reads CONFIG from config.js and builds the DOM.
   ═══════════════════════════════════════════════ */

// ── SVG icons ─────────────────────────────────────────────────────────────
const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
  whatsapp:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  facebook:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
};

// ── Helpers ────────────────────────────────────────────────────────────────
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function sectionHeader(tag, title, subtitle) {
  return `
    <span class="tag">${tag}</span>
    <h2 class="section-title">${title}</h2>
    ${subtitle ? `<p class="section-subtitle">${subtitle}</p>` : ''}
  `;
}

// ── Apply accent color ─────────────────────────────────────────────────────
if (CONFIG.site.accentColor) {
  document.documentElement.style.setProperty('--green', CONFIG.site.accentColor);
}

// ── Page title ────────────────────────────────────────────────────────────
document.title = CONFIG.site.title;

// ── Navbar ────────────────────────────────────────────────────────────────
document.getElementById('nav-team-name').textContent = CONFIG.site.teamName;

const navSections = [
  { label: 'Valori',   href: '#values'   },
  { label: 'Team',     href: '#team'     },
  { label: 'Galleria', href: '#gallery'  },
  { label: 'Roadmap',  href: '#roadmap'  },
  { label: 'Merch',    href: '#merch'    },
  { label: 'Tifosi',   href: '#fans'     },
  { label: 'Board',    href: '#board'    },
  { label: 'Contatti', href: '#contacts', cta: true },
];

const navLinks = document.getElementById('nav-links');
navSections.forEach(({ label, href, cta }) => {
  const li = el('li');
  const a  = el('a');
  a.href = href;
  a.textContent = label;
  if (cta) a.className = 'nav-cta';
  li.appendChild(a);
  navLinks.appendChild(li);
});

// ── Hero ──────────────────────────────────────────────────────────────────
document.getElementById('hero-eyebrow').textContent  = CONFIG.site.eyebrow;
document.getElementById('hero-title').textContent    = CONFIG.site.teamName;
document.getElementById('hero-subtitle').textContent = CONFIG.site.tagline;

const heroActions = document.getElementById('hero-actions');
const { primaryBtn, secondaryBtn } = CONFIG.hero;
heroActions.innerHTML = `
  <a href="${primaryBtn.href}"   class="btn btn-primary">${primaryBtn.label}</a>
  <a href="${secondaryBtn.href}" class="btn btn-outline">${secondaryBtn.label}</a>
`;

// ── Values ────────────────────────────────────────────────────────────────
const { values } = CONFIG;
document.getElementById('values-header').innerHTML = sectionHeader(values.tag, values.title, values.subtitle);

const valuesGrid = document.getElementById('values-grid');
values.items.forEach(({ icon, title, text }) => {
  valuesGrid.appendChild(el('div', 'value-card', `
    <div class="value-icon">${icon}</div>
    <h3>${title}</h3>
    <p>${text}</p>
  `));
});

// ── Team ──────────────────────────────────────────────────────────────────
const { team } = CONFIG;
document.getElementById('team-header').innerHTML = sectionHeader(team.tag, team.title, team.subtitle);

const teamGrid = document.getElementById('team-grid');
team.players.forEach(({ number, name, role, bio, photo }) => {
  const photoHTML = photo
    ? `<img class="player-photo" src="${photo}" alt="${name}" loading="lazy" />`
    : `<div class="player-photo placeholder-photo"><span>👤</span></div>`;

  teamGrid.appendChild(el('div', 'player-card', `
    ${photoHTML}
    <div class="player-info">
      <span class="player-number">#${number}</span>
      <h3 class="player-name">${name}</h3>
      <span class="player-role">${role}</span>
      <p class="player-bio">${bio}</p>
    </div>
  `));
});

// ── Gallery ───────────────────────────────────────────────────────────────
const { gallery } = CONFIG;
document.getElementById('gallery-header').innerHTML = sectionHeader(gallery.tag, gallery.title, gallery.subtitle);

const galleryGrid = document.getElementById('gallery-grid');

if (gallery.photos && gallery.photos.length > 0) {
  gallery.photos.forEach(({ src, alt, size }) => {
    const cls = ['gallery-item', size || ''].filter(Boolean).join(' ');
    const item = el('div', cls);
    const img  = document.createElement('img');
    img.src    = src;
    img.alt    = alt || '';
    img.loading = 'lazy';
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
    const overlay = el('div', 'gallery-overlay', `<span>${alt || ''}</span>`);
    item.appendChild(img);
    item.appendChild(overlay);
    galleryGrid.appendChild(item);
  });
} else {
  // Placeholder tiles with varying sizes for visual interest
  const sizes = ['large', '', '', '', 'tall', '', ''];
  const count  = gallery.placeholderCount || 7;
  for (let i = 0; i < count; i++) {
    const size = sizes[i] || '';
    const cls  = ['gallery-item', 'placeholder-img', size].filter(Boolean).join(' ');
    galleryGrid.appendChild(el('div', cls, `
      <div class="gallery-overlay"><span>📸 Aggiungi foto</span></div>
    `));
  }
}

// ── Roadmap ───────────────────────────────────────────────────────────────
const { roadmap } = CONFIG;
document.getElementById('roadmap-header').innerHTML = sectionHeader(roadmap.tag, roadmap.title, roadmap.subtitle);

const tabsContainer   = document.getElementById('roadmap-tabs');
const panelsContainer = document.getElementById('roadmap-panels');
const sides = ['left', 'right'];

roadmap.years.forEach(({ year, status, tournaments }, yearIndex) => {
  const panelId = `roadmap-panel-${yearIndex}`;

  // ── Tab button ──
  const tab = el('button', `roadmap-tab${status === 'future' ? ' future' : ''}${yearIndex === 0 ? ' active' : ''}`);
  tab.textContent = year;
  tab.dataset.panel = panelId;
  tabsContainer.appendChild(tab);

  // ── Panel with zigzag timeline ──
  const panel = el('div', `roadmap-panel${yearIndex === 0 ? ' visible' : ''}`);
  panel.id = panelId;

  const timeline = el('div', 'timeline');

  tournaments.forEach(({ name, location, result, image }, i) => {
    const side = sides[i % 2];
    timeline.appendChild(el('div', `timeline-item ${side}`, `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        ${image ? `<img class="tournament-img" src="${image}" alt="${name}" loading="lazy" />` : ''}
        ${location ? `<span class="timeline-year">📍 ${location}</span>` : ''}
        <h3>${name}</h3>
        ${result ? `<span class="tournament-result">${result}</span>` : ''}
      </div>
    `));
  });

  panel.appendChild(timeline);
  panelsContainer.appendChild(panel);
});

// ── Tab switching ──
tabsContainer.addEventListener('click', (e) => {
  const tab = e.target.closest('.roadmap-tab');
  if (!tab) return;

  tabsContainer.querySelectorAll('.roadmap-tab').forEach(t => t.classList.remove('active'));
  panelsContainer.querySelectorAll('.roadmap-panel').forEach(p => p.classList.remove('visible'));

  tab.classList.add('active');
  document.getElementById(tab.dataset.panel).classList.add('visible');
});

// ── Fans ──────────────────────────────────────────────────────────────────
const { fans } = CONFIG;
document.getElementById('fans-header').innerHTML = sectionHeader(fans.tag, fans.title, fans.subtitle);

const fansGrid = document.getElementById('fans-grid');
fans.fans.forEach(({ name, title, bio, photo }) => {
  const photoHTML = photo
    ? `<img class="player-photo" src="${photo}" alt="${name}" loading="lazy" />`
    : `<div class="player-photo placeholder-photo"><span>⭐</span></div>`;

  fansGrid.appendChild(el('div', 'player-card', `
    ${photoHTML}
    <div class="player-info">
      <span class="player-number">${title}</span>
      <h3 class="player-name">${name}</h3>
      <p class="player-bio">${bio}</p>
    </div>
  `));
});

// ── Merch ─────────────────────────────────────────────────────────────────
const { merch } = CONFIG;
document.getElementById('merch-header').innerHTML = sectionHeader(merch.tag, merch.title, merch.subtitle);
document.getElementById('merch-note').textContent  = merch.note;

const merchGrid = document.getElementById('merch-grid');
merch.products.forEach(({ name, desc, price, badge, badgeStyle, image }) => {
  const badgeHTML = badge
    ? `<span class="merch-badge${badgeStyle === 'new' ? ' new' : ''}">${badge}</span>`
    : '';
  const imgHTML = image
    ? `<img src="${image}" alt="${name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;" />`
    : '';

  merchGrid.appendChild(el('div', 'merch-card', `
    <div class="merch-img placeholder-img">
      ${imgHTML}${badgeHTML}
    </div>
    <div class="merch-info">
      <h3 class="merch-name">${name}</h3>
      <p class="merch-desc">${desc}</p>
      <span class="merch-price">${price}</span>
      <button class="btn btn-primary btn-sm" disabled>Coming Soon</button>
    </div>
  `));
});

// ── Holy Board ────────────────────────────────────────────────────────────
const { board } = CONFIG;
document.getElementById('board-header').innerHTML = sectionHeader(board.tag, board.title, board.subtitle);

const boardGrid = document.getElementById('board-grid');
board.members.forEach(({ name, role, bio, photo }) => {
  const photoHTML = photo
    ? `<img class="board-photo" src="${photo}" alt="${name}" loading="lazy" />`
    : `<div class="board-photo board-photo-placeholder">👤</div>`;

  boardGrid.appendChild(el('div', 'board-card', `
    ${photoHTML}
    <h3 class="board-name">${name}</h3>
    <span class="board-role">${role}</span>
    <p class="board-bio">${bio}</p>
  `));
});

// ── Contacts ──────────────────────────────────────────────────────────────
const { contacts } = CONFIG;
document.getElementById('contacts-header').innerHTML = sectionHeader(contacts.tag, contacts.title, contacts.subtitle);

const contactInfo = document.getElementById('contact-info');
contactInfo.innerHTML = `
  <div class="contact-item">
    <div class="contact-icon">📧</div>
    <div>
      <h4>Email</h4>
      <a href="mailto:${contacts.email}">${contacts.email}</a>
    </div>
  </div>
  <div class="contact-item">
    <div class="contact-icon">📍</div>
    <div>
      <h4>Dove giochiamo</h4>
      <p>${contacts.location}</p>
    </div>
  </div>
  <div class="contact-item">
    <div class="contact-icon">📱</div>
    <div>
      <h4>Telefono</h4>
      <a href="tel:${contacts.phone.replace(/\s/g, '')}">${contacts.phone}</a>
    </div>
  </div>
`;

// Social buttons
const socialsDiv = el('div', 'contact-socials');
Object.entries(contacts.socials).forEach(([name, href]) => {
  if (!href || !ICONS[name]) return;
  const a = el('a', 'social-btn');
  a.href = href;
  a.setAttribute('aria-label', name.charAt(0).toUpperCase() + name.slice(1));
  a.innerHTML = ICONS[name];
  socialsDiv.appendChild(a);
});
contactInfo.appendChild(socialsDiv);

// ── Footer ────────────────────────────────────────────────────────────────
document.getElementById('footer-logo').textContent = `🏉 ${CONFIG.site.teamName}`;
document.getElementById('footer-copy').textContent = `© ${new Date().getFullYear()} ${CONFIG.site.teamName} Rugby Team. Tutti i diritti riservati.`;

const footerLinks = document.getElementById('footer-links');
[['Valori','#values'],['Team','#team'],['Merch','#merch'],['Contatti','#contacts']].forEach(([label, href]) => {
  const a = el('a');
  a.href = href;
  a.textContent = label;
  footerLinks.appendChild(a);
});

// ═══════════════════════════════════════════════
// INTERACTIVITY
// ═══════════════════════════════════════════════

// ── Navbar scroll effect ──────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Hamburger menu ────────────────────────────
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── Scroll-reveal ─────────────────────────────
const revealTargets = [
  '.value-card', '.player-card', '.gallery-item',
  '.timeline-item', '.merch-card', '.contact-item',
  '.contact-form', '.section-header',
];
document.querySelectorAll(revealTargets.join(',')).forEach(el => {
  el.setAttribute('data-reveal', '');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = [...entry.target.parentElement.querySelectorAll('[data-reveal]:not(.visible)')];
    const delay    = siblings.indexOf(entry.target) * 80;
    setTimeout(() => entry.target.classList.add('visible'), delay);
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// ── Active nav highlighting ───────────────────
const allSections  = document.querySelectorAll('section[id]');
const allNavAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    allNavAnchors.forEach(a => a.classList.remove('active'));
    const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
    if (active) active.classList.add('active');
  });
}, { threshold: 0.4 }).observe(...allSections);

allSections.forEach(s => {
  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      allNavAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    });
  }, { threshold: 0.4 }).observe(s);
});

// ── Contact form ──────────────────────────────
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const feedback = document.getElementById('form-feedback');
  const btn      = e.target.querySelector('button[type="submit"]');
  btn.disabled   = true;
  btn.textContent = 'Invio in corso…';

  // Replace the setTimeout below with a real fetch() to Formspree or your backend
  setTimeout(() => {
    feedback.textContent = '✓ Messaggio inviato! Ti risponderemo presto.';
    e.target.reset();
    btn.disabled    = false;
    btn.textContent = 'Invia messaggio';
  }, 1200);
});
