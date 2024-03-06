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

// *********************************

const mediaQueryMobile = window.matchMedia('(max-width: 767px)');

// *********************************

function getCurrentSectionIndex() {
  let currentSectionIndex = 0;

  refs.headerNavLinks.forEach((link, index) => {
    if (!link.classList.contains('active')) return;
    currentSectionIndex = index;
  });

  return currentSectionIndex;
}

// *********************************

function doThingsOnLoad() {
  if (mediaQueryMobile.matches) {
    const paginationList = document.querySelector('.pagination-list');
    if (!paginationList) createPagination();
  } else {
    addHeaderNavListeners();
  }
  // adjustBodyOffsets(mediaQueryMobile.matches);
}

// *********************************

function onFirstLoad() {
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
