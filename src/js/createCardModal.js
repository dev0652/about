import { makePictureTag } from './imagePaths';

// *********************************

export function createCardModal(project) {
  const {
    name,
    type,
    link,
    livePage,
    thumbFileName,
    doesHaveDarkVersion: isDark,
    description,
    stack,
    role,
    customer,
    technologies,
  } = project;

  const modalPictureTag = makePictureTag(name, thumbFileName, 'modal', isDark);

  const technologiesList = technologies.join(', ');

  return /* html */ `
    <article class="modal-card">
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

        <div class="modal-image-block">${modalPictureTag}</div>

        <div class="modal-description">
          <p class="project-description">${description}</p>
        </div>
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
    </article>
  `;
}
