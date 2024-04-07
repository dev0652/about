import { refs } from './refs';
import { onHeaderMenuToggle } from './headerMenus';

// *********************************

function toggleFullscreen(event) {
  if (event.target.value === 'on') {
    document.documentElement
      .requestFullscreen({ navigationUI: 'hide' })
      .catch(onFullScreenReject)
      .finally(
        document.addEventListener('fullscreenchange', onFullScreenChange)
      );
  } else {
    document.exitFullscreen();
    document.removeEventListener('fullscreenchange', onFullScreenChange);
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

function onFullScreenChange() {
  if (!document.fullscreenElement) {
    const fullScreenOffRadio = document.querySelector(
      `.fullscreen-switcher-radio[value="off"]`
    );

    fullScreenOffRadio.checked = true;
    document.removeEventListener('fullscreenchange', onFullScreenChange);
  }
}
