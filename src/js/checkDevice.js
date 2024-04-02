import { refs } from './refs';
import {
  // adjustBodyOffsets,
  setCurrentSection,
  restoreSectionVisibility,
  addHeaderNavListeners,
} from './header';

import { slider } from './swipe';
import { createPagination } from './pagination';

import { setTypewriterEffect } from './typing-animation';
import { activateColorSchemeSwitcher } from './color-scheme-switcher';
import { activateLanguageSwitcher } from './langauge-switcher';
import { activateFullscreenSwitcher } from './fullScreen';

// *********************************

export const mediaQueryMobile = window.matchMedia('(max-width: 767px)');

// *********************************

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

function doThingsOnLoad() {
  if (mediaQueryMobile.matches) {
    const paginationList = document.querySelector('.pagination-list');
    if (!paginationList) createPagination();
    // activateFullscreenSwitcher();
  } else {
    addHeaderNavListeners();
  }
  // adjustBodyOffsets(mediaQueryMobile.matches);
  changeTextAreaSize();
}

// function setLocale() {
//   // Check local storage for saved language setting
//   const savedLanguage = localStorage.getItem('language');
//   // Preset window.locale global variable
//   window.locale = savedLanguage ? savedLanguage : 'en';
//   console.log('window.locale in setLocale: ', window.locale);
// }

// *********************************

function onFirstLoad() {
  // setLocale();

  document.addEventListener(
    'DOMContentLoaded',
    () => {
      activateColorSchemeSwitcher();
      activateLanguageSwitcher();
      refs.main.classList.add('faded-edges');
    },
    {
      once: true,
    }
  );

  doThingsOnLoad();

  if (mediaQueryMobile.matches) {
    slider.initialize();
  } else {
    setTypewriterEffect('about');
  }

  mediaQueryMobile.addEventListener('change', onScreenChange);
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
