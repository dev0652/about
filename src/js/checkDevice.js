import { refs } from '/js/refs';
import { constants } from '/constants';
import { sanity } from '../sanity';
import { applyTranslations } from '/js/localization';
import { slider } from '/js/swipe';
import { createPagination } from '/js/pagination';
import { setTypewriterEffect } from '/js/typing-animation';
import { activateLanguageSwitcher } from '/js/language-switcher';
import { activateFullscreenSwitcher } from '/js/fullScreen';
import { renderGalleryOnInitialLoad } from '/js/projects';
import { uppercaseFirstLetter } from '/js/services';
import {
  setCurrentSection,
  restoreSectionVisibility,
  addHeaderNavListeners,
} from '/js/header';
import {
  activateColorSchemeSwitcher,
  setupColorScheme,
} from '/js/color-scheme-switcher';

const { MEDIA_QUERIES, DATA_TYPES } = constants;
const { projects, sectionContent } = DATA_TYPES;

function getCurrentSectionIndex() {
  let currentSectionIndex = 0;

  refs.headerNavLinks.forEach((link, index) => {
    if (!link.classList.contains('active')) return;
    currentSectionIndex = index;
  });

  return currentSectionIndex;
}

function changeTextAreaSize() {
  const isMobileWide = window.matchMedia(MEDIA_QUERIES.widePhone).matches;
  refs.textArea.setAttribute('rows', isMobileWide ? 3 : 5);
}

function onScreenChange(event) {
  setNavigationElements();
  changeTextAreaSize();

  if (event.matches) {
    restoreSectionVisibility();
    const currentSectionIndex = getCurrentSectionIndex();
    slider.reactivate(currentSectionIndex);
  } else {
    if (window.mySwipe) {
      setCurrentSection();
      slider.kill();
    }
  }
}

function setNavigationElements() {
  if (MEDIA_QUERIES.mobile.matches) {
    const paginationList = document.querySelector('.pagination-list');
    if (!paginationList) {
      createPagination();
      activateFullscreenSwitcher();
    }
  } else addHeaderNavListeners();
}

function setSectionBehavior() {
  if (MEDIA_QUERIES.mobile.matches) slider.initialize();
  else setTypewriterEffect();
}

async function getData(dataType) {
  if (!Object.keys(DATA_TYPES).find(el => el === dataType)) return;

  const functionName = 'get' + uppercaseFirstLetter(dataType);

  if (!sanity[functionName]) return;
  const data = await sanity[functionName]();

  const isDataBroken = !data || data.length === 0;
  window[dataType] = isDataBroken ? null : data;
}

export async function doOnFirstLoad() {
  await getData(projects);
  await getData(sectionContent);

  applyTranslations();
  setupColorScheme();

  setNavigationElements();
  setSectionBehavior();

  activateColorSchemeSwitcher();
  activateLanguageSwitcher();

  changeTextAreaSize();

  renderGalleryOnInitialLoad();

  MEDIA_QUERIES.mobile.addEventListener('change', onScreenChange);
}

doOnFirstLoad();
