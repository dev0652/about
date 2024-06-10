import { translateStaticHTML } from '/js/localization';
import { constants } from '/constants';

// *********************************

// translateOnFirst

const { LOCALE_ENG, LS_LANGUAGE_KEY } = constants;

const savedLanguage = localStorage.getItem(LS_LANGUAGE_KEY);

window.locale = savedLanguage ? savedLanguage : LOCALE_ENG;

if (window.locale !== LOCALE_ENG) translateStaticHTML();
