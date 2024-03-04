import {
  adjustHeaderHeight,
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

function doThingsOnLoad() {
  const isMobile = checkSize();

  adjustHeaderHeight(isMobile);

  if (isMobile) {
    const paginationList = document.querySelector('.pagination-list');
    if (!paginationList) createPagination();
  } else {
    addHeaderNavListeners();
  }

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
}

function onScreenChange() {
  const isMobile = doThingsOnLoad();

  if (isMobile) {
    restoreSectionVisibility();
    slider.reactivate();
  } else if (window.mySwipe) {
    setCurrentSection();
    slider.kill();
  } else return;
}

// *********************************

onFirstLoad();
window.onresize = onScreenChange;
