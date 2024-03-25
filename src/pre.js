// import { translateElement, translatePlaceholder } from './js/i18n';
import translations from '/data/translations.json' assert { type: 'json' };

// *********************************

const savedLanguage = localStorage.getItem('language');
window.locale = savedLanguage ? savedLanguage : 'en'; // Preset global variable

if (window.locale !== 'en') {
  document.querySelectorAll('[data-loc]').forEach(translateElement);
  document.querySelectorAll('[data-loc-plc]').forEach(translatePlaceholder);
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
