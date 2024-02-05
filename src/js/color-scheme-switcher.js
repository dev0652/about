const colorSwitcher = document.querySelector('#color-scheme-switcher-checkbox');
const colorSwitcherSlider = document.querySelector(
  '.color-scheme-switcher-slider'
);

// #############################################################

function presetSwitcher() {
  // Check if switcher position is saved in Local Storage
  const isSaved = localStorage.getItem('dark-color-scheme');

  if (!isSaved) return;
  if (isSaved === 'false') return;

  colorSwitcher.checked = true;
}

function setColorScheme() {
  const main = document.querySelector('main');
  main.classList.remove('faded-edges');

  if (colorSwitcher.checked) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

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

// #############################################################

// Resulting function:
function activateColorSchemeSwitcher() {
  presetSwitcher();
  setColorScheme();

  colorSwitcher.addEventListener('change', onChange);
  setTimeout(() => {
    colorSwitcherSlider.classList.add('animated');
  }, 100);
}

function onChange(event) {
  setColorScheme();
  updateLocalStorage(event.currentTarget);
}

// #############################################################

activateColorSchemeSwitcher();