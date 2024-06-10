import { refs } from '/js/refs';
import { constants } from '/constants';

import { renderGallery } from '/js/projects';

import { populateTitles, titles } from '/js/mobileTitles';

import { onHeaderMenuToggle } from '/js/headerMenus';
import { translateStaticHTML } from '/js/localization';

import translations from '/data/translations.json' assert { type: 'json' };

// *********************************

const { LS_LANGUAGE_KEY, MEDIA_QUERY_MOBILE, LOCALE_ENG } = constants;

// *********************************

function getSavedLanguage() {
  return localStorage.getItem(LS_LANGUAGE_KEY);
}

function saveLanguage(locale) {
  return localStorage.setItem(LS_LANGUAGE_KEY, locale);
}

// *********************************

function setLocale(locale) {
  window.locale = locale;
  document.documentElement.lang = locale;
}

function translateMobileTitles(locale, prevLang) {
  // Populate the mobile titles array with translated titles:
  const getPreviousTitle = title => translations[prevLang][title].toLowerCase();
  const getTranslatedTitle = title => translations[locale][title].toLowerCase();

  refs.sections.forEach(({ id }) => {
    const index = titles.indexOf(getPreviousTitle(id));
    titles.splice(index, 1, getTranslatedTitle(id));
  });

  populateTitles(titles);
}

function translateContent(locale) {
  const savedLang = getSavedLanguage();
  const prevLang = savedLang ? savedLang : LOCALE_ENG;

  if (MEDIA_QUERY_MOBILE.matches) translateMobileTitles(locale, prevLang);

  renderGallery();
  translateStaticHTML();
}

function translateContentWithFadeEffect(locale) {
  document.body.style.opacity = 0;

  setTimeout(() => {
    translateContent(locale);
    document.body.style.removeProperty('opacity');
  }, 300);
}

function switchLanguage(event) {
  const locale = event.target.value;

  setLocale(locale);
  saveLanguage(locale);
  translateContentWithFadeEffect(locale);
}

function presetLanguageSwitcher() {
  if (window.locale !== LOCALE_ENG) {
    const currentRadio = document.querySelector(
      `.language-switcher-radio[value=${window.locale}]`
    );
    currentRadio.setAttribute('checked', '');
  }

  [...refs.languageMenuInputs].forEach(radio => {
    radio.addEventListener('change', switchLanguage);
  });
}

// *********************************

export function activateLanguageSwitcher() {
  presetLanguageSwitcher();
  refs.languageMenuCheckbox.addEventListener('change', onHeaderMenuToggle);
}
