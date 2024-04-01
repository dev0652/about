import { refs } from './refs';
import { onHeaderMenuToggle } from './headerMenus';

// *********************************

export function toggleFullscreen(event) {
  if (
    event.target.value === 'on' &&
    event.isTrusted &&
    !document.fullscreenElement
  ) {
    document.documentElement
      .requestFullscreen({ navigationUI: 'hide' })
      .then((res) => console.log(res))
      .catch((err) => {
        alert(
          `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
        );
      });
  } else {
    document.exitFullscreen();

    const fullScreenOffRadio = document.querySelector(
      `.fullscreen-switcher-radio[value="off"]`
    );
    fullScreenOffRadio.setAttribute('checked', '');
  }
}

function onFullScreenExit() {
  if (!document.fullscreenElement) {
    // refs.fullscreenSwitcherRadios;
    console.log(
      'refs.fullscreenSwitcherRadios: ',
      refs.fullscreenSwitcherRadios
    );

    document.documentElement.removeEventListener(
      'fullscreenchange',
      onFullScreenExit
    );
  }
}

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
