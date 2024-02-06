export default function createModal(project) {
  const {
    name,
    type,
    link,
    livePage,
    thumbFilename,
    description,
    stack,
    role,
    customer,
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

  const roleDisplay = role ? '' : 'display: none';
  const customerDisplay = customer ? '' : 'display: none';

  return /* html */ `
      <article>
        <h2 class="modal-title">${name}</h2>

        <div class="modal-content-wrapper">

          <div class="modal-heading">
            <div class="heading-columns-wrapper">
              <div class="heading-column">
                <p class="type"><span class="field-type">Project type:</span> ${type}</p>

                <p class="stack"><span class="field-type">Stack:</span> ${stack}</p>
              </div>

              <div class="heading-column">
                <p class="role" style="${roleDisplay}"><span class="field-type">Role:</span> ${role}</p>

                <p class="customer" style="${customerDisplay}"><span class="field-type">Customer:</span> ${customer}</p>
              </div>
            </div>

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
              class="modal-project-link"
              href="${link}"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub</a
            >

            <a
              class="modal-project-link"
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
