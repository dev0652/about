import { refs } from './refs';
import { updateSourceMedia } from './updateSourceMedia';

// *********************************
// Color scheme switcher courtesy of Vadim Makeyev
// *********************************

function getSavedColorScheme() {
  return localStorage.getItem('color-scheme');
}

function saveColorScheme(scheme) {
  return localStorage.setItem('color-scheme', scheme);
}

function clearColorScheme() {
  return localStorage.removeItem('color-scheme');
}

// *********************************

function getSystemScheme() {
  const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');
  return darkSchemeMedia.matches ? 'dark' : 'light';
}

// *********************************

function switchMedia(scheme) {
  //
  if (scheme === 'auto') {
    refs.lightStyles.media = '(prefers-color-scheme: light)';
    refs.darkStyles.media = '(prefers-color-scheme: dark)';
  } else {
    refs.lightStyles.media = scheme === 'light' ? 'all' : 'not all';
    refs.darkStyles.media = scheme === 'dark' ? 'all' : 'not all';
  }
}

// *********************************

export function getThemeSwitchTransition() {
  return (
    parseFloat(
      getComputedStyle(document.body).getPropertyValue('transition-duration')
    ) * 1000
  );
}

function setColorScheme(scheme) {
  //   scheme: 'light' | 'dark'

  if (refs.main.classList.contains('faded-edges')) {
    // Temporarily remove the faded edges effect on main to avoid color flashing during box-shadow transition
    refs.main.classList.remove('faded-edges');
  }

  // Do the switching
  switchMedia(scheme);

  if (scheme === 'auto') {
    clearColorScheme();
  } else {
    saveColorScheme(scheme);
  }

  updateSourceMedia(scheme);

  // Turn faded edges effect back on
  setTimeout(() => {
    refs.main.classList.add('faded-edges');
  }, getThemeSwitchTransition());
}

// *********************************

function setupScheme() {
  const systemScheme = getSystemScheme();
  const savedScheme = getSavedColorScheme();

  if (!savedScheme || savedScheme === systemScheme) return;

  setColorScheme(savedScheme);
}

// *********************************

function presetSwitcher() {
  const savedScheme = getSavedColorScheme();

  if (savedScheme) {
    const currentRadio = document.querySelector(
      `.switcher-radio[value=${savedScheme}]`
    );
    currentRadio.setAttribute('checked', '');
  }

  const handleChangeRadio = (event) => {
    setColorScheme(event.target.value);
  };

  [...refs.switcherRadios].forEach((radio) => {
    radio.addEventListener('change', handleChangeRadio);
  });
}

// *********************************

// Listen to clicks outside of the color scheme switcher while menu is open
function onSwitcherMenuToggle(event) {
  const method = event.target.checked
    ? 'addEventListener'
    : 'removeEventListener';
  document[method]('click', handleClicksOutsideMenu);
}

// If clicked outside menu, close it
function handleClicksOutsideMenu(event) {
  if (
    !refs.switcherDropdown.contains(event.target) &&
    !refs.switcherCheckboxLabel.contains(event.target)
  ) {
    document.removeEventListener('click', handleClicksOutsideMenu);
    refs.switcherCheckbox.checked = false;
  }
}

// *********************************

export function activateColorSchemeSwitcher() {
  setupScheme();
  presetSwitcher();
  refs.switcherCheckbox.addEventListener('change', onSwitcherMenuToggle);
}
