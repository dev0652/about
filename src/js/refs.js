export const refs = {
  // Color schemes
  lightStyles: document.querySelectorAll(
    'link[rel=stylesheet][media*=prefers-color-scheme][media*=light]'
  ),
  darkStyles: document.querySelectorAll(
    'link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]'
  ),
  switcherRadios: document.querySelectorAll('.switcher-radio'),

  // Header
  header: document.querySelector('.header'),
  headerNav: document.querySelector('.header-nav'),
  headerNavLinks: document.querySelectorAll('.header-nav-link'),

  // Sections
  main: document.querySelector('main'),
  sections: document.querySelectorAll('.section'),
  sectionTitles: document.querySelectorAll('.section-title'),

  // Projects
  gallery: document.querySelector('#gallery'),
  galleryViewSwitcher: document.querySelector('.projects-view-switch'),

  // Sliding pages in mobile view
  footer: document.querySelector('.footer'),
  pagination: document.querySelector('.pagination'),
  // bullets: document.querySelectorAll('.pagination-bullet'),
  titlesInjectionTarget: document.querySelector('.mobile-headings'),

  // Contact form
  textArea: document.querySelector('.contact-form-message'),
};
