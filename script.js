/* ═══════════════════════════════════════════════
   I Discepoli – script.js
   ═══════════════════════════════════════════════ */

// ── SVG icons ─────────────────────────────────────────────────────────────
const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
  whatsapp:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  facebook:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
};

// ═══════════════════════════════════════════════
// LANGUAGE
// ═══════════════════════════════════════════════
let lang = localStorage.getItem('discepoli-lang') || 'it';

// t() — resolves a field to the current language string
function t(field) {
  if (field === null || field === undefined) return '';
  if (typeof field === 'object') return field[lang] ?? field.it ?? '';
  return field;
}

// ── Helpers ────────────────────────────────────────────────────────────────
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function clear(id) {
  document.getElementById(id).innerHTML = '';
}

function sectionHeader(tag, title, subtitle) {
  return `
    <span class="tag">${t(tag)}</span>
    <h2 class="section-title">${t(title)}</h2>
    ${subtitle ? `<p class="section-subtitle">${t(subtitle)}</p>` : ''}
  `;
}

// ═══════════════════════════════════════════════
// ONE-TIME SETUP (runs once, not on lang switch)
// ═══════════════════════════════════════════════

// Accent color
if (CONFIG.site.accentColor) {
  document.documentElement.style.setProperty('--green', CONFIG.site.accentColor);
}

// Hero background image
if (CONFIG.hero.image) {
  const bg = document.querySelector('.hero-bg');
  bg.style.backgroundImage = `url('${CONFIG.hero.image}')`;
  bg.classList.add('has-photo');
}

// Gallery (photos don't change with language — only alt text does, minor)
(function renderGallery() {
  const { gallery } = CONFIG;
  const driveBtn = gallery.driveUrl
    ? `<a href="${gallery.driveUrl}" target="_blank" rel="noopener" class="btn btn-outline gallery-drive-btn">${t(CONFIG.ui.galleryDriveLink)}</a>`
    : '';
  document.getElementById('gallery-header').innerHTML =
    sectionHeader(gallery.tag, gallery.title, gallery.subtitle) + driveBtn;

  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = '';

  if (gallery.photos && gallery.photos.length > 0) {
    gallery.photos.forEach(({ src, alt, size }) => {
      const cls  = ['gallery-item', size || ''].filter(Boolean).join(' ');
      const item = el('div', cls);
      const img  = document.createElement('img');
      img.src    = src;
      img.alt    = t(alt) || '';
      img.loading = 'lazy';
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
      item.appendChild(img);
      item.appendChild(el('div', 'gallery-overlay', `<span>${t(alt) || ''}</span>`));
      grid.appendChild(item);
    });
  } else {
    const sizes = ['large', '', '', '', 'tall', '', ''];
    for (let i = 0; i < (gallery.placeholderCount || 7); i++) {
      const cls = ['gallery-item', 'placeholder-img', sizes[i] || ''].filter(Boolean).join(' ');
      grid.appendChild(el('div', cls, `<div class="gallery-overlay"><span>${t(CONFIG.ui.addPhoto)}</span></div>`));
    }
  }
})();


// ═══════════════════════════════════════════════
// RENDER FUNCTIONS (re-run on language switch)
// ═══════════════════════════════════════════════

function renderNav() {
  const { ui, site } = CONFIG;
  document.getElementById('nav-team-name').textContent = site.teamName;

  const navLinks = document.getElementById('nav-links');
  navLinks.innerHTML = '';

  const sections = [
    { key: 'values',   href: '#values'   },
    { key: 'team',     href: '#team'     },
    { key: 'gallery',  href: '#gallery'  },
    { key: 'roadmap',  href: '#roadmap'  },
    { key: 'merch',    href: '#merch'    },
    { key: 'fans',     href: '#fans'     },
    { key: 'sponsors', href: '#sponsors' },
    { key: 'board',    href: '#board'    },
    { key: 'contacts', href: '#contacts', cta: true },
  ];

  sections.forEach(({ key, href, cta }) => {
    const li = el('li');
    const a  = el('a');
    a.href = href;
    a.textContent = t(ui.nav[key]);
    if (cta) a.className = 'nav-cta';
    li.appendChild(a);
    navLinks.appendChild(li);
  });

  // Re-attach hamburger close listeners
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    });
  });
}

let _typewriterTimer = null;

function startTypewriter(words, el) {
  if (_typewriterTimer) { clearTimeout(_typewriterTimer); _typewriterTimer = null; }
  const typeSpeed        = 80;
  const deleteSpeed      = 40;
  const pauseAfterType   = 1800;
  const pauseAfterDelete = 400;
  let wordIndex = 0;
  let charIndex = 0;
  let deleting  = false;

  function tick() {
    const current = words[wordIndex];
    if (deleting) {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting   = false;
        wordIndex  = (wordIndex + 1) % words.length;
        _typewriterTimer = setTimeout(tick, pauseAfterDelete);
      } else {
        _typewriterTimer = setTimeout(tick, deleteSpeed);
      }
    } else {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        _typewriterTimer = setTimeout(tick, pauseAfterType);
      } else {
        _typewriterTimer = setTimeout(tick, typeSpeed);
      }
    }
  }
  tick();
}

function renderHero() {
  const { site, ui } = CONFIG;
  document.title = site.title;
  document.getElementById('hero-eyebrow').textContent = t(site.eyebrow);
  document.getElementById('hero-title').textContent   = site.teamName;
  document.getElementById('hero-dynamic-prefix').textContent = t(site.dynamicDescription.prefix);
  startTypewriter(site.dynamicDescription.words.map(w => t(w)), document.getElementById('hero-dynamic-word'));
  document.getElementById('hero-actions').innerHTML = `
    <a href="#team"  class="btn btn-primary">${t(ui.hero.primary)}</a>
    <a href="#merch" class="btn btn-outline">${t(ui.hero.secondary)}</a>
  `;
}

function renderValues() {
  const { values } = CONFIG;
  document.getElementById('values-header').innerHTML = sectionHeader(values.tag, values.title, values.subtitle);
  const grid = document.getElementById('values-grid');
  grid.innerHTML = '';
  values.items.forEach(({ icon, title, text }) => {
    grid.appendChild(el('div', 'value-card', `
      <div class="value-icon">${icon}</div>
      <h3>${t(title)}</h3>
      <p>${t(text)}</p>
    `));
  });
}

function renderTeam() {
  const { team } = CONFIG;
  document.getElementById('team-header').innerHTML = sectionHeader(team.tag, team.title, team.subtitle);
  const grid = document.getElementById('team-grid');
  grid.innerHTML = '';
  team.players.forEach(({ number, name, role, bio, photo }) => {
    const photoHTML = photo
      ? `<img class="player-photo" src="${photo}" alt="${name}" loading="lazy" />`
      : `<div class="player-photo placeholder-photo"><span>👤</span></div>`;
    grid.appendChild(el('div', 'player-card', `
      ${photoHTML}
      <div class="player-info">
        <span class="player-number">#${number}</span>
        <h3 class="player-name">${name}</h3>
        <span class="player-role">${t(role)}</span>
        <p class="player-bio">${t(bio)}</p>
      </div>
    `));
  });
}

function renderRoadmap() {
  const { roadmap } = CONFIG;
  document.getElementById('roadmap-header').innerHTML = sectionHeader(roadmap.tag, roadmap.title, roadmap.subtitle);

  const tabsContainer   = document.getElementById('roadmap-tabs');
  const panelsContainer = document.getElementById('roadmap-panels');
  tabsContainer.innerHTML   = '';
  panelsContainer.innerHTML = '';

  const sides = ['left', 'right'];
  const defaultIndex = roadmap.years.findIndex(y => y.status === 'active');

  roadmap.years.forEach(({ year, status, tournaments }, yearIndex) => {
    const panelId  = `roadmap-panel-${yearIndex}`;
    const isDefault = yearIndex === (defaultIndex >= 0 ? defaultIndex : 0);

    const tab = el('button', `roadmap-tab${status === 'future' ? ' future' : ''}${isDefault ? ' active' : ''}`);
    tab.textContent  = year;
    tab.dataset.panel = panelId;
    tabsContainer.appendChild(tab);

    const panel    = el('div', `roadmap-panel${isDefault ? ' visible' : ''}`);
    panel.id       = panelId;
    const timeline = el('div', 'timeline');

    tournaments.forEach(({ name, date, location, result, image, driveUrl }, i) => {
      timeline.appendChild(el('div', `timeline-item ${sides[i % 2]}`, `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          ${image ? `<img class="tournament-img" src="${image}" alt="${t(name)}" loading="lazy" />` : ''}
          <div class="tournament-meta">
            ${date     ? `<span class="tournament-date">📅 ${date}</span>`         : ''}
            ${location ? `<span class="tournament-location">📍 ${t(location)}</span>` : ''}
          </div>
          <h3>${t(name)}</h3>
          ${result   ? `<span class="tournament-result">${t(result)}</span>` : ''}
          ${driveUrl ? `<a class="tournament-drive-link" href="${driveUrl}" target="_blank" rel="noopener">🖼 Foto</a>` : ''}
        </div>
      `));
    });

    panel.appendChild(timeline);
    panelsContainer.appendChild(panel);
  });

  tabsContainer.addEventListener('click', (e) => {
    const tab = e.target.closest('.roadmap-tab');
    if (!tab) return;
    tabsContainer.querySelectorAll('.roadmap-tab').forEach(t => t.classList.remove('active'));
    panelsContainer.querySelectorAll('.roadmap-panel').forEach(p => p.classList.remove('visible'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.panel).classList.add('visible');
  });
}

function renderFans() {
  const { fans } = CONFIG;
  document.getElementById('fans-header').innerHTML = sectionHeader(fans.tag, fans.title, fans.subtitle);
  const grid = document.getElementById('fans-grid');
  grid.innerHTML = '';
  fans.fans.forEach(({ name, title, bio, photo }) => {
    const photoHTML = photo
      ? `<img class="player-photo" src="${photo}" alt="${name}" loading="lazy" />`
      : `<div class="player-photo placeholder-photo"><span>⭐</span></div>`;
    grid.appendChild(el('div', 'player-card', `
      ${photoHTML}
      <div class="player-info">
        <span class="player-number">${t(title)}</span>
        <h3 class="player-name">${name}</h3>
        <p class="player-bio">${t(bio)}</p>
      </div>
    `));
  });
}

function renderSponsors() {
  const { sponsors } = CONFIG;
  document.getElementById('sponsors-header').innerHTML = sectionHeader(sponsors.tag, sponsors.title, sponsors.subtitle);
  const grid = document.getElementById('sponsors-grid');
  grid.innerHTML = '';
  sponsors.items.forEach(({ name, logo, url }) => {
    const logoHTML = logo
      ? `<img class="sponsor-logo" src="${logo}" alt="${name}" loading="lazy" />`
      : `<div class="sponsor-logo-placeholder">${name.charAt(0).toUpperCase()}</div>`;
    const card = el('a', 'sponsor-card', `${logoHTML}<span class="sponsor-name">${name}</span>`);
    card.href   = url;
    card.target = '_blank';
    card.rel    = 'noopener';
    grid.appendChild(card);
  });
}

function renderMerch() {
  const { merch, ui } = CONFIG;
  document.getElementById('merch-header').innerHTML = sectionHeader(merch.tag, merch.title, merch.subtitle);
const grid = document.getElementById('merch-grid');
  grid.innerHTML = '';
  merch.products.forEach(({ name, desc, price, badge, badgeStyle, images, sizes, availability }) => {
    const isOut     = availability === 'out';
    const isOnSight = availability === 'on-sight';
    const outBadge  = isOut ? `<span class="merch-badge out">${t(ui.availabilityOut)}</span>` : '';
    const badgeHTML = badge ? `<span class="merch-badge${badgeStyle === 'new' ? ' new' : ''}">${t(badge)}</span>` : '';
    const firstImg  = images && images.length > 0 ? images[0] : null;
    const imgHTML   = firstImg ? `<img src="${firstImg}" alt="${t(name)}" loading="lazy" style="width:100%;height:100%;object-fit:cover;" />` : '';
    const priceHTML = isOnSight
      ? `<span class="merch-availability on-sight">${t(ui.availabilityOnSight)}</span>`
      : `<span class="merch-price">${price}</span>`;
    const btnDisabled = isOut || isOnSight;
    const card = el('div', 'merch-card', `
      <div class="merch-img placeholder-img">${imgHTML}${outBadge}${badgeHTML}</div>
      <div class="merch-info">
        <h3 class="merch-name">${t(name)}</h3>
        <p class="merch-desc">${t(desc)}</p>
        ${priceHTML}
        <button class="btn btn-primary btn-sm merch-buy-btn"${btnDisabled ? ' disabled' : ''}>${t(ui.buy)}</button>
      </div>
    `);
    if (!btnDisabled) {
      card.querySelector('.merch-buy-btn').addEventListener('click', () => {
        openOrderModal(t(name), sizes || [], images || []);
      });
    }
    grid.appendChild(card);
  });
}

function renderBoard() {
  const { board } = CONFIG;
  document.getElementById('board-header').innerHTML = sectionHeader(board.tag, board.title, board.subtitle);
  const grid = document.getElementById('board-grid');
  grid.innerHTML = '';
  board.members.forEach(({ name, role, bio, photo }) => {
    const photoHTML = photo
      ? `<img class="board-photo" src="${photo}" alt="${name}" loading="lazy" />`
      : `<div class="board-photo board-photo-placeholder">👤</div>`;
    grid.appendChild(el('div', 'board-card', `
      ${photoHTML}
      <h3 class="board-name">${name}</h3>
      <span class="board-role">${t(role)}</span>
      <p class="board-bio">${t(bio)}</p>
    `));
  });
}

function renderContacts() {
  const { contacts, ui } = CONFIG;
  document.getElementById('contacts-header').innerHTML = sectionHeader(contacts.tag, contacts.title, contacts.subtitle);

  function socialHandle(url) {
    return url ? url.replace(/\/$/, '').split('/').pop() : '';
  }

  const items = [
    { icon: '📧', label: t(ui.contact.emailLabel), html: `<a href="mailto:${contacts.email}">${contacts.email}</a>` },
  ];

  if (contacts.socials.instagram) {
    items.push({ icon: '📸', label: t(ui.contact.instagramLabel), html: `<a href="${contacts.socials.instagram}" target="_blank" rel="noopener">@${socialHandle(contacts.socials.instagram)}</a>` });
  }
  if (contacts.socials.facebook) {
    items.push({ icon: '👥', label: t(ui.contact.facebookLabel), html: `<a href="${contacts.socials.facebook}" target="_blank" rel="noopener">${socialHandle(contacts.socials.facebook)}</a>` });
  }

  const contactInfo = document.getElementById('contact-info');
  contactInfo.innerHTML = items.map(({ icon, label, html }) => `
    <div class="contact-item">
      <div class="contact-icon">${icon}</div>
      <div><h4>${label}</h4>${html}</div>
    </div>
  `).join('');

}

function renderFooter() {
  const { site, ui } = CONFIG;
  document.getElementById('footer-logo').textContent = `🏉 ${site.teamName}`;
  document.getElementById('footer-copy').textContent =
    `© ${new Date().getFullYear()} ${site.teamName} Rugby Team. ${t(ui.footerCopy)}`;

  const footerLinks = document.getElementById('footer-links');
  footerLinks.innerHTML = '';
  [
    [t(ui.nav.values),   '#values'  ],
    [t(ui.nav.team),     '#team'    ],
    [t(ui.nav.merch),    '#merch'   ],
    [t(ui.nav.contacts), '#contacts'],
  ].forEach(([label, href]) => {
    const a = el('a');
    a.href = href;
    a.textContent = label;
    footerLinks.appendChild(a);
  });
}

// ── Render everything ─────────────────────────────────────────────────────
function renderAll() {
  renderNav();
  renderHero();
  renderValues();
  renderTeam();
  renderRoadmap();
  renderFans();
  renderSponsors();
  renderMerch();
  renderBoard();
  renderContacts();
  renderFooter();
  initReveal();
}

renderAll();

// ═══════════════════════════════════════════════
// LIGHTBOX
// ═══════════════════════════════════════════════

const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

// Global image click → lightbox
// Covers gallery, merch, players, fans, board, tournaments, modal images
document.body.addEventListener('click', (e) => {
  const img = e.target.closest('img');
  if (img && img.src) {
    if (img.closest('#lightbox')) return;
    if (img.classList.contains('modal-img-thumb')) return;
    if (img.classList.contains('logo-icon')) return;
    if (img.classList.contains('sponsor-logo')) return;
    openLightbox(img.src, img.alt);
    return;
  }
  // Gallery item click may land on the overlay div instead of the img
  const galleryItem = e.target.closest('.gallery-item');
  if (galleryItem) {
    const galleryImg = galleryItem.querySelector('img');
    if (galleryImg && galleryImg.src) openLightbox(galleryImg.src, galleryImg.alt);
  }
});

// ═══════════════════════════════════════════════
// ORDER MODAL
// ═══════════════════════════════════════════════

const orderModal = document.getElementById('order-modal');
const orderForm  = document.getElementById('order-form');
const modalClose = document.getElementById('modal-close');

function openOrderModal(productName, sizes, images) {
  const { ui, merch } = CONFIG;
  const ord = ui.order;

  // Image strip
  const modalImages = document.getElementById('modal-images');
  const mainImg     = document.getElementById('modal-img-main');
  const thumbsEl    = document.getElementById('modal-img-thumbs');
  thumbsEl.innerHTML = '';
  if (images && images.length > 0) {
    mainImg.src = images[0];
    mainImg.alt = productName;
    modalImages.style.display = '';
    if (images.length > 1) {
      images.forEach((src, i) => {
        const thumb = document.createElement('img');
        thumb.src       = src;
        thumb.className = 'modal-img-thumb' + (i === 0 ? ' active' : '');
        thumb.addEventListener('click', () => {
          mainImg.src = src;
          thumbsEl.querySelectorAll('.modal-img-thumb').forEach(th => th.classList.remove('active'));
          thumb.classList.add('active');
        });
        thumbsEl.appendChild(thumb);
      });
    }
  } else {
    modalImages.style.display = 'none';
  }

  // Labels
  document.getElementById('modal-eyebrow').textContent    = t(ord.eyebrow);
  document.getElementById('modal-title').textContent      = productName;
  document.getElementById('order-product').value          = productName;
  document.getElementById('order-subject').value          = 'Nuovo ordine: ' + productName;
  document.getElementById('label-order-name').textContent = t(ui.form.name);
  document.getElementById('label-order-email').textContent = t(ord.email);
  document.getElementById('label-order-phone').textContent = t(ord.phone);
  document.getElementById('label-order-size').textContent  = t(ord.size);
  document.getElementById('label-order-qty').textContent   = t(ord.qty);
  document.getElementById('label-order-msg').textContent   = t(ord.msg);
  document.getElementById('label-order-payment').textContent = t(ord.payment);
  document.getElementById('label-paypal').textContent      = t(ord.paymentPaypal);
  document.getElementById('label-iban').textContent        = t(ord.paymentIban);
  document.getElementById('order-next').textContent        = t(ord.next);
  document.getElementById('order-back').textContent        = t(ord.back);
  document.getElementById('order-submit').textContent      = t(ord.submit);
  document.getElementById('order-name').placeholder        = t(ui.form.namePh);
  document.getElementById('order-email').placeholder       = t(ui.form.emailPh);
  document.getElementById('order-feedback').textContent    = '';

  // Sizes
  const sizeGroup  = document.getElementById('size-group');
  const sizeSelect = document.getElementById('order-size');
  sizeSelect.innerHTML = '';
  if (sizes && sizes.length > 0) {
    sizes.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s; opt.textContent = s;
      sizeSelect.appendChild(opt);
    });
    sizeGroup.style.display = '';
  } else {
    sizeGroup.style.display = 'none';
  }

  // Reset to step 1
  document.getElementById('modal-step-1').style.display = '';
  document.getElementById('modal-step-2').style.display = 'none';
  orderForm.reset();

  orderModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('order-name').focus();
}

function closeOrderModal() {
  orderModal.classList.remove('open');
  document.body.style.overflow = '';
}

function renderPaymentInstructions(method) {
  const { merch, ui } = CONFIG;
  const ord = ui.order;
  const el  = document.getElementById('payment-instructions');
  if (method === 'paypal') {
    el.innerHTML = `
      <h4>${t(ord.paymentDetails)}</h4>
      <a class="paypal-link" href="${merch.payment.paypal}" target="_blank" rel="noopener">${t(ord.paypalBtn)}</a>
    `;
  } else {
    const p = merch.payment.iban;
    el.innerHTML = `
      <h4>${t(ord.paymentDetails)}</h4>
      <div class="iban-row"><span class="iban-label">${t(ord.ibanHolder)}</span><span>${p.holder}</span></div>
      <div class="iban-row"><span class="iban-label">${t(ord.ibanBank)}</span><span>${p.bank}</span></div>
      <div class="iban-row"><span class="iban-label">${t(ord.ibanCode)}</span><span>${p.iban}</span></div>
    `;
  }
}

// Step navigation
document.getElementById('order-next').addEventListener('click', () => {
  if (!orderForm.reportValidity()) return;
  const { ui } = CONFIG;
  const ord     = ui.order;
  const data    = Object.fromEntries(new FormData(orderForm));
  const method  = data.payment_method;
  const size    = data.size;
  const qty     = data.quantity;

  // Update _replyto from email field
  document.getElementById('order-replyto').value = data.email || '';

  // Build summary
  const summaryEl = document.getElementById('order-summary');
  const rows = [
    [t(ord.summaryProduct), data.product],
    size ? [t(ord.summarySize), size] : null,
    [t(ord.summaryQty), qty],
    [t(ord.summaryPayment), method === 'paypal' ? t(ord.paymentPaypal) : t(ord.paymentIban)],
  ].filter(Boolean);
  summaryEl.innerHTML = `<h4>${t(ord.summary)}</h4>` +
    rows.map(([label, val]) => `<div class="summary-row"><span class="summary-label">${label}</span><span>${val}</span></div>`).join('');

  renderPaymentInstructions(method);

  document.getElementById('modal-step-1').style.display = 'none';
  document.getElementById('modal-step-2').style.display = '';
});

document.getElementById('order-back').addEventListener('click', () => {
  document.getElementById('modal-step-1').style.display = '';
  document.getElementById('modal-step-2').style.display = 'none';
});

// Submit
document.getElementById('order-submit').addEventListener('click', async () => {
  const { merch, ui } = CONFIG;
  const ord      = ui.order;
  const btn      = document.getElementById('order-submit');
  const feedback = document.getElementById('order-feedback');

  btn.disabled    = true;
  btn.textContent = t(ord.sending);

  try {
    const res  = await fetch(merch.orderEndpoint, {
      method:  'POST',
      headers: { 'Accept': 'application/json' },
      body:    new FormData(orderForm),
    });
    const json = await res.json();

    if (json.success === 'true') {
      const method = orderForm.querySelector('input[name="payment_method"]:checked')?.value;
      document.getElementById('order-summary').innerHTML =
        `<p style="color:var(--green);font-weight:600;margin-bottom:12px">${t(ord.success)}</p>` +
        `<p style="font-size:0.88rem;color:var(--text-muted)">${t(ord.confirmEmail)}</p>`;
      renderPaymentInstructions(method);
      document.querySelector('.modal-step2-actions').style.display = 'none';
      setTimeout(closeOrderModal, 4000);
    } else {
      throw new Error(json.message || '');
    }
  } catch (err) {
    feedback.style.color = '#e05555';
    feedback.textContent = t(ui.order.error) + (err.message ? ` (${err.message})` : '');
  } finally {
    btn.disabled    = false;
    btn.textContent = t(ord.submit);
  }
});

modalClose.addEventListener('click', closeOrderModal);
orderModal.addEventListener('click', (e) => { if (e.target === orderModal) closeOrderModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeOrderModal(); });

// ═══════════════════════════════════════════════
// LANGUAGE TOGGLE
// ═══════════════════════════════════════════════

// Inject toggle button into navbar
const langBtn = el('button', 'lang-toggle', lang === 'it' ? 'EN' : 'IT');
langBtn.setAttribute('aria-label', 'Switch language');
document.querySelector('.nav-inner').appendChild(langBtn);

langBtn.addEventListener('click', () => {
  lang = lang === 'it' ? 'en' : 'it';
  localStorage.setItem('discepoli-lang', lang);
  langBtn.textContent = lang === 'it' ? 'EN' : 'IT';
  renderAll();
});

// ═══════════════════════════════════════════════
// INTERACTIVITY
// ═══════════════════════════════════════════════

// ── Navbar scroll effect ──────────────────────
const navbar = document.getElementById('navbar');
function updateNavbar() {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}
window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar(); // run immediately in case page loads already scrolled

// ── Hamburger menu ────────────────────────────
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  const navLinks = document.getElementById('nav-links');
  const isOpen   = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// ── Scroll-reveal ─────────────────────────────
function initReveal() {
  const targets = [
    '.value-card', '.player-card', '.gallery-item',
    '.timeline-item', '.merch-card', '.contact-item',
    '.contact-form', '.section-header', '.board-card',
  ];
  document.querySelectorAll(targets.join(',')).forEach(node => {
    node.setAttribute('data-reveal', '');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const siblings = [...entry.target.parentElement.querySelectorAll('[data-reveal]:not(.visible)')];
      setTimeout(() => entry.target.classList.add('visible'), siblings.indexOf(entry.target) * 80);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(node => observer.observe(node));
}

// ── Active nav highlighting ───────────────────
document.querySelectorAll('section[id]').forEach(section => {
  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    });
  }, { threshold: 0.4 }).observe(section);
});
