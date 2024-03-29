import translations from '/data/translations.json' assert { type: 'json' };

// *********************************

export function getLocalizedField(field) {
  const locale = window.locale ? window.locale : 'en';

  if (!field) return null;
  return field[locale] ? field[locale] : field.en;
}

export function getLocalizedFieldName(fieldNameKey) {
  const locale = window.locale ? window.locale : 'en';
  return translations[locale][fieldNameKey];
}

export const loadingError = {
  en: 'Error loading project',
  uk: 'Помилка завантаження проекту',
};

// *********************************

// export function translateElement(element) {
//   const locale = window.locale ? window.locale : 'en';
//   const key = element.getAttribute('data-loc');
//   element.innerText = translations[locale][key];
// }

// export function translatePlaceholder(element) {
//   const locale = window.locale ? window.locale : 'en';
//   const key = element.getAttribute('data-loc-plc');
//   element.placeholder = translations[locale][key];
// }
