export default function createModal(project) {
  const {
    name,
    type,
    link,
    livePage,
    thumbFilename,
    description,
    technologies,
  } = project;

  const largeUrl1x = new URL(
    `../images/projects/large/${thumbFilename}.png`,
    import.meta.url
  ).href;

  const largeUrl2x = new URL(
    `../images/projects/large/${thumbFilename}.png`,
    import.meta.url
  ).href;

  const placeholder1x = 'https://placehold.co/400x250?text=Image+pending';
  const placeholder2x = 'https://placehold.co/800x500?text=Image+pending';

  const isFileName = thumbFilename !== '' && thumbFilename !== undefined;

  const imagePath1x = isFileName ? largeUrl1x : placeholder1x;
  const imagePath2x = isFileName ? largeUrl2x : placeholder2x;

  const technologiesList = technologies.join(', ');

  return /* html */ `
      <article class="modal-article">
        <h2 class="modal-title">${name}</h2>

        <div class="modal-content-wrapper">

          <div class="modal-heading">
            <p class="project-type">${type}</p>
            <p class="technologies">${technologiesList}</p>
          </div>

          <div class="modal-image-block">
            <img
              class="project-card-image"
              srcset="${imagePath1x} 1x, ${imagePath2x} 2x"
              src="${imagePath1x}"
              alt="${name} live page screenshot"
            />
          </div>

          <div class="modal-description">
            <p class="project-description">${description}</p>
          </div>
          
          <div class="modal-project-links-wrapper">
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

        </div>
      </article>
  `;
}
