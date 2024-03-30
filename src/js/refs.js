export const refs = {
  // Linked stylesheets by color scheme
  lightStyles: document.querySelector(
    'link[rel=stylesheet][media*=prefers-color-scheme][media*=light]'
  ),
  darkStyles: document.querySelector(
    'link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]'
  ),

  // Color scheme switcher
  schemeSwitcherRadios: document.querySelectorAll('.scheme-switcher-radio'),
  schemeSwitcherDropdown: document.querySelector('.scheme-switcher-dropdown'),
  schemeSwitcherCheckbox: document.querySelector(
    '.scheme-switcher-menu-checkbox'
  ),
  schemeSwitcherCheckboxLabel: document.querySelector('.menu-label-scheme'),

  // Language switcher
  langSwitcherRadios: document.querySelectorAll('.language-switcher-radio'),
  langSwitcherDropdown: document.querySelector('.language-switcher-dropdown'),
  langSwitcherCheckbox: document.querySelector('.language-menu-checkbox'),
  langSwitcherCheckboxLabel: document.querySelector('.menu-label-language'),
  langSwitcherMenuCaption: document.querySelector('.language-menu-caption'),

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
  // footer: document.querySelector('.footer'),
  pagination: document.querySelector('.pagination'),
  // bullets: document.querySelectorAll('.pagination-bullet'),
  titlesInjectionTarget: document.querySelector('.mobile-headings'),

  // Contact form
  textArea: document.querySelector('.contact-form-message'),
};
