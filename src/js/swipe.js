import Swipe from 'swipejs';

const options = {
  continuous: false,
  // draggable: true, // listen to mouse events in addition to the touch events
};

// https://github.com/lyfeyaj/swipe
window.mySwipe = new Swipe(document.getElementById('slider', options));

export function toggleSwiper(isMobile, startSlide = 0) {
  // https://github.com/lyfeyaj/swipe/issues/35

  if (isMobile) {
    // window.mySwipe.setup({ startSlide }); // doesn't work as expected

    // Hence, a crutch... :(
    window.mySwipe.setup();
    window.mySwipe.slide(startSlide);
  } else {
    window.mySwipe.kill();
  }
}
