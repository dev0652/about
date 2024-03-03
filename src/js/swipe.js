import Swipe from 'swipejs';

const options = {
  continuous: false,
};

// https://github.com/lyfeyaj/swipe
window.mySwipe = new Swipe(document.getElementById('slider'), options);

export function toggleSwiper(isMobile) {
  // https://github.com/lyfeyaj/swipe/issues/35

  if (isMobile) {
    window.mySwipe.setup();
  } else {
    window.mySwipe.kill();
  }
}
