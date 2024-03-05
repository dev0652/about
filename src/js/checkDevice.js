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
import { injectMobileTitles } from './mobileTitles';

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

function getCurrentSectionId(sectionIndex) {
  let id = null;

  refs.sections.forEach((section, index) => {
    if (index !== sectionIndex) return;
    id = section.id;
  });

  return id;
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
    injectMobileTitles();
    slider.initialize();
  } else {
    setTypewriterEffect('about');
  }
}

function onScreenChange() {
  const isMobile = doThingsOnLoad();

  if (isMobile) {
    const currentSectionIndex = getCurrentSectionIndex();
    restoreSectionVisibility();
    slider.reactivate(currentSectionIndex);

    if (currentSectionIndex === 0) {
      injectMobileTitles();
    } else {
      const currentSectionId = getCurrentSectionId(currentSectionIndex);
      injectMobileTitles(currentSectionId);
    }
    //
  } else if (window.mySwipe) {
    setCurrentSection();
    slider.kill();
  } else return;
}

// *********************************

onFirstLoad();
window.onresize = onScreenChange;
