import { refs } from './refs';

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

function setColorScheme(scheme) {
  // Avoid color flashing by postponing the faded edges effect on main
  const main = document.querySelector('main');
  main.classList.remove('faded-edges');

  const delay =
    parseFloat(
      getComputedStyle(document.body).getPropertyValue('transition-duration')
    ) * 1000;

  switchMedia(scheme);

  if (scheme === 'auto') {
    clearColorScheme();
  } else {
    saveColorScheme(scheme);
  }

  setTimeout(() => {
    main.classList.add('faded-edges');
  }, delay);
}

// *********************************

function switchMedia(scheme) {
  let lightMedia;
  let darkMedia;

  if (scheme === ' auto') {
    lightMedia = 'prefers-color-scheme: light';
    darkMedia = 'prefers-color-scheme: dark';
  } else {
    lightMedia = scheme === 'light' ? 'all' : 'not all';
    darkMedia = scheme === 'dark' ? 'all' : 'not all';
  }

  [...refs.lightStyles].forEach((styleLink) => {
    styleLink.media = lightMedia;
  });

  [...refs.darkStyles].forEach((styleLink) => {
    styleLink.media = darkMedia;
  });
}

// *********************************

const darkSChemeMedia = matchMedia('prefers-color-scheme: dark');

function getSystemSCheme() {
  return darkSChemeMedia.matches ? 'dark' : 'light';
}

// *********************************

function setupScheme() {
  const savedScheme = getSavedColorScheme();
  const systemScheme = getSystemSCheme();

  if (!savedScheme || savedScheme === systemScheme) return;

  setColorScheme(savedScheme);
}

function presetSwitcher() {
  const savedScheme = getSavedColorScheme();

  if (savedScheme) {
    const currentRadio = document.querySelector(
      `.switcher-radio[value=${savedScheme}]`
    );
    currentRadio.setAttribute('checked', '');
  }

  [...refs.switcherRadios].forEach((radio) => {
    const handleChangeRadio = (event) => {
      setColorScheme(event.target.value);
    };

    radio.addEventListener('change', handleChangeRadio);
  });
}

// *********************************

// Listen to clicks outside of the color scheme switcher while menu is open
function onSwitcherMenuToggle(event) {
  if (event.target.checked) {
    document.addEventListener('click', handleClicksOutsideMenu, { once: true });
  } else {
    document.removeEventListener('click', handleClicksOutsideMenu);
  }
}

function handleClicksOutsideMenu(event) {
  event.preventDefault();

  // If clicked outside menu, close it
  if (!refs.switcherDropdown.contains(event.target)) {
    refs.switcherCheckbox.checked = false;
  }
}

// refs.switcherCheckbox.addEventListener('change', onSwitcherMenuToggle);

// *********************************

setupScheme();
presetSwitcher();
