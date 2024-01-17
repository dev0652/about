import projects from '../data/github-links';

const handleMissingImage = ({ currentTarget }) => {
  currentTarget.onerror = null; // prevents looping
  // currentTarget.src = placeholderImage;
  currentTarget.src = 'https://placehold.co/400';
};

const makeImagePath = (path) => new URL(path, import.meta.url).href;

const makeItemMarkup = (project) => {
  const { name, type, link, thumb, description } = project;
  // const imagePath = thumb !== '' ? thumb : placeholderImage;
  const imagePath = makeImagePath(thumb);
  console.log('imagePath: ', imagePath);

  return `
   <li class="project-card ">
    <a class="project-card-link flip-card" href="${link}" target="_blank" rel="noopener noreferrer">

      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            class="project-card-image"
            src="${imagePath}"
            alt="${name} live page screenshot"
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
  </li>
  `;
};

const makeListMarkup = (projectsArray) => {
  return `
  <ul class="project-card-list">
    ${projectsArray.map((item) => makeItemMarkup(item)).join('')}
  </ul>`;
};

const projectCardsMarkup = makeListMarkup(projects);

const gallery = document.querySelector('#gallery');
gallery.innerHTML = projectCardsMarkup;
