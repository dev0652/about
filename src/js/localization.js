import {
  translateElement,
  translatePlaceholder,
  translateAriaLAbel,
} from '/pre';

import { constants } from '/constants';

import translations from '/data/translations.json' assert { type: 'json' };

// *********************************

const { englishLocaleCode } = constants;

export function getLocalizedField(field) {
  const locale = window.locale ? window.locale : englishLocaleCode;

  if (!field) return null;
  return field[locale] ? field[locale] : field.en;
}

export function getLocalizedFieldName(fieldNameKey) {
  const locale = window.locale ? window.locale : englishLocaleCode;
  return translations[locale][fieldNameKey];
}

export function translateStaticHTML() {
  document.querySelectorAll('[data-loc]').forEach(translateElement);
  document.querySelectorAll('[data-loc-plc]').forEach(translatePlaceholder);
  document.querySelectorAll('[data-loc-aria]').forEach(translateAriaLAbel);
}
