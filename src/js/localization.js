import { constants } from '/constants';
import { makeTitles } from '/js/mobileTitles';
import translations from '/data/translations.json' assert { type: 'json' };
import { uppercaseFirstLetter } from '/js/services';
import { refs } from './refs';

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

export function getLocalizedString(valueKey, subCategoryKey) {
  const locale = getLocale();

  return !subCategoryKey
    ? translations[locale][valueKey]
    : translations[locale][subCategoryKey][valueKey];
}

export function getLocalizedStringFromArray(array, subCategoryKey) {
  const locale = getLocale();

  const localizedStrings = array.map(item =>
    subCategoryKey
      ? translations[locale][subCategoryKey][item]
      : translations[locale][item]
  );

  localizedStrings[0] = uppercaseFirstLetter(localizedStrings[0]);

  return localizedStrings.join(', ');
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

function populateAboutMeSection() {
  const { locale, sectionContent } = window;
  const { aboutInjectionTarget } = refs;
  // const { contentLoadingError } = translations[locale].errors;
  const contentLoadingError = 'error...';

  if (!sectionContent) {
    aboutInjectionTarget.innerHTML = contentLoadingError;
    return;
  }

  const { aboutMe } = sectionContent.find(el => el.aboutMe);

  const paragraphs = aboutMe[locale].map(par => {
    const { children, markDefs } = par;

    const childrenHTML = children
      .map(child => {
        if (child.marks.length === 0) {
          return `<span class="about-span">${child.text}</span>`;
        } else {
          const linkId = child.marks[0];
          const defWithLink = markDefs.find(
            ({ _type, _key }) => _type === 'link' && _key === linkId
          );
          return `<a href="${defWithLink.href}" class="description-link" target="_blank" rel="noopener noreferrer" lang="en">${child.text}</a>`;
        }
      })
      .join('');

    return `<p class="about-par">${childrenHTML}</p>`;
  });

  aboutInjectionTarget.innerHTML = paragraphs.join('');
}

export function applyTranslations() {
  setInitialLocale();
  makeTitles();
  populateAboutMeSection();
  if (window.locale !== LOCALE_ENG) translateStaticHTML();

  // document.body.style.visibility = 'visible';
  document.body.classList.remove('hidden-to-avoid-content-flashing');
}
