import { slider } from './swipe';
import { setTypewriterEffect } from './typing-animation';
import {
  adjustHeaderHeight,
  setCurrentSection,
  restoreSectionVisibility,
} from './header';

// *********************************

function checkSize() {
  return window.innerWidth < 768;
}

// *********************************

function onFirstLoad() {
  const isMobile = checkSize();
  adjustHeaderHeight(isMobile);

  if (isMobile) {
    restoreSectionVisibility();
    slider.initialize();
  } else {
    setTypewriterEffect('about');
  }
}

function onScreenChange() {
  const isMobile = checkSize();
  adjustHeaderHeight(isMobile);

  if (isMobile) {
    restoreSectionVisibility();
    slider.reactivate();
  } else {
    slider.kill();
    setCurrentSection();
  }
}

// *********************************

onFirstLoad();
window.onresize = onScreenChange;
