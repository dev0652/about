import { makePlaceholderUrl } from './shared';

export default function createCardMarkup(project) {
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

  // *****************************************************

  const root = '../images/projects';
  const message = 'Image pending';

  const small = new URL(`${root}/small/${thumb}.png`, import.meta.url).href;
  const medium = new URL(`${root}/medium/${thumb}.png`, import.meta.url).href;
  const large1x = new URL(`${root}/large1x/${thumb}.png`, import.meta.url).href;
  const large2x = new URL(`${root}/large2x/${thumb}.png`, import.meta.url).href;

  const placeholderSmall = makePlaceholderUrl('370x208', message);
  const placeholderMedium = makePlaceholderUrl('480x270', message);
  const placeholderLarge1x = makePlaceholderUrl('960x540', message);
  const placeholderLarge2x = makePlaceholderUrl('1920x1080', message);

  const imagePathSmall = !thumb ? placeholderSmall : small;
  const imagePathMedium = !thumb ? placeholderMedium : medium;
  const imagePathLarge1x = !thumb ? placeholderLarge1x : large1x;
  const imagePathLarge2x = !thumb ? placeholderLarge2x : large2x;

  const technologiesList = technologies.join(', ');

  return /* html */ `
    <li class="project-card">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" data-id="${name}">${name}</h2>

        <div class="list-card collapsible">
          <div class="list-card-wrapper">
            <div class="list-card-image-block">
              <img
                class="project-card-image"
                srcset="
                  ${imagePathSmall} 370w,
                  ${imagePathMedium} 480w,
                  ${imagePathLarge1x} 960w,
                  ${imagePathLarge2x} 1920w"
                sizes="(min-width: 768px) 480px"
                src="${imagePathLarge1x}"
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

            <div class="list-card-summary">
              <div class="summary-items-wrapper">
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

            <div class="list-card-description">
              <p class="project-description">${description}</p>
            </div>  

          </div>
        </div>

        <div class="tile-card">
          <a
            class="tile-card-link flip-card"
            href="#"
            data-id="${id}"
          >
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  class="project-card-image"
                  srcset="
                    ${imagePathSmall} 370w,
                    ${imagePathMedium} 480w,
                    ${imagePathLarge1x} 960w,
                    ${imagePathLarge2x} 1920w"
                  sizes="(min-width: 768px) 350px, (min-width: 1440px) 400px"
                  src="${imagePathMedium}"
                  alt="${name} live page screenshot"
                  loading="lazy"
                />
              </div>

              <div class="flip-card-back">
                <h3 class="flip-card-project-name">${name}</h3>

                <div class="tile-card-project-summary">
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
}
