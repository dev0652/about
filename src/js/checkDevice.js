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

// *********************************

const { mediaQueryMobile } = constants;

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
