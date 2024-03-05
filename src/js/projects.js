import projects from '/data/db.json' assert { type: 'json' };

import { openModal } from '/js/modal';
import createCardMarkup from './createCard';

// *****************************************************

const makeListMarkup = (projectsArray) => {
  return `
  <ul class="project-card-list">
    ${projectsArray.map((item) => createCardMarkup(item)).join('')}
  </ul>`;
};

const projectCardsMarkup = makeListMarkup(projects);

const gallery = document.querySelector('#gallery');
gallery.innerHTML = projectCardsMarkup;

// *****************************************************

const switcher = document.querySelector('.projects-view-switch');
const cardList = document.querySelector('.project-card-list');

switcher.addEventListener('click', switchView);

function switchView() {
  cardList.classList.toggle('gallery-view');
  const isGallery = cardList.classList.contains('gallery-view');

  // Change button text
  switcher.innerHTML = `View as ${isGallery ? 'list' : 'tiles'}`;

  if (isGallery) {
    cardList.addEventListener('click', handleGalleryCardClicks);
  } else {
    cardList.removeEventListener('click', handleGalleryCardClicks);
  }
}

// *****************************************************

function handleGalleryCardClicks(event) {
  event.preventDefault();

  if (!event.target.matches('.tile-card-link')) return;

  const id = event.target.dataset.id;
  openModal(id);
}
