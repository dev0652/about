import { renderGallery } from '/js/projects';
import { refs } from '/js/refs';
import translations from '/data/translations.json' assert { type: 'json' };

// *********************************

// const langCheckbox = document.querySelector('.language-menu-checkbox');

// export function getLocale() {
//   return navigator.userLanguage || navigator.language; //returns value like 'en-us'
// }

// document.addEventListener('DOMContentLoaded', () => {
//     // Find all elements that have the key attribute

//   document.querySelectorAll('[data-i18n-key]').forEach(translateElement);
// });

function translateElement(element) {
  const locale = window.locale ? window.locale : 'en';

  const key = element.getAttribute('data-i18n-key');
  const translation = translations[locale][key];
  element.innerText = translation;
}

function switchLanguage(event) {
  window.locale = event.target.value;

  document.body.style.opacity = 0;

  setTimeout(() => {
    renderGallery();

    document.querySelectorAll('[data-i18n-key]').forEach((element) => {
      translateElement(element);
    });

    refs.langSwitcherMenuCaption.setAttribute('data-i18n-key', window.locale);

    document.body.style.removeProperty('opacity');
  }, 300);
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

  window.locale.addEventListener('change', (e) => {
    console.log('e: ', e);
    console.log('changed');
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
