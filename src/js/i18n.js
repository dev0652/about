import { refs } from './refs';
import translations from '/data/translations.json' assert { type: 'json' };

// *********************************

const gallery = refs.gallery;
const langCheckbox = document.querySelector('.language-menu-checkbox');

export function getLocale() {
  return navigator.userLanguage || navigator.language; //returns value like 'en-us'
}

// document.addEventListener('DOMContentLoaded', () => {
//     // Find all elements that have the key attribute

//   document.querySelectorAll('[data-i18n-key]').forEach(translateElement);
// });

function translateElement(element, locale) {
  const key = element.getAttribute('data-i18n-key');
  const translation = translations[locale][key];
  element.innerText = translation;
}

// function switchLanguage(locale) {
//   // const locale = getLocale();
//   const english = locale === 'en' || locale.startsWith('en-');
//   const isLangSupported = locale === 'uk' || english;

//   if (!isLangSupported) return;

//   const key = element.getAttribute('data-i18n-key');
//   const translation = translations[locale][key];
//   element.innerText = translation;
// }

function switchLanguage(event) {
  const locale = event.target.value;

  refs.langSwitcherMenuCaption.setAttribute('data-i18n-key', locale);

  document.querySelectorAll('[data-i18n-key]').forEach((element) => {
    translateElement(element, locale);
  });
}

// *********************************

function presetLanguageSwitcher() {
  // const savedLang = getSavedColorScheme();

  // if (savedLang) {
  //   const currentRadio = document.querySelector(
  //     `.scheme-switcher-radio[value=${savedScheme}]`
  //   );
  //   currentRadio.setAttribute('checked', '');
  // }

  [...refs.langSwitcherRadios].forEach((radio) => {
    radio.addEventListener('change', switchLanguage);
  });
}

// *********************************

// Listen to clicks outside of the language switcher while menu is open
function onLanguageMenuToggle(event) {
  const method = event.target.checked
    ? 'addEventListener'
    : 'removeEventListener';
  document[method]('click', handleClicksOutsideMenu);
}

// If clicked outside menu, close it
function handleClicksOutsideMenu(event) {
  if (
    !refs.langSwitcherDropdown.contains(event.target) &&
    !refs.langSwitcherCheckboxLabel.contains(event.target)
  ) {
    document.removeEventListener('click', handleClicksOutsideMenu);
    refs.langSwitcherCheckbox.checked = false;
  }
}

// *********************************

export function activateLanguageSwitcher() {
  presetLanguageSwitcher();
  refs.langSwitcherCheckbox.addEventListener('change', onLanguageMenuToggle);
}
