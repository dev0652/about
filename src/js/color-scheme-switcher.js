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
  switchMedia(scheme);

  if (scheme === 'auto') {
    clearColorScheme();
  } else {
    saveColorScheme(scheme);
  }
}

// function setColorScheme() {
//   const main = document.querySelector('main');
//   main.classList.remove('faded-edges');

//   if (refs.colorSwitcher.checked) {
//     if (!document.body.classList.contains('dark'))
//       document.body.classList.add('dark');
//   } else {
//     document.body.classList.remove('dark');
//   }

//   // Avoid color flashing by postponing the faded edges effect on main
//   const delay =
//     parseFloat(
//       getComputedStyle(document.body).getPropertyValue('transition-duration')
//     ) * 1000;

//   setTimeout(() => {
//     main.classList.add('faded-edges');
//   }, delay);
// }

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

setupScheme();
presetSwitcher();
