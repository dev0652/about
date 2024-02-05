import projects from '../data/github-links';

const makeItemMarkup = (project) => {
  const {
    name,
    type,
    link,
    livePage,
    thumbFilename,
    description,
    technologies,
  } = project;

  const thumbUrl1x = new URL(
    `../images/projects/thumbs/400x250/${thumbFilename}.webp`,
    import.meta.url
  ).href;

  const thumbUrl2x = new URL(
    `../images/projects/thumbs/800x500/${thumbFilename}.webp`,
    import.meta.url
  ).href;

  const largeUrl = new URL(
    `../images/projects/large/${thumbFilename}.png`,
    import.meta.url
  ).href;

  const placeholder1x = 'https://placehold.co/400x250?text=Image+pending';
  const placeholder2x = 'https://placehold.co/800x500?text=Image+pending';

  const isFileName = thumbFilename !== '' && thumbFilename !== undefined;

  const imagePath1x = isFileName ? thumbUrl1x : placeholder1x;
  const imagePath2x = isFileName ? thumbUrl2x : placeholder2x;

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
                <!-- loading="lazy" -->
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
              <p class="project-type">${type}</p>
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
      </article>
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

const switcher = document.querySelector('.projects-view-switch');
const cardList = document.querySelector('.project-card-list');

switcher.addEventListener('click', switchView);

function switchView() {
  cardList.classList.toggle('gallery-view');

  const isGallery = cardList.classList.contains('gallery-view');

  // Change button text
  switcher.innerHTML = `Switch to ${isGallery ? 'list' : 'gallery'}`;
}
