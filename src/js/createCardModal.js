import {
  getLocale,
  getLocalizedFieldValue,
  getLocalizedFieldName,
  getLocalizedString,
  getLocalizedStringFromArray,
} from '/js/localization';
import { makePictureTag } from '/js/imagePaths';
import translations from '/data/translations.json' assert { type: 'json' };
import { constants } from '/constants';

const { MEDIA_QUERIES } = constants;

export function createCardModal(project) {
  const locale = getLocale();
  const isMobile = MEDIA_QUERIES.mobile.matches;

  if (!project) return translations[locale].errors.contentLoadingError;

  const {
    name,
    type,
    link,
    livePage,
    images,
    hasDarkVersion,
    description,
    stack: projStack,
    isRole,
    role,
    customer,
    technologies,
  } = project;

  const modalPictureTag = makePictureTag(name, images, 'modal', hasDarkVersion);

  const technologiesList = technologies.join(', ');
  const stack = projStack.join(', ');

  const projType = getLocalizedString(type, 'projectTypes');
  const myRole = isRole
    ? getLocalizedStringFromArray(role, 'projectRoles')
    : '';

  const projDescription = getLocalizedFieldValue(description);

  const typeFieldName = getLocalizedFieldName('type');
  const stackFieldName = getLocalizedFieldName('stack');
  const roleFieldName = getLocalizedFieldName('role');
  const customerFieldName = getLocalizedFieldName('customer');
  const technologiesFieldName = getLocalizedFieldName('technologies');
  const livePageButtonText = getLocalizedFieldName('live-page');

  return /* html */ `
    <article class="modal-card">
      <h2 class="modal-title">${name}</h2>

      <div class="modal-content-wrapper">

        <div class="modal-summary">
          <div class="summary-columns-wrapper">
            <div class="summary-column">
              <p>
                <span class="field-type">${typeFieldName}</span><span class="field-type">:</span> ${projType}
              </p>

              <p class="stack">
                <span class="field-type">${stackFieldName}</span><span class="field-type">:</span> ${stack}
              </p>
            </div>

            <div class="summary-column">
              <p style="${!isRole && 'display: none'}">
                <span class="field-type">${roleFieldName}</span><span class="field-type">:</span> ${myRole}
              </p>

              <p style="${customer === '' && 'display: none'}">
                <span class="field-type">${customerFieldName}</span><span class="field-type">:</span> ${customer}
              </p>
            </div>
          </div>

          <p>
            <span style="${isMobile && 'display: none'}">
              <span class="field-type">${technologiesFieldName}</span><span class="field-type">:</span>
            </span> <span class="technologies" lang="en">${technologiesList}</span>
          </p>
        </div>

        <div class="modal-image-block">${modalPictureTag}</div>

        <div class="modal-description">
          <p class="project-description">${projDescription}</p>
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
