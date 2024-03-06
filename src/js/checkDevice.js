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

function checkSize() {
  return window.innerWidth < 768;
}

function getCurrentSectionIndex() {
  let currentSectionIndex = 0;

  refs.headerNavLinks.forEach((link, index) => {
    if (!link.classList.contains('active')) return;
    currentSectionIndex = index;
  });

  return currentSectionIndex;
}

function doThingsOnLoad() {
  const isMobile = checkSize();

  if (isMobile) {
    const paginationList = document.querySelector('.pagination-list');
    if (!paginationList) createPagination();
  } else {
    addHeaderNavListeners();
  }
  // adjustBodyOffsets(isMobile);
  return isMobile;
}
// *********************************

function onFirstLoad() {
  const isMobile = doThingsOnLoad();

  if (isMobile) {
    slider.initialize();
  } else {
    setTypewriterEffect('about');
  }

  window.addEventListener('resize', onScreenChange);
}

function onScreenChange() {
  const isMobile = doThingsOnLoad();

  if (isMobile) {
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
