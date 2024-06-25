import { getLocale } from './localization';
import {
  getProjectCardFieldNames,
  getProjectCardFieldValues,
} from './projects';
import { makePictureTag } from './imagePaths';
import translations from '/data/translations.json' assert { type: 'json' };
import { constants } from '/constants';

const { MEDIA_QUERIES } = constants;

export function createCardModal(project) {
  const locale = getLocale();
  if (!project) return translations[locale].errors.contentLoadingError;

  const isMobile = MEDIA_QUERIES.mobile.matches;
  const { name, link, livePage, images, hasDarkVersion, isRole, customer } =
    project;

  const modalPictureTag = makePictureTag(name, images, 'modal', hasDarkVersion);

  const fieldNames = getProjectCardFieldNames('card');
  const values = getProjectCardFieldValues(project);

  return /* html */ `
    <article class="modal-card">
      <h2 class="modal-title">${name}</h2>

      <div class="modal-content-wrapper">

        <div class="modal-summary">
          <div class="summary-columns-wrapper">
            <div class="summary-column">
              <p>
                <span class="field-type">${fieldNames.type}</span><span class="field-type">:</span> ${values.type}
              </p>

              <p class="stack">
                <span class="field-type">${fieldNames.stack}</span><span class="field-type">:</span> ${values.stack}
              </p>
            </div>

            <div class="summary-column">
              <p style="${!isRole && 'display: none'}">
                <span class="field-type">${fieldNames.role}</span><span class="field-type">:</span> ${values.role}
              </p>

              <p style="${customer === '' && 'display: none'}">
                <span class="field-type">${fieldNames.customer}</span><span class="field-type">:</span> ${customer}
              </p>
            </div>
          </div>

          <p>
            <span style="${isMobile && 'display: none'}">
              <span class="field-type">${fieldNames.technologies}</span><span class="field-type">:</span>
            </span> <span class="technologies" lang="en">${values.technologies}</span>
          </p>
        </div>

        <div class="modal-image-block">${modalPictureTag}</div>

        <div class="modal-description">
          <p class="project-description">${values.description}</p>
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
          >${fieldNames.livePageBtn}</a
        >
      </div>
    </article>
  `;
}
