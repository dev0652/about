import projects from '/data/db';
import { makePlaceholderUrl } from './shared';
import { openModal } from '/js/modal';

const makeItemMarkup = (project) => {
  const {
    id,
    name,
    type,
    link,
    livePage,
    thumbFilename: thumb,
    description,
    stack,
    role,
    customer,
    technologies,
  } = project;

  const thumbUrl1x = new URL(
    `/images/projects/thumbs/400x250/${thumb}.webp`,
    import.meta.url
  ).href;
  const thumbUrl2x = new URL(
    `/images/projects/thumbs/800x500/${thumb}.webp`,
    import.meta.url
  ).href;
  const largeUrl = new URL(
    `/images/projects/large/${thumb}.png`,
    import.meta.url
  ).href;

  const message = 'Image pending';
  const placeholder1x = makePlaceholderUrl('400x250', message);
  const placeholder2x = makePlaceholderUrl('800x500', message);

  const imagePath1x = !thumb ? placeholder1x : thumbUrl1x;
  const imagePath2x = !thumb ? placeholder2x : thumbUrl2x;

  const technologiesList = technologies.join(', ');

  return /* html */ `
    <li class="project-card">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" data-id="${name}">${name}</h2>

        <div class="list-version collapsible">
          <div class="list-version-wrapper">
            <div class="list-version-image-block">
              <img
                class="project-card-image"
                srcset="${imagePath1x} 1x, ${imagePath2x} 2x"
                src="${largeUrl}"
                alt="${name} live page screenshot"
              />
            </div>

            <div class="project-links-wrapper">
              <a
                class="project-link"
                href="${link}"
                target="_blank"
                rel="noopener noreferrer"
                >GitHub</a
              >

              <a
                class="project-link"
                href="${livePage}"
                target="_blank"
                rel="noopener noreferrer"
                >Live page</a
              >
            </div>

            <div class="list-version-heading">
              <div class="heading-items-wrapper">
                  <p class="type"><span class="field-type">Type:</span> ${type}</p>

                  <p class="customer"
                  style="${!customer && 'display: none'}">
                    <span class="field-type">Customer:</span> ${customer}
                  </p>

                  <p class="role"
                  style="${!role && 'display: none'}">
                    <span class="field-type">Role:</span> ${role}
                  </p>

                  <p class="stack"><span class="field-type">Stack:</span> ${stack}</p>
              </div>

              <p class="technologies">${technologiesList}</p>
            </div>

            <div class="list-version-description">
              <p class="project-description">${description}</p>
            </div>  

          </div>
        </div>

        <div class="gallery-version">
          <a
            class="project-card-link flip-card"
            href="#"
            data-id="${id}"
          >
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  class="project-card-image"
                  srcset="${imagePath1x} 1x, ${imagePath2x} 2x"
                  src="${imagePath1x}"
                  alt="${name} live page screenshot"
                  width="400"
                  height="250"
                  loading="lazy"
                />
              </div>

              <div class="flip-card-back">
                <h3 class="flip-card-project-name">${name}</h3>

                <div class="flip-card-meta-wrapper">
                  <div>
                    <p class="type"><span class="field-type">Type:</span> ${type}</p>

                    <p class="stack"><span class="field-type">Stack:</span> ${stack}</p>

                    <p class="technologies"><span class="field-type">Technologies:</span> ${technologiesList}</p>
                  </div>

                  <p class="flip-card-prompt-to-click">Click to learn more</p> 
                </div>

                             
              </div>
            </div>
  </a>

        </div>
      </article>
    </li>
  `;
};

// *****************************************************

const makeListMarkup = (projectsArray) => {
  return `
  <ul class="project-card-list list-view">
    ${projectsArray.map((item) => makeItemMarkup(item)).join('')}
  </ul>`;
};

const projectCardsMarkup = makeListMarkup(projects);

const gallery = document.querySelector('#gallery');
gallery.innerHTML = projectCardsMarkup;

// *****************************************************

const switcher = document.querySelector('.projects-view-switch');
const cardList = document.querySelector('.project-card-list');

switcher.addEventListener('click', switchView);
cardList.addEventListener('click', handleCardListClicks);

// *****************************************************

function switchView() {
  cardList.classList.toggle('gallery-view');

  const isGallery = cardList.classList.contains('gallery-view');

  // Change button text
  switcher.innerHTML = `View as ${isGallery ? 'list' : 'tiles'}`;
}

// *****************************************************

function handleCardListClicks(event) {
  event.preventDefault();

  if (!event.target.matches('.project-card-link')) return;

  const id = event.target.dataset.id;
  openModal(id);
}
