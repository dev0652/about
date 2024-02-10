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

        <div class="list-card collapsible">
          <div class="list-card-wrapper">
            <div class="list-card-image-block">
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
}
