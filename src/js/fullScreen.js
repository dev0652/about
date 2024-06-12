import { refs } from './refs';
import { onHeaderMenuToggle } from './headerMenus';

function toggleFullscreen(event) {
  if (event.target.checked === true) {
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

const onFullScreenReject = err => {
  const text = `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`;
  alert(text);
};

export function activateFullscreenSwitcher() {
  refs.fullscreenSwitcherCheckbox.addEventListener('change', toggleFullscreen);
  refs.fullscreenMenuCheckbox.addEventListener('change', onHeaderMenuToggle);
}

function onFullScreenChange() {
  if (!document.fullscreenElement) {
    refs.fullscreenSwitcherCheckbox.checked = false;
    document.removeEventListener('fullscreenchange', onFullScreenChange);
  }
}
