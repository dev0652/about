const makeItemMarkup = (project) => {
  const { name, type, link, thumbFilename, description, technologies } =
    project;

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

  const technologiesList = technologies.join(', ');

  return html`
    <li class="project-card">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" data-id="${name}">${name}</h2>

        <div class="list-content collapsible">
          <div class="list-content-wrapper">
            <div class="list-content-image">
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

            <div class="list-content-meta">
              <div>
                <p class="project-type">${type}</p>
                <p class="technologies">${technologiesList}</p>
              </div>

              <p class="project-description">${description}</p>

              <button type="button" class="project-card-button">
                View more
              </button>
            </div>
          </div>
        </div>

        <div class="gallery-content">
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
      </article>
    </li>
  `;
};
