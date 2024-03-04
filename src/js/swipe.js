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

function setActiveBullet(index, elem, dir) {
  const bullets = document.querySelectorAll('.pagination-bullet');

  bullets.forEach((bullet) => {
    if (+bullet.dataset.id === index) {
      bullet.classList.add('current');
    } else {
      bullet.classList.remove('current');
    }
  });
}

// *********************************

function initialize(startSlide = 0) {
  const options = {
    continuous: false,
    startSlide,
    callback: setActiveBullet,
    // transitionEnd: function (index, elem) {},
  };
  const sliderEl = document.getElementById('slider');

  window.mySwipe = new Swipe(sliderEl, options);

  setActiveBullet(startSlide);
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
