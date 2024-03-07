import { refs } from './refs';

// #############################################################

function presetSwitcher() {
  // Check if switcher position is saved in Local Storage
  const isSaved = localStorage.getItem('dark-color-scheme');

  if (!isSaved) return;
  if (isSaved === 'false') return;

  document.body.classList.add('dark');
  refs.colorSwitcher.setAttribute('checked', '');
}

function setColorScheme() {
  const main = document.querySelector('main');
  main.classList.remove('faded-edges');

  if (refs.colorSwitcher.checked) {
    if (!document.body.classList.contains('dark'))
      document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  // Avoid color flashing by postponing the faded edges effect on main
  const delay =
    parseFloat(
      getComputedStyle(document.body).getPropertyValue('transition-duration')
    ) * 1000;

  setTimeout(() => {
    main.classList.add('faded-edges');
  }, delay);
}

function updateLocalStorage(checkbox) {
  // Save switcher position to Local Storage
  localStorage.setItem('dark-color-scheme', checkbox.checked);
}

// *********************************

function activateColorSchemeSwitcher() {
  presetSwitcher();
  setColorScheme();

  refs.colorSwitcher.addEventListener('change', onChange);
  setTimeout(() => {
    refs.colorSwitcherSlider.classList.add('animated');
  }, 100);
}

function onChange(event) {
  setColorScheme();
  updateLocalStorage(event.currentTarget);
}

// *********************************

// activateColorSchemeSwitcher();
