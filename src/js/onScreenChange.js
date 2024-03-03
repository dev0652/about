import {
  adjustHeaderHeight,
  setCurrentSection,
  toggleSectionVisibility,
} from './header';
import { toggleSwiper } from './swipe';
import { refs } from './refs';

// *********************************

function onScreenChange() {
  const isMobile = window.innerWidth < 768;

  let currentSectionIndex = 0;

  refs.headerNavLinks.forEach((link, index) => {
    if (!link.classList.contains('active')) return;
    currentSectionIndex = index;
  });

  adjustHeaderHeight(isMobile);
  toggleSectionVisibility(isMobile);
  setCurrentSection(isMobile);
  toggleSwiper(isMobile, currentSectionIndex);
}

// *********************************

onScreenChange(); // run once on start

window.onresize = onScreenChange;
