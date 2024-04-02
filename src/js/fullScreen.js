import { refs } from './refs';
import { onHeaderMenuToggle } from './headerMenus';

// *********************************

// const fullScreenOffRadio = document.querySelector(
//   `.fullscreen-switcher-radio[value="off"]`
// );

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement
      .requestFullscreen({ navigationUI: 'hide' })
      .catch(onFullScreenReject);
  } else {
    document.exitFullscreen();
  }
}

const onFullScreenReject = (err) => {
  const text = `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`;
  alert(text);
};

// *********************************

export function activateFullscreenSwitcher() {
  [...refs.fullscreenSwitcherRadios].forEach((radio) => {
    radio.addEventListener('change', toggleFullscreen);
  });

  refs.fullscreenSwitcherCheckbox.addEventListener(
    'change',
    onHeaderMenuToggle
  );
}
