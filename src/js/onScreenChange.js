import { adjustHeaderHeight, toggleSectionVisibility } from './header';
import { toggleSwiper } from './swipe';

function onScreenChange() {
  const isMobile = window.innerWidth < 768;

  adjustHeaderHeight(isMobile);
  toggleSectionVisibility(isMobile);
  toggleSwiper(isMobile);
}

onScreenChange(); // run once on start

window.onresize = onScreenChange;
