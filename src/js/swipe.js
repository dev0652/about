import Swipe from 'swipejs';
import { refs } from './refs';

// https://github.com/lyfeyaj/swipe
// https://github.com/lyfeyaj/swipe/issues/35

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
  const options = {
    continuous: false,
    startSlide,
    callback: function (index, elem, dir) {
      const page = index + 1;
      refs.pagination.innerHTML = `${page} of ${pages}`;
    },
    // transitionEnd: function (index, elem) {},
  };
  const sliderEl = document.getElementById('slider');

  window.mySwipe = new Swipe(sliderEl, options);

  const page = window.mySwipe.getPos() + 1;
  const pages = window.mySwipe.getNumSlides();
  refs.pagination.innerHTML = `${page} of ${pages}`;
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
