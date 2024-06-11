import { onHeaderMenuToggle } from './headerMenus';
import { refs } from './refs';
import { updateSourceMedia } from './updateSourceMedia';

// *********************************
// Original color scheme switcher courtesy of Vadim Makeyev
// *********************************

const colorSchemeKey = 'color-scheme';

export function getSavedColorScheme() {
  return localStorage.getItem(colorSchemeKey);
}

function saveColorScheme(scheme) {
  return localStorage.setItem(colorSchemeKey, scheme);
}

function clearColorScheme() {
  return localStorage.removeItem(colorSchemeKey);
}

// *********************************

function getSystemScheme() {
  const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');
  return darkSchemeMedia.matches ? 'dark' : 'light';
}

// *********************************

export function getThemeSwitchTransition() {
  return (
    parseFloat(
      getComputedStyle(document.body).getPropertyValue('transition-duration')
    ) * 1000
  );
}

// *********************************

function setColorScheme(scheme) {
  // scheme: 'light' | 'dark'

  // Temporarily remove the faded edges effect on main to avoid color flashing during box-shadow transition
  if (refs.main.classList.contains('faded-edges'))
    refs.main.classList.remove('faded-edges');

  // Do the switching
  if (scheme === 'auto') {
    refs.lightStyles.media = '(prefers-color-scheme: light)';
    refs.darkStyles.media = '(prefers-color-scheme: dark)';
  } else {
    refs.lightStyles.media = scheme === 'light' ? 'all' : 'not all';
    refs.darkStyles.media = scheme === 'dark' ? 'all' : 'not all';
  }

  // Save changes to local storage
  if (scheme === 'auto') {
    clearColorScheme();
  } else {
    saveColorScheme(scheme);
  }

  updateSourceMedia(scheme);

  // Turn faded edges effect (back) on
  setTimeout(() => {
    refs.main.classList.add('faded-edges');
  }, getThemeSwitchTransition());
}

// *********************************

export function setupColorScheme() {
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
      `.scheme-switcher-radio[value=${savedScheme}]`
    );
    currentRadio.setAttribute('checked', '');
  }

  [...refs.schemeMenuInputs].forEach(radio => {
    radio.addEventListener('change', event => {
      setColorScheme(event.target.value);
    });
  });
}

// *********************************

export function activateColorSchemeSwitcher() {
  presetSwitcher();
  refs.schemeMenuCheckbox.addEventListener('change', onHeaderMenuToggle);
}
