import { refs } from './refs';
import { constants } from '/constants';

import {
  setCurrentSection,
  restoreSectionVisibility,
  addHeaderNavListeners,
} from './header';

import { slider } from './swipe';
import { createPagination } from './pagination';

import { applyTranslations } from '/js/localization';
import { setTypewriterEffect } from './typing-animation';
import {
  activateColorSchemeSwitcher,
  setupColorScheme,
} from './color-scheme-switcher';
import { activateLanguageSwitcher } from './language-switcher';
import { activateFullscreenSwitcher } from './fullScreen';

// *********************************

const { MEDIA_QUERY_MOBILE } = constants;

function getCurrentSectionIndex() {
  let currentSectionIndex = 0;

  refs.headerNavLinks.forEach((link, index) => {
    if (!link.classList.contains('active')) return;
    currentSectionIndex = index;
  });

  return currentSectionIndex;
}

function changeTextAreaSize() {
  const isMobile = window.matchMedia('(max-width: 499px)').matches;

  refs.textArea.setAttribute('rows', isMobile ? 3 : 5);
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
  if (MEDIA_QUERY_MOBILE.matches) {
    const paginationList = document.querySelector('.pagination-list');
    if (!paginationList) createPagination();
    activateFullscreenSwitcher();
  } else addHeaderNavListeners();
}

export function onFirstLoad() {
  applyTranslations();
  setupColorScheme();

  setSectionBehavior();
  setNavigationElements();

  activateColorSchemeSwitcher();
  activateLanguageSwitcher();

  changeTextAreaSize();

  MEDIA_QUERY_MOBILE.addEventListener('change', onScreenChange);
}

export function setSectionBehavior() {
  if (MEDIA_QUERY_MOBILE.matches) slider.initialize();
  else setTypewriterEffect();
}

onFirstLoad();
