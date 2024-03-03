import Swipe from 'swipejs';
import { refs } from './refs';

// *********************************

function getCurrentSectionIndex() {
  let currentSectionIndex = 0;

  refs.headerNavLinks.forEach((link, index) => {
    if (!link.classList.contains('active')) return;
    currentSectionIndex = index;
  });

  return currentSectionIndex;
}

function initialize(startSlide = 0) {
  const options = { continuous: false, startSlide };
  window.mySwipe = new Swipe(document.getElementById('slider', options));
}

function reactivate() {
  const startSlide = getCurrentSectionIndex();

  if (window.mySwipe) {
    // window.mySwipe.setup({ startSlide });
    window.mySwipe.setup();
    window.mySwipe.slide(startSlide, -1);
  } else {
    initialize({ startSlide });
  }
}

function kill() {
  window.mySwipe.kill();
}

export const slider = { initialize, reactivate, kill };
