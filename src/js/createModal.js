import { makePlaceholderUrl } from './shared';

export default function createModal(project) {
  const {
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

  const root = '/images/projects';
  const message = 'Image pending';

  const small = new URL(`/images/projects/small/${thumb}.png`, import.meta.url)
    .href;
  const medium = new URL(
    `/images/projects/medium/${thumb}.png`,
    import.meta.url
  ).href;
  const large1x = new URL(
    `/images/projects/large1x/${thumb}.png`,
    import.meta.url
  ).href;
  const large2x = new URL(
    `/images/projects/large2x/${thumb}.png`,
    import.meta.url
  ).href;

  const placeholderSmall = makePlaceholderUrl('370x208', message);
  const placeholderMedium = makePlaceholderUrl('480x270', message);
  const placeholderLarge1x = makePlaceholderUrl('960x540', message);
  const placeholderLarge2x = makePlaceholderUrl('1920x1080', message);

  const imagePathSmall = !thumb ? placeholderSmall : small;
  const imagePathMedium = !thumb ? placeholderMedium : medium;
  const imagePathLarge1x = !thumb ? placeholderLarge1x : large1x;
  const imagePathLarge2x = !thumb ? placeholderLarge2x : large2x;

  const technologiesList = technologies.join(', ');

  // *****************************************************

  return /* html */ `
      <article>
        <h2 class="modal-title">${name}</h2>

        <div class="modal-content-wrapper">

          <div class="modal-summary">
            <div class="summary-columns-wrapper">
              <div class="summary-column">
                <p class="type"><span class="field-type">Project type:</span> ${type}</p>

                <p class="stack"><span class="field-type">Stack:</span> ${stack}</p>
              </div>

              <div class="summary-column">
                <p class="role"
                style="${!role && 'display: none'}">
                  <span class="field-type">Role:</span> ${role}
                </p>

                <p class="customer"
                style="${!customer && 'display: none'}">
                  <span class="field-type">Customer:</span> ${customer}
                </p>
              </div>
            </div>

            <p class="technologies">${technologiesList}</p>
          </div>

          <div class="modal-image-block">
            <img
              class="project-card-image"
              srcset="
                ${imagePathSmall} 370w,
                ${imagePathMedium} 480w,
                ${imagePathLarge1x} 960w,
                ${imagePathLarge2x} 1920w"
              sizes="(max-width: 400px): 100vw, (min-width: 768px) 520px, (min-width: 1280px) 620px"
              src="${imagePathLarge1x}"
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
