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
