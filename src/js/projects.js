import projects from '../data/github-links';

const handleMissingImage = ({ currentTarget }) => {
  currentTarget.onerror = null; // prevents looping
  // currentTarget.src = placeholderImage;
  currentTarget.src = 'https://placehold.co/400';
};

const makeItemMarkup = (project) => {
  const { name, type, link, thumbFilename, description } = project;

  const thumbUrl1x = new URL(
    `../images/projects/thumbs/400x250/${thumbFilename}.webp`,
    import.meta.url
  ).href;

  const thumbUrl2x = new URL(
    `../images/projects/thumbs/800x500/${thumbFilename}.webp`,
    import.meta.url
  ).href;

  const placeholder1x = 'https://placehold.co/400x250?text=Image+pending';
  const placeholder2x = 'https://placehold.co/800x500?text=Image+pending';

  const isFileName = thumbFilename !== '';

  const imagePath1x = isFileName ? thumbUrl1x : placeholder1x;
  const imagePath2x = isFileName ? thumbUrl2x : placeholder2x;

  return `
  <li class="project-card ">
      <h2 class="card-title collapsible-toggle" data-id="${name}">${name}</h2>

      <div class="card-collapsible-wrapper transition">
        <div class="card-collapsible">
          <a
            class="project-card-link flip-card"
            href="${link}"
            target="_blank"
            rel="noopener noreferrer"
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
                  onError="${handleMissingImage}"
                />
              </div>

              <div class="flip-card-back">
                <h3 class="project-name">${name}</h3>
                <p class="project-type">${type}</p>
                <p class="project-description">${description}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </li>
  `;
};

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

const cardList = document.querySelector('.project-card-list');
const switcher = document.querySelector('.projects-view-switch');
const wrappers = document.querySelectorAll('.card-collapsible-wrapper');

switcher.addEventListener('click', switchView);

function switchView() {
  // Toggle view
  cardList.classList.toggle('gallery-view');
  const isGallery = cardList.classList.contains('gallery-view');

  // Change button text
  switcher.innerHTML = `Switch to ${isGallery ? 'list' : 'gallery'}`;

  if (isGallery) {
    // Remove transition to avoid content flashing when switching to list view
    wrappers.forEach((wrapper) => wrapper.classList.remove('transition'));
  } else {
    // Turn transition back on after switching to list view
    setTimeout(() => {
      wrappers.forEach((wrapper) => wrapper.classList.add('transition'));
    }, 0);
  }
}
