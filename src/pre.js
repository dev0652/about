import { constants } from '/constants';

import translations from '/data/translations.json' assert { type: 'json' };

// *********************************

const { englishLocaleCode } = constants;

const savedLanguage = localStorage.getItem('language');
window.locale = savedLanguage ? savedLanguage : englishLocaleCode;

if (window.locale !== englishLocaleCode) {
  document.documentElement.lang = window.locale;
  document.querySelectorAll('[data-loc]').forEach(translateElement);
  document.querySelectorAll('[data-loc-plc]').forEach(translatePlaceholder);
  document.querySelectorAll('[data-loc-aria]').forEach(translateAriaLAbel);
}

export function translateElement(element) {
  const locale = window.locale ? window.locale : englishLocaleCode;

  const key = element.getAttribute('data-loc');
  element.innerText = translations[locale][key];
}

export function translatePlaceholder(element) {
  const locale = window.locale ? window.locale : englishLocaleCode;

  const key = element.getAttribute('data-loc-plc');
  element.placeholder = translations[locale][key];
}

export function translateAriaLAbel(element) {
  const locale = window.locale ? window.locale : englishLocaleCode;

  const key = element.getAttribute('data-loc-aria');
  element.ariaLabel = translations[locale].ariaLabels[key];
}
