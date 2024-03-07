export const refs = {
  // Color schemes
  lightStyles: document.querySelectorAll(
    'link[rel=stylesheet][media*=prefers-color-scheme][media*=light]'
  ),
  darkStyles: document.querySelectorAll(
    'link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]'
  ),
  switcherRadios: document.querySelectorAll('.switcher-radio'),
  // colorSwitcher: document.querySelector('#color-switcher-checkbox'),
  // colorSwitcherSlider: document.querySelector('.color-switcher-slider'),

  // Header
  header: document.querySelector('.header'),
  headerNav: document.querySelector('.header-nav'),
  headerNavLinks: document.querySelectorAll('.header-nav-link'),

  // Sections
  main: document.querySelector('main'),
  sections: document.querySelectorAll('.section'),
  sectionTitles: document.querySelectorAll('.section-title'),

  // Slider
  footer: document.querySelector('.footer'),
  pagination: document.querySelector('.pagination'),
  // bullets: document.querySelectorAll('.pagination-bullet'),
  titlesInjectionTarget: document.querySelector('.mobile-headings'),

  // Contact form
  textArea: document.querySelector('.contact-form-message'),
};
