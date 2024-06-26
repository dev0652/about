import { constants } from '../constants';
import { onHeaderMenuToggle } from './headerMenus';
import { refs } from './refs';
import { updateSourceMedia } from './updateSourceMedia';

// Based on the color scheme switcher solution by Vadim Makeyev

const { LS_KEYS } = constants;

function getSystemScheme() {
  const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');
  return darkSchemeMedia.matches ? 'dark' : 'light';
}

export function getThemeSwitchTransition() {
  return (
    parseFloat(
      getComputedStyle(document.body).getPropertyValue('transition-duration')
    ) * 1000
  );
}

function removeFadedEdgesEffect() {
  if (refs.main.classList.contains('faded-edges'))
    refs.main.classList.remove('faded-edges');
}

function changeMetaStyleLinks(scheme) {
  if (scheme === 'auto') {
    refs.lightStyles.media = '(prefers-color-scheme: light)';
    refs.darkStyles.media = '(prefers-color-scheme: dark)';
  } else {
    refs.lightStyles.media = scheme === 'light' ? 'all' : 'not all';
    refs.darkStyles.media = scheme === 'dark' ? 'all' : 'not all';
  }
}

function saveSchemeSetting(scheme) {
  if (scheme !== 'light' && scheme !== 'dark' && scheme !== 'auto')
    return console.error(
      'Invalid scheme key passed to function. Valid keys are "light", "dark" and "auto"'
    );

  if (scheme === 'auto') localStorage.removeItem(LS_KEYS.colorScheme);
  else localStorage.setItem(LS_KEYS.colorScheme, scheme);
}

function addFadedEdgesEffect() {
  setTimeout(() => {
    refs.main.classList.add('faded-edges');
  }, getThemeSwitchTransition());
}

function applyColorScheme(scheme) {
  removeFadedEdgesEffect();
  changeMetaStyleLinks(scheme);
  saveSchemeSetting(scheme);
  updateSourceMedia(scheme);
  addFadedEdgesEffect();
}

export function setupColorScheme() {
  const systemScheme = getSystemScheme();
  const savedScheme = localStorage.getItem(LS_KEYS.colorScheme);

  if (!savedScheme || savedScheme === systemScheme) return;

  applyColorScheme(savedScheme);
}

function presetSwitcher() {
  const savedScheme = localStorage.getItem(LS_KEYS.colorScheme);

  if (savedScheme) {
    const currentRadio = document.querySelector(
      `.scheme-switcher-radio[value=${savedScheme}]`
    );
    currentRadio.setAttribute('checked', '');
  }

  [...refs.schemeMenuInputs].forEach(radio => {
    radio.addEventListener('change', event => {
      applyColorScheme(event.target.value);
    });
  });
}

export function activateColorSchemeSwitcher() {
  presetSwitcher();
  refs.schemeMenuCheckbox.addEventListener('change', onHeaderMenuToggle);
}
