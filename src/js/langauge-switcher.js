import { refs } from '/js/refs';
import translations from '/data/translations.json' assert { type: 'json' };
import { renderGallery } from '/js/projects';

import { mediaQueryMobile } from './checkDevice';
import { populateTitles, titles } from './mobileTitles';
import { translateElement, translatePlaceholder } from '../pre';

// *********************************

const languageKey = 'language';

function getSavedLanguage() {
  return localStorage.getItem(languageKey);
}

function saveLanguage(locale) {
  return localStorage.setItem(languageKey, locale);
}

// *********************************

function switchLanguage(event) {
  const locale = event.target.value;
  window.locale = locale;
  document.documentElement.lang = locale;

  const savedLang = getSavedLanguage();
  const prevLang = savedLang ? savedLang : 'en';
  saveLanguage(locale); // Local storage

  document.body.style.opacity = 0; // fade effect

  setTimeout(() => {
    // Populate the mobile titles array with translated titles:
    if (mediaQueryMobile.matches) {
      const getPreviousTitle = (title) =>
        translations[prevLang][title].toLowerCase();

      const getTranslatedTitle = (title) =>
        translations[locale][title].toLowerCase();

      refs.sections.forEach((section) => {
        const index = titles.indexOf(getPreviousTitle(section.id));
        titles.splice(index, 1, getTranslatedTitle(section.id));
      });

      populateTitles(titles);
    }

    // Re-render the gallery based on updated window.locale:
    renderGallery();

    // Translate static HTML:
    document.querySelectorAll('[data-loc]').forEach(translateElement);
    document.querySelectorAll('[data-loc-plc]').forEach(translatePlaceholder);

    // refs.langSwitcherMenuCaption.setAttribute('data-loc', window.locale);

    document.body.style.removeProperty('opacity'); // fade effect
  }, 300);
}

// *********************************

function presetLanguageSwitcher() {
  if (window.locale !== 'en') {
    const currentRadio = document.querySelector(
      `.language-switcher-radio[value=${window.locale}]`
    );
    currentRadio.setAttribute('checked', '');
  }

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
  document[method]('click', handleClicksOutsideLangMenu);

  if (event.target.checked) {
    refs.langSwitcherRadios.forEach((radio) => {
      radio.removeAttribute('tabIndex');
    });

    event.target.setAttribute('aria-expanded', false);
  } else {
    refs.langSwitcherRadios.forEach((radio) => {
      radio.tabIndex = '-1'; // disables focus on radio buttons when menu is collapsed
    });

    event.target.setAttribute('aria-expanded', false);
  }
}

// If clicked outside menu, close it
function handleClicksOutsideLangMenu(event) {
  if (
    !refs.langSwitcherDropdown.contains(event.target) &&
    !refs.langSwitcherCheckboxLabel.contains(event.target)
  ) {
    document.removeEventListener('click', handleClicksOutsideLangMenu);
    refs.langSwitcherCheckbox.checked = false;
    refs.langSwitcherCheckbox.setAttribute('aria-expanded', false);

    refs.langSwitcherRadios.forEach((radio) => {
      radio.tabIndex = '-1'; // disables focus on radio buttons when menu is collapsed
    });
  }
}

// *********************************

export function activateLanguageSwitcher() {
  presetLanguageSwitcher();
  refs.langSwitcherCheckbox.addEventListener('change', onLanguageMenuToggle);
}
