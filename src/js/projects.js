import projects from '/data/db.json' assert { type: 'json' };
import { refs } from './refs';

import { openModal } from '/js/modal';
import createCardMarkup from './createCard';

// *********************************

const makeListMarkup = (projectsArray) => {
  return `
  <ul class="project-card-list">
    ${projectsArray.map((item) => createCardMarkup(item)).join('')}
  </ul>`;
};

refs.gallery.innerHTML = makeListMarkup(projects);

// *********************************

refs.galleryViewSwitcher.addEventListener('click', switchView);

function switchView() {
  const cardList = document.querySelector('.project-card-list');

  // Slide gallery out of view
  refs.gallery.classList.remove('slide-in');
  refs.gallery.classList.add('slide-out');

  // After slid-out animation has completed, swap gallery view
  setTimeout(() => {
    cardList.classList.toggle('gallery-view');

    const isGallery = cardList.classList.contains('gallery-view');

    if (isGallery) {
      cardList.addEventListener('click', handleGalleryCardClicks);
    } else {
      cardList.removeEventListener('click', handleGalleryCardClicks);
    }

    // Slide gallery back into view
    refs.gallery.classList.remove('slide-out');
    refs.gallery.classList.add('slide-in');

    // Change button text
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
  openModal(id);
}
