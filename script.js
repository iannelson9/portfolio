/**
 * Ian Nelson Portfolio - Hugo Noir Scripts
 * Controls: Light/Dark theme toggle & Image Lightbox Modal
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initLightbox();
});

/* ==========================================================================
   1. Light / Dark Mode Toggle (Hugo Noir Style)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('ian_portfolio_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    toggleBtn.innerHTML = '&#9790;'; // Moon icon for light mode
    toggleBtn.setAttribute('title', 'Switch to Dark Mode');
  } else {
    toggleBtn.innerHTML = '&#9728;'; // Sun icon for dark mode
    toggleBtn.setAttribute('title', 'Switch to Light Mode');
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('ian_portfolio_theme', isLight ? 'light' : 'dark');
    toggleBtn.innerHTML = isLight ? '&#9790;' : '&#9728;';
    toggleBtn.setAttribute('title', isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode');
  });
}

/* ==========================================================================
   2. Image Lightbox for CAD & FEA Visuals
   ========================================================================== */
function initLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  const modalImg = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const triggers = document.querySelectorAll('.lightbox-trigger');

  if (!overlay || !modalImg || !caption) return;

  function openLightbox(src, captionText) {
    modalImg.src = src;
    caption.textContent = captionText || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
      modalImg.src = '';
    }, 150);
  }

  triggers.forEach(img => {
    img.addEventListener('click', () => {
      const src = img.getAttribute('src');
      const text = img.getAttribute('data-caption') || img.getAttribute('alt') || '';
      openLightbox(src, text);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.classList.contains('lightbox-img-box')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/* ==========================================================================
   3. Shop Gallery "Show More" Toggle
   ========================================================================== */
function initGalleryToggle() {
  const toggleBtn = document.getElementById('toggleGalleryBtn');
  const extraItems = document.querySelectorAll('.gallery-extra');
  if (!toggleBtn || extraItems.length === 0) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = extraItems[0].style.display === 'none' || extraItems[0].style.display === '';
    extraItems.forEach(item => {
      item.style.display = isHidden ? 'flex' : 'none';
    });
    toggleBtn.textContent = isHidden ? 'Show Fewer Photos \u2191' : 'View More Action Photos \u2193';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initGalleryToggle();
});
