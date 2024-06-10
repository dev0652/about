import { constants } from '/constants';
import translations from '/data/translations.json' assert { type: 'json' };

// *********************************

const {
  LOCALE_ENG,
  LOC_ATTRIBUTE_TEXT,
  LOC_ATTRIBUTE_PLC,
  LOC_ATTRIBUTE_ARIA,
} = constants;

// *********************************

function getLocale() {
  return window.locale ? window.locale : LOCALE_ENG;
}

export function getLocalizedField(field) {
  const locale = getLocale();

  if (!field) return null;
  return field[locale] ? field[locale] : field.en;
}

export function getLocalizedFieldName(fieldNameKey) {
  const locale = getLocale();
  return translations[locale][fieldNameKey];
}

// *********************************

function getElementPropertyName(attr) {
  switch (attr) {
    case LOC_ATTRIBUTE_TEXT:
      return 'innerText';

    case LOC_ATTRIBUTE_PLC:
      return 'placeholder';

    case LOC_ATTRIBUTE_ARIA:
      return 'ariaLabel';
  }
}

function callback(attr, locale) {
  //
  return function (node) {
    const propertyName = getElementPropertyName(attr);

    let key = node.getAttribute(attr);

    const isAriaLabel = propertyName === 'ariaLabel';
    const subSection = isAriaLabel ? 'ariaLabels' : '';

    node[propertyName] = !isAriaLabel
      ? translations[locale][key]
      : translations[locale][subSection][key];
  };
}

function translateElementByAttribute(attr) {
  const locale = getLocale();
  const translate = callback(attr, locale);

  document.querySelectorAll(`[${attr}]`).forEach(translate);
}

export function translateStaticHTML() {
  document.documentElement.lang = window.locale;

  const localizationAttributes = [
    LOC_ATTRIBUTE_TEXT,
    LOC_ATTRIBUTE_PLC,
    LOC_ATTRIBUTE_ARIA,
  ];

  localizationAttributes.forEach(translateElementByAttribute);
}
