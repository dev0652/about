import projects from '/data/db.json' assert { type: 'json' };
import { refs } from '/js/refs';

import { openCardModal } from '/js/modal';
import { createCardMarkup } from '/js/createCard';

// *********************************

const gallery = refs.gallery;

const makeListMarkup = (projectsArray) => {
  return `
  <ul class="project-card-list">
    ${projectsArray.map((item) => createCardMarkup(item)).join('')}
  </ul>`;
};

// *********************************

// Handle errors if image urls in picture tag's 'source' are broken
function addEmgErrorHandlers() {
  const images = document.querySelectorAll('.error-handleable');

  images.forEach((image) => {
    image.onerror = handler;
  });

  function handler(event) {
    event.target.onerror = null;
    const children = event.target.parentElement.children;

    // Get both <source> child elements of the <img>'s parent <picture> element and replace their <srcset" value with placeholder image URL
    [...children].forEach((child) => {
      if (!child.nodeName === 'SOURCE') return;
      child.srcset = fallBack;
      child.sizes = '';
    });
  }
}

const fallBack = new URL(`/images/projects/svg/fallback.svg`, import.meta.url)
  .href;

// *********************************

function slideGalleryOutOfView() {
  gallery.classList.remove('slide-in');
  gallery.classList.add('slide-out');
}

function slideGalleryIntoView() {
  gallery.classList.remove('slide-out');
  gallery.classList.add('slide-in');
}

function switchView() {
  const cardList = document.querySelector('.project-card-list');

  // Slide gallery out of view
  slideGalleryOutOfView();

  // Toggle gallery view after slide-out animation has finished
  setTimeout(() => {
    cardList.classList.toggle('gallery-view');

    const isGallery = cardList.classList.contains('gallery-view');

    const method = isGallery ? 'addEventListener' : 'removeEventListener';
    cardList[method]('click', handleGalleryCardClicks);

    // Slide gallery back into view
    slideGalleryIntoView();

    // Update button text
    refs.galleryViewSwitcher.innerHTML = `View as ${
      isGallery ? 'list' : 'tiles'
    }`;
  }, 300);
}

// *********************************

function handleGalleryCardClicks(event) {
  event.preventDefault();

  if (!event.target.matches('.tile-card-link')) return;

  const id = event.target.dataset.id;
  openCardModal(id);
}

// *********************************

gallery.innerHTML = makeListMarkup(projects);
addEmgErrorHandlers();
refs.galleryViewSwitcher.addEventListener('click', switchView);
