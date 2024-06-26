import { refs } from './refs';
import { renderGallery } from './projects';
import { populateTitles } from './mobileTitles';
import { onHeaderMenuToggle } from './headerMenus';
import {
  translateStaticHTML,
  setLocale,
  populateAboutMeSection,
} from './localization';
import { constants } from '/constants';
import translations from '/data/translations.json' assert { type: 'json' };

const { LS_KEYS, MEDIA_QUERIES, LOCALE_ENG } = constants;

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

function switchToGalleryView() {
  const cardList = document.querySelector('.project-card-list');
  cardList.classList.add('gallery-view');
}

function translateContent(locale) {
  const savedLang = localStorage.getItem(LS_KEYS.language);
  const prevLang = savedLang ? savedLang : LOCALE_ENG;

  if (MEDIA_QUERIES.mobile.matches) translateMobileTitles(locale, prevLang);

  renderGallery();
  if (window.currentPresentation === 'gallery') switchToGalleryView();
  populateAboutMeSection();
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
  localStorage.setItem(LS_KEYS.language, locale);
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
