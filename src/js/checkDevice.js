import { slider } from './swipe';
import { createPagination } from './pagination';
import {
  adjustHeaderHeight,
  setCurrentSection,
  restoreSectionVisibility,
  addHeaderNavListeners,
} from './header';
import { setTypewriterEffect } from './typing-animation';

// *********************************

function doThingsOnLoad() {
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    const paginationList = document.querySelector('.pagination-list');
    if (!paginationList) createPagination();
  } else {
    addHeaderNavListeners();
  }

  adjustHeaderHeight(isMobile);

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
  } else {
    setCurrentSection();
    slider.kill();
  }
}

// *********************************

onFirstLoad();
window.onresize = onScreenChange;
