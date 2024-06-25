import { refs } from './refs';
import { constants } from '/constants';
import { openCardModal } from './modal';
import { createCardMarkup } from './createCard';
import translations from '/data/translations.json' assert { type: 'json' };
import { collapseAllCards } from './accordion';
import {
  getLocalizedFieldName,
  getLocalizedFieldValue,
  getLocalizedString,
  getLocalizedStringFromArray,
} from './localization';

const { MEDIA_QUERIES } = constants;

const gallery = refs.gallery;
const modeDescriptor = refs.galleryViewSwitcher.querySelector('.view-mode');
const fallBack = new URL(`/images/projects/svg/fallback.svg`, import.meta.url)
  .href;

export function makeListMarkup(projectsArray) {
  return `
  <ul class="project-card-list">
    ${projectsArray.map(item => createCardMarkup(item)).join('')}
  </ul>`;
}

// Handle errors if image urls in picture tag's 'source' are broken
function addImgErrorHandlers() {
  const images = document.querySelectorAll('.error-handleable');

  images.forEach(image => {
    image.onerror = handler;
  });

  function handler(event) {
    event.target.onerror = null;
    const children = event.target.parentElement.children;

    // Get both <source> child elements of the <img>'s parent <picture> element and replace their <srcset" value with placeholder image URL
    [...children].forEach(child => {
      if (!child.nodeName === 'SOURCE') return;
      child.srcset = fallBack;
      child.sizes = '';
    });
  }
}

function slideGalleryOutOfView() {
  gallery.classList.remove('slide-in');
  gallery.classList.add('slide-out');
}

function slideGalleryIntoView() {
  gallery.classList.remove('slide-out');
  gallery.classList.add('slide-in');
}

function updateViewButtonText(isGallery) {
  const mode = isGallery ? 'list' : 'tiles';
  modeDescriptor.setAttribute('data-loc', mode);
  modeDescriptor.innerText = translations[window.locale][mode];
}

function adjustTabIndexesByGalleryView(cardList, isGallery) {
  // make list card titles non-keyboard-focusable in gallery view
  const listCardTitles = cardList.querySelectorAll('.card-title');

  listCardTitles.forEach(title => {
    title.tabIndex = isGallery ? '-1' : '0';
  });
}

function toggleProjectsPresentation() {
  const cardList = document.querySelector('.project-card-list');
  cardList.classList.toggle('gallery-view');

  const isGallery = cardList.classList.contains('gallery-view');

  if (isGallery) collapseAllCards();

  window.currentPresentation = isGallery ? 'gallery' : 'list';

  const method = isGallery ? 'add' : 'remove';
  cardList[`${method}EventListener`]('click', handleGalleryCardClicks);

  slideGalleryIntoView();
  updateViewButtonText(isGallery);
  adjustTabIndexesByGalleryView(cardList, isGallery);
}

function onViewSwitcherClick() {
  if (!window.projects) return;

  slideGalleryOutOfView();
  setTimeout(toggleProjectsPresentation, 300);
}

function handleGalleryCardClicks(event) {
  event.preventDefault();
  if (!event.target.matches('.tile-card-link')) return;

  const id = event.target.dataset.id;
  openCardModal(id);
}

export function getProjectCardFieldNames(cardType) {
  if (cardType !== 'card' && cardType !== 'cardModal')
    return console.error('Invalid card type passed to function');

  const isCard = cardType === 'card';
  const isDesktop = MEDIA_QUERIES.desktop.matches;

  return {
    type: getLocalizedFieldName(isCard && isDesktop ? 'project-type' : 'type'),
    stack: getLocalizedFieldName('stack'),
    role: getLocalizedFieldName('role'),
    customer: getLocalizedFieldName('customer'),
    technologies: getLocalizedFieldName('technologies'),
    flipCardPrompt: isCard && getLocalizedFieldName('flip-card-prompt'),
    livePageBtn: getLocalizedFieldName('live-page'),
  };
}

export function getProjectCardFieldValues(project) {
  const { type, description, stack, isRole, role, technologies } = project;

  return {
    technologies: technologies.join(', '),
    stack: stack.join(', '),
    type: getLocalizedString(type, 'projectTypes'),
    role: isRole ? getLocalizedStringFromArray(role, 'projectRoles') : '',
    description: getLocalizedFieldValue(description),
  };
}

export function renderGallery() {
  const { locale, projects } = window;
  const localizedErrorMessage = translations[locale].errors.contentLoadingError;
  const isProjectsArrayValid = projects && Array.isArray(projects);

  gallery.innerHTML = isProjectsArrayValid
    ? makeListMarkup(projects)
    : localizedErrorMessage;

  if (!projects) refs.galleryViewSwitcher.style.visibility = 'hidden';
}

export function renderGalleryOnInitialLoad() {
  renderGallery();
  addImgErrorHandlers();
  refs.galleryViewSwitcher.addEventListener('click', onViewSwitcherClick);
}
