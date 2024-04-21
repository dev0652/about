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
  schemeSwitcherDropdown: document.querySelector('.dropdown-scheme'),
  schemeSwitcherCheckbox: document.querySelector(
    '.scheme-switcher-menu-checkbox'
  ),
  schemeSwitcherCheckboxLabel: document.querySelector('.menu-label-scheme'),

  // Language switcher
  languageSwitcherRadios: document.querySelectorAll('.language-switcher-radio'),
  languageSwitcherDropdown: document.querySelector('.dropdown-language'),
  languageSwitcherCheckbox: document.querySelector('.language-menu-checkbox'),
  languageSwitcherCheckboxLabel: document.querySelector('.menu-label-language'),
  languageSwitcherMenuCaption: document.querySelector('.language-menu-caption'),

  // Fullscreen mode switcher

  fullscreenSwitcherDropdown: document.querySelector('.dropdown-fullscreen'),
  fullscreenSwitcherCheckbox: document.querySelector(
    '.fullscreen-menu-checkbox'
  ),
  fullscreenSwitcherCheckboxLabel: document.querySelector(
    '.menu-label-fullscreen'
  ),

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
  pagination: document.querySelector('.pagination'),
  titlesInjectionTarget: document.querySelector('.mobile-headings'),

  // Contact form
  textArea: document.querySelector('.contact-form-message'),
};
