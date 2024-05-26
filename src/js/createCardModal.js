import { makePictureTag } from '/js/imagePaths';
import { getLocalizedField, getLocalizedFieldName } from '/js/localization';

import translations from '/data/translations.json' assert { type: 'json' };
import { constants } from '/constants';

// *********************************

const { englishLocaleCode } = constants;

export function createCardModal(project) {
  //
  const locale = window.locale ? window.locale : englishLocaleCode;

  if (!project) return translations[locale].loadingError;

  const {
    name,
    type: projType,
    link,
    livePage,
    thumbFileName,
    hasDarkVersion: hasDark,
    description: projDescription,
    stack,
    role: projRole,
    customer,
    technologies,
  } = project;

  const modalPictureTag = makePictureTag(name, thumbFileName, 'modal', hasDark);

  const technologiesList = technologies.join(', ');

  const type = getLocalizedField(projType);
  const role = getLocalizedField(projRole);
  const description = getLocalizedField(projDescription);

  const typeFieldName = getLocalizedFieldName('project-type');
  const stackFieldName = getLocalizedFieldName('stack');
  const roleFieldName = getLocalizedFieldName('role');
  const customerFieldName = getLocalizedFieldName('customer');
  const livePageButtonText = getLocalizedFieldName('live-page');

  return /* html */ `
    <article class="modal-card">
      <h2 class="modal-title">${name}</h2>

      <div class="modal-content-wrapper">

        <div class="modal-summary">
          <div class="summary-columns-wrapper">
            <div class="summary-column">
              <p class="type"><span class="field-type">${typeFieldName}</span><span class="field-type">:</span> ${type}</p>

              <p class="stack"><span class="field-type">${stackFieldName}</span><span class="field-type">:</span> ${stack}</p>
            </div>

            <div class="summary-column">
              <p class="role"
              style="${!role && 'display: none'}">
                <span class="field-type">${roleFieldName}</span><span class="field-type">:</span> ${role}
              </p>

              <p class="customer"
              style="${!customer && 'display: none'}">
                <span class="field-type">${customerFieldName}</span><span class="field-type">:</span> ${customer}
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
          class="modal-project-link live-page-link"
          href="${livePage}"
          target="_blank"
          rel="noopener noreferrer"
          >${livePageButtonText}</a
        >
      </div>
    </article>
  `;
}
