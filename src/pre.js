import translations from '/data/translations.json' assert { type: 'json' };

// *********************************

const savedLanguage = localStorage.getItem('language');
window.locale = savedLanguage ? savedLanguage : 'en'; // Preset global variable

if (window.locale !== 'en') {
  document.documentElement.lang = window.locale;
  document.querySelectorAll('[data-loc]').forEach(translateElement);
  document.querySelectorAll('[data-loc-plc]').forEach(translatePlaceholder);
  document.querySelectorAll('[data-loc-aria]').forEach(translateAriaLAbel);
}

export function translateElement(element) {
  const locale = window.locale ? window.locale : 'en';

  const key = element.getAttribute('data-loc');
  element.innerText = translations[locale][key];
}

export function translatePlaceholder(element) {
  const locale = window.locale ? window.locale : 'en';

  const key = element.getAttribute('data-loc-plc');
  element.placeholder = translations[locale][key];
}

export function translateAriaLAbel(element) {
  const locale = window.locale ? window.locale : 'en';

  const key = element.getAttribute('data-loc-aria');
  element.ariaLabel = translations[locale].ariaLabels[key];
}
