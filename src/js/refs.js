export const refs = {
  // Linked stylesheets by color scheme
  lightStyles: document.querySelector(
    'link[rel=stylesheet][media*=prefers-color-scheme][media*=light]'
  ),
  darkStyles: document.querySelector(
    'link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]'
  ),

  // Color scheme switcher
  schemeMenuInputs: document.querySelectorAll('.scheme-switcher-radio'),
  schemeMenuDropdown: document.querySelector('.dropdown-scheme'),
  schemeMenuCheckbox: document.querySelector('.scheme-switcher-menu-checkbox'),
  schemeMenuCheckboxLabel: document.querySelector('.menu-label-scheme'),

  // Language switcher
  languageMenuInputs: document.querySelectorAll('.language-switcher-radio'),
  languageMenuDropdown: document.querySelector('.dropdown-language'),
  languageMenuCheckbox: document.querySelector('.language-menu-checkbox'),
  languageMenuCheckboxLabel: document.querySelector('.menu-label-language'),
  languageMenuCaption: document.querySelector('.language-menu-caption'),

  // Fullscreen mode switcher
  fullscreenMenuInputs: document.querySelectorAll(
    '.fullscreen-switcher-checkbox'
  ),
  fullscreenMenuDropdown: document.querySelector('.dropdown-fullscreen'),
  fullscreenMenuCheckbox: document.querySelector('.fullscreen-menu-checkbox'),
  fullscreenMenuCheckboxLabel: document.querySelector('.menu-label-fullscreen'),

  fullscreenSwitcherCheckbox: document.querySelector(
    '.fullscreen-switcher-checkbox'
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
