import Swipe from 'swipejs';
import { setActiveTitleByDirection } from './mobileTitles';

// https://github.com/lyfeyaj/swipe
// https://github.com/lyfeyaj/swipe/issues/35

// *********************************

function scrollToTop() {
  window.scroll({
    top: 0,
    // behavior: 'instant'
  });
}

function setActiveBullet(index) {
  const bullets = document.querySelectorAll('.pagination-bullet');

  bullets.forEach((bullet) => {
    if (+bullet.dataset.id === index) {
      bullet.classList.add('current');
      bullet.setAttribute('aria-current', true);
    } else {
      bullet.classList.remove('current');
      bullet.removeAttribute('aria-current');
    }
  });
}

function onSlideChange(index, elem, dir) {
  setActiveBullet(index);
  setActiveTitleByDirection(dir);
}
// *********************************

function initialize(startSlide = 0) {
  const options = {
    // continuous: false,
    draggable: true,
    startSlide,
    callback: onSlideChange,
    transitionEnd: scrollToTop,
  };

  const sliderEl = document.getElementById('slider');
  window.mySwipe = new Swipe(sliderEl, options);

  setActiveBullet(startSlide);
}

function reactivate(startSlide = 0) {
  if (window.mySwipe) {
    window.mySwipe.setup();
    window.mySwipe.slide(startSlide, -1);
  } else {
    initialize(startSlide);
  }
}

function kill() {
  window.mySwipe.kill();
}

// *********************************

export const slider = { initialize, reactivate, kill };
