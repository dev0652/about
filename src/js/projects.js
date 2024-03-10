import projects from '/data/db.json' assert { type: 'json' };
import { refs } from '/js/refs';

import { openCardModal } from '/js/modal';
import createCardMarkup from '/js/createCard';

// *********************************

const gallery = refs.gallery;

const makeListMarkup = (projectsArray) => {
  return `
  <ul class="project-card-list">
    ${projectsArray.map((item) => createCardMarkup(item)).join('')}
  </ul>`;
};

gallery.innerHTML = makeListMarkup(projects);

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

refs.galleryViewSwitcher.addEventListener('click', switchView);

// *********************************

function handleGalleryCardClicks(event) {
  event.preventDefault();

  if (!event.target.matches('.tile-card-link')) return;

  const id = event.target.dataset.id;
  openCardModal(id);
}
