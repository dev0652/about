import projects from '../data/github-links';
// import imageUrl from '../images/barber.png';

const handleMissingImage = ({ currentTarget }) => {
  currentTarget.onerror = null; // prevents looping
  // currentTarget.src = placeholderImage;
  currentTarget.src = 'https://placehold.co/400';
};

const makeItemMarkup = (project) => {
  const { name, type, link, thumbFilename, description } = project;
  // const imagePath = thumb !== '' ? thumb : placeholderImage;

  // !!! the URL string must be static (not a variable) so it can be analyzed, otherwise the code will be left as is
  const thumbUrl = new URL(`../images/${thumbFilename}`, import.meta.url).href;

  return `
   <li class="project-card ">
    <a class="project-card-link flip-card" href="${link}" target="_blank" rel="noopener noreferrer">

      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            class="project-card-image"
            src="${thumbUrl}"
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
