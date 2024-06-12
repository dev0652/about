import { constants } from '../constants';
import { onHeaderMenuToggle } from './headerMenus';
import { refs } from './refs';
import { updateSourceMedia } from './updateSourceMedia';

// Based on the color scheme switcher solution by Vadim Makeyev

const { LS_COLOR_SCHEME_KEY } = constants;

export function getSavedColorScheme() {
  return localStorage.getItem(LS_COLOR_SCHEME_KEY);
}

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
  if (scheme === 'auto') localStorage.removeItem(LS_COLOR_SCHEME_KEY);
  else localStorage.setItem(LS_COLOR_SCHEME_KEY, scheme);
}

function addFadedEdgesEffect() {
  setTimeout(() => {
    refs.main.classList.add('faded-edges');
  }, getThemeSwitchTransition());
}

function setColorScheme(scheme) {
  // scheme: 'light' | 'dark'

  removeFadedEdgesEffect();
  changeMetaStyleLinks(scheme);
  saveSchemeSetting(scheme);
  updateSourceMedia(scheme);
  addFadedEdgesEffect();
}

export function setupColorScheme() {
  const systemScheme = getSystemScheme();
  const savedScheme = getSavedColorScheme();

  if (!savedScheme || savedScheme === systemScheme) return;

  setColorScheme(savedScheme);
}

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

export function activateColorSchemeSwitcher() {
  presetSwitcher();
  refs.schemeMenuCheckbox.addEventListener('change', onHeaderMenuToggle);
}
