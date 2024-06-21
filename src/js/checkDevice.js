import { refs } from '/js/refs';
import { constants } from '/constants';
import { applyTranslations } from '/js/localization';
import { slider } from '/js/swipe';
import { createPagination } from '/js/pagination';
import { setTypewriterEffect } from '/js/typing-animation';
import { activateLanguageSwitcher } from '/js/language-switcher';
import { activateFullscreenSwitcher } from '/js/fullScreen';
import { renderGalleryOnInitialLoad } from '/js/projects';
import {
  setCurrentSection,
  restoreSectionVisibility,
  addHeaderNavListeners,
} from '/js/header';
import {
  activateColorSchemeSwitcher,
  setupColorScheme,
} from '/js/color-scheme-switcher';
import { sanity } from '../sanity';

const { MEDIA_QUERY_MOBILE } = constants;
const { getProjects, getTranslations, urlFor } = sanity;

function getCurrentSectionIndex() {
  let currentSectionIndex = 0;

  refs.headerNavLinks.forEach((link, index) => {
    if (!link.classList.contains('active')) return;
    currentSectionIndex = index;
  });

  return currentSectionIndex;
}

function changeTextAreaSize() {
  const isMobileWide = window.matchMedia('(max-width: 499px)').matches;
  refs.textArea.setAttribute('rows', isMobileWide ? 3 : 5);
}

function onScreenChange(event) {
  setNavigationElements();
  changeTextAreaSize();

  if (event.matches) {
    restoreSectionVisibility();
    const currentSectionIndex = getCurrentSectionIndex();
    slider.reactivate(currentSectionIndex);
  } else {
    if (window.mySwipe) {
      setCurrentSection();
      slider.kill();
    }
  }
}

function setNavigationElements() {
  if (MEDIA_QUERY_MOBILE.matches) {
    const paginationList = document.querySelector('.pagination-list');
    if (!paginationList) {
      createPagination();
      activateFullscreenSwitcher();
    }
  } else addHeaderNavListeners();
}

function setSectionBehavior() {
  if (MEDIA_QUERY_MOBILE.matches) slider.initialize();
  else setTypewriterEffect();
}

export async function doOnFirstLoad() {
  // tmp
  const projectData = await getProjects();
  const isDataBroken = !projectData || projectData.length === 0;
  window.projects = isDataBroken ? null : projectData;

  const translationData = await getTranslations();
  const aboutMe = translationData[0].aboutMe;
  const aboutUkr = aboutMe.uk;
  const paragraphs = aboutUkr.map(
    par => `
      <p class="about-par">
        ${par.children[0].text}
      </ul>
    `
  );

  const aboutInjectionTarget = document.querySelector('.about-description');
  const aboutContent = paragraphs.join('');
  aboutInjectionTarget.innerHTML = aboutContent;
  // end of tmp

  applyTranslations();
  setupColorScheme();

  setNavigationElements();
  setSectionBehavior();

  activateColorSchemeSwitcher();
  activateLanguageSwitcher();

  changeTextAreaSize();

  renderGalleryOnInitialLoad();

  MEDIA_QUERY_MOBILE.addEventListener('change', onScreenChange);
}

doOnFirstLoad();

// tmp:

async function getSanityImageURL() {
  const data = await getProjects();
  const img = data[0].images.large1x.asset._ref;
  const url = urlFor(img);

  return url;
}

function retrieveDataFromStorage(key, data) {
  const storedData = localStorage.getItem(key);
  if (!storedData) localStorage.setItem(key, data);
  return storedData || data;
}
