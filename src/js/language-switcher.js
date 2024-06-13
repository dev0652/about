import { refs } from '/js/refs';
import { renderGallery } from '/js/projects';
import { populateTitles } from '/js/mobileTitles';
import { onHeaderMenuToggle } from '/js/headerMenus';
import { translateStaticHTML, setLocale } from '/js/localization';
import { constants } from '/constants';
import translations from '/data/translations.json' assert { type: 'json' };

const { LS_LANGUAGE_KEY, MEDIA_QUERY_MOBILE, LOCALE_ENG } = constants;

function translateMobileTitles(locale, prevLang) {
  // Populate the mobile titles array with translated titles:
  const getPreviousTitle = title => translations[prevLang][title].toLowerCase();
  const getTranslatedTitle = title => translations[locale][title].toLowerCase();

  const { titles } = window;

  refs.sections.forEach(({ id }) => {
    const index = titles.indexOf(getPreviousTitle(id));
    titles.splice(index, 1, getTranslatedTitle(id));
  });

  populateTitles(titles);
}

function translateContent(locale) {
  const savedLang = localStorage.getItem(LS_LANGUAGE_KEY);
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
  localStorage.setItem(LS_LANGUAGE_KEY, locale);
  translateContentWithFadeEffect(locale);
}

function presetLanguageSwitcher() {
  if (!window.locale) console.error("No 'locale' property set on window yet");

  if (window.locale && window.locale !== LOCALE_ENG) {
    const currentRadio = document.querySelector(
      `.language-switcher-radio[value=${window.locale}]`
    );

    currentRadio.setAttribute('checked', '');
  }

  [...refs.languageMenuInputs].forEach(radio => {
    radio.addEventListener('change', switchLanguage);
  });
}

export function activateLanguageSwitcher() {
  presetLanguageSwitcher();
  refs.languageMenuCheckbox.addEventListener('change', onHeaderMenuToggle);
}
