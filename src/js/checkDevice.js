import { refs } from './refs';
import { constants } from '/constants';

import {
  setCurrentSection,
  restoreSectionVisibility,
  addHeaderNavListeners,
} from './header';

import { slider } from './swipe';
import { createPagination } from './pagination';

import { setTypewriterEffect } from './typing-animation';
import { activateColorSchemeSwitcher } from './color-scheme-switcher';
import { activateLanguageSwitcher } from './language-switcher';
import { activateFullscreenSwitcher } from './fullScreen';

import { translateStaticHTML } from '/js/localization';

// *********************************

const { MEDIA_QUERY_MOBILE, LOCALE_ENG, LS_LANGUAGE_KEY } = constants;

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

// *********************************

function handleLocale() {
  const savedLanguage = localStorage.getItem(LS_LANGUAGE_KEY);
  window.locale = savedLanguage ? savedLanguage : LOCALE_ENG;
}

function applyTranslations() {
  if (window.locale !== LOCALE_ENG) translateStaticHTML();
}

function doThingsOnLoad() {
  if (MEDIA_QUERY_MOBILE.matches) {
    const paginationList = document.querySelector('.pagination-list');
    if (!paginationList) createPagination();
    activateFullscreenSwitcher();
  } else {
    addHeaderNavListeners();
  }

  changeTextAreaSize();
}

// *********************************

function onFirstLoad() {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      handleLocale();
      applyTranslations();

      activateColorSchemeSwitcher();
      activateLanguageSwitcher();
      refs.main.classList.add('faded-edges');
    },
    {
      once: true,
    }
  );

  doThingsOnLoad();

  if (MEDIA_QUERY_MOBILE.matches) {
    slider.initialize();
  } else {
    setTypewriterEffect('about');
  }

  MEDIA_QUERY_MOBILE.addEventListener('change', onScreenChange);
}

function onScreenChange(event) {
  doThingsOnLoad();

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

// *********************************

onFirstLoad();
