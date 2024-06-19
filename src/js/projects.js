import { refs } from '/js/refs';
import { openCardModal } from '/js/modal';
import { createCardMarkup } from '/js/createCard';
import translations from '/data/translations.json' assert { type: 'json' };

const gallery = refs.gallery;
const modeDescriptor = refs.galleryViewSwitcher.querySelector('.view-mode');
const fallBack = new URL(`/images/projects/svg/fallback.svg`, import.meta.url)
  .href;

export const makeListMarkup = projectsArray => {
  return `
  <ul class="project-card-list">
    ${projectsArray.map(item => createCardMarkup(item)).join('')}
  </ul>`;
};

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

function toggleGalleryView() {
  const cardList = document.querySelector('.project-card-list');

  cardList.classList.toggle('gallery-view');
  const isGallery = cardList.classList.contains('gallery-view');

  const method = isGallery ? 'add' : 'remove';
  cardList[`${method}EventListener`]('click', handleGalleryCardClicks);

  slideGalleryIntoView();
  updateViewButtonText(isGallery);
  adjustTabIndexesByGalleryView(cardList, isGallery);
}

function onViewSwitcherClick() {
  slideGalleryOutOfView();
  setTimeout(toggleGalleryView, 300);
}

function handleGalleryCardClicks(event) {
  event.preventDefault();
  if (!event.target.matches('.tile-card-link')) return;

  const id = event.target.dataset.id;
  openCardModal(id);
}

export function renderGallery() {
  gallery.innerHTML = makeListMarkup(window.projects);
}

export function renderGalleryOnInitialLoad() {
  renderGallery();
  addImgErrorHandlers();
  refs.galleryViewSwitcher.addEventListener('click', onViewSwitcherClick);
}
