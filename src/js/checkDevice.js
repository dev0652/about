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

import htm from 'htm';
import vhtml from 'vhtml';
import { toHTML } from '@portabletext/to-html';

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
  const aboutMeUkr = aboutMe.uk;

  const paragraphs = aboutMeUkr.map(par => {
    const { children, markDefs } = par;

    const childrenHTML = children
      .map(child => {
        if (child.marks.length === 0) {
          return `<span class="about-span">${child.text}</span>`;
        } else {
          const linkId = child.marks[0];
          const defWithLink = markDefs.find(
            ({ _type, _key }) => _type === 'link' && _key === linkId
          );
          return `<a href="${defWithLink.href}" class="description-link" target="_blank" rel="noopener noreferrer" lang="en">${child.text}</a>`;
        }
      })
      .join('');

    return `<p class="about-par">${childrenHTML}</p>`;
  });

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
