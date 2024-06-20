import { constants } from '/constants';
import { makeTitles } from '/js/mobileTitles';
import translations from '/data/translations.json' assert { type: 'json' };

const {
  LOCALE_ENG,
  LOC_ATTRIBUTE_TEXT,
  LOC_ATTRIBUTE_PLC,
  LOC_ATTRIBUTE_ARIA,
  LS_LANGUAGE_KEY,
} = constants;

function setInitialLocale() {
  const savedLanguage = localStorage.getItem(LS_LANGUAGE_KEY);
  window.locale = savedLanguage || LOCALE_ENG;
}

export function getLocale() {
  return window.locale || LOCALE_ENG;
}

export function setLocale(locale) {
  window.locale = locale;
  document.documentElement.lang = locale;
}

export function getLocalizedFieldName(fieldNameKey) {
  const locale = getLocale();
  return translations[locale][fieldNameKey];
}

export function getLocalizedFieldValue(field) {
  if (!field) return null;
  const locale = getLocale();
  return field[locale] || field[LOCALE_ENG];
}

export function getLocalizedFieldValuePreset(fieldNameKey, fieldValue) {
  const locale = getLocale();
  return translations[locale][fieldNameKey][fieldValue];
}

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

function translateDecorator(attr, locale) {
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
  const translate = translateDecorator(attr, locale);

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

export function applyTranslations() {
  setInitialLocale();

  makeTitles();

  if (window.locale !== LOCALE_ENG) translateStaticHTML();

  // document.body.style.visibility = 'visible';
  document.body.classList.remove('hidden-to-avoid-content-flashing');
}
