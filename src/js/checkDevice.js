import { slider } from './swipe';
import { setTypewriterEffect } from './typing-animation';
import {
  adjustHeaderHeight,
  setCurrentSection,
  restoreSectionVisibility,
} from './header';
import { createPagination } from './pagination';
import { refs } from './refs';

// *********************************

function doThingsOnLoad() {
  const isMobile = window.innerWidth < 768;

  adjustHeaderHeight(isMobile);

  if (isMobile) {
    restoreSectionVisibility();

    const paginationList = document.querySelector('.pagination-list');

    if (!paginationList) createPagination();
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
    slider.reactivate();
  } else {
    slider.kill();
    setCurrentSection();
  }
}

// *********************************

onFirstLoad();
window.onresize = onScreenChange;
