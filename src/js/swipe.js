import Swipe from 'swipejs';
import { refs } from './refs';

// https://github.com/lyfeyaj/swipe
// https://github.com/lyfeyaj/swipe/issues/35

// *********************************

class Slider {
  #getCurrentSectionIndex() {
    let currentSectionIndex = 0;

    refs.headerNavLinks.forEach((link, index) => {
      if (!link.classList.contains('active')) return;
      currentSectionIndex = index;
    });

    return currentSectionIndex;
  }

  #setActiveBullet(index, elem, dir) {
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

  // *********************************

  initialize(startSlide = 0) {
    const options = {
      continuous: false,
      draggable: true,
      startSlide,
      callback: this.#setActiveBullet,
    };

    const sliderEl = document.getElementById('slider');
    window.mySwipe = new Swipe(sliderEl, options);

    this.#setActiveBullet(startSlide);
  }

  reactivate() {
    const startSlide = this.#getCurrentSectionIndex();

    if (window.mySwipe) {
      window.mySwipe.setup();
      window.mySwipe.slide(startSlide, -1);
    } else {
      this.initialize(startSlide);
    }
  }

  kill() {
    window.mySwipe.kill();
  }
}

export const slider = new Slider();
