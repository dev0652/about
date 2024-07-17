import { refs } from './refs';
import { renderGallery } from './projects';
import { populateTitles } from './mobileTitles';
import { onHeaderMenuToggle } from './headerMenus';
import {
  translateStaticHTML,
  setLocale,
  populateAboutMeSection,
  getLocale,
} from './localization';
import { constants } from '../constants';
import translations from '/data/translations.json' assert { type: 'json' };

const { LS_KEYS, MEDIA_QUERIES, LOCALE_ENG } = constants;

function translateMobileTitles(oldLocale) {
  const { locale, titles } = window;

  const getPreviousTitle = title =>
    translations[oldLocale][title].toLowerCase();
  const getTranslatedTitle = title => translations[locale][title].toLowerCase();

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

function translateContent(oldLocale) {
  if (MEDIA_QUERIES.mobile.matches) translateMobileTitles(oldLocale);

  renderGallery();
  if (window.currentPresentation === 'gallery') switchToGalleryView();
  populateAboutMeSection();
  translateStaticHTML();
}

function translateContentWithFadeEffect(oldLocale) {
  document.body.style.opacity = 0;

  setTimeout(() => {
    translateContent(oldLocale);
    document.body.style.removeProperty('opacity');
  }, 300);
}

function switchLanguage(event) {
  const oldLocale = getLocale();
  const newLocale = event.target.value;

  setLocale(newLocale);
  localStorage.setItem(LS_KEYS.language, newLocale);

  translateContentWithFadeEffect(oldLocale);
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
