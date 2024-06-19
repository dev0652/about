import {
  getLocale,
  getLocalizedField,
  getLocalizedFieldName,
} from '/js/localization';
import { makePictureTag } from '/js/imagePaths';
import translations from '/data/translations.json' assert { type: 'json' };

export function createCardMarkup(project) {
  const locale = getLocale();

  if (!project) return translations[locale].loadingError;

  const {
    id,
    name,
    type: projType,
    link,
    livePage,
    images,
    hasDarkVersion: hasDark,
    description: projDescription,
    stack,
    role: projRole,
    customer,
    technologies,
  } = project;

  const listPictureTag = makePictureTag(name, images, 'list', hasDark);
  const tilePictureTag = makePictureTag(name, images, 'tile', hasDark);

  const technologiesList = technologies.join(', ');

  const type = getLocalizedField(projType);
  const role = getLocalizedField(projRole);
  const description = getLocalizedField(projDescription);

  const typeFieldName = getLocalizedFieldName('project-type');
  const stackFieldName = getLocalizedFieldName('stack');
  const roleFieldName = getLocalizedFieldName('role');
  const customerFieldName = getLocalizedFieldName('customer');
  const technologiesFieldName = getLocalizedFieldName('technologies');
  const livePageButtonText = getLocalizedFieldName('live-page');
  const flipCardPrompt = getLocalizedFieldName('flip-card-prompt');

  return /* html */ `
    <li class="project-card" tabindex="-1">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" aria-expanded="false" aria-controls="collapsible-${name}" tabindex="0" data-id="${name}" lang="en">${name}</h2>

        <div class="list-card collapsible" id="collapsible-${name}">
          <div class="list-card-wrapper">
            <div class="list-card-image-block">${listPictureTag}</div>

            <div class="project-links-wrapper">
              <a
                class="project-link"
                href="${link}"
                target="_blank"
                rel="noopener noreferrer"
                tabindex="-1"
                lang="en"
                >GitHub</a
              >

              <a
                class="project-link live-page-link"
                href="${livePage}"
                target="_blank"
                rel="noopener noreferrer"
                tabindex="-1"
                >${livePageButtonText}</a
              >
            </div>

            <div class="list-card-summary">
              <div class="summary-items-wrapper">
                  <p class="type"><span class="field-type">${typeFieldName}</span><span class="field-type">:</span> ${type}</p>

                  <p class="customer"
                  style="${!customer && 'display: none'}">
                    <span class="field-type">${customerFieldName}</span><span class="field-type">:</span> ${customer}
                  </p>

                  <p class="role"
                  style="${!role && 'display: none'}">
                    <span class="field-type">${roleFieldName}</span><span class="field-type">:</span> ${role}
                  </p>

                  <p class="stack"><span class="field-type">${stackFieldName}</span><span class="field-type">:</span> <span lang="en">${stack}</span></p>
              </div>

              <p class="technologies" lang="en">${technologiesList}</p>
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
              <div class="flip-card-front">${tilePictureTag}</div>

              <div class="flip-card-back"  tabindex="-1">
                <h3 class="flip-card-project-name">${name}</h3>

                <div class="tile-card-project-summary">
                  <div>
                    <p class="type"><span class="field-type">${typeFieldName}</span><span class="field-type">:</span> ${type}</p>

                    <p class="stack"><span class="field-type">${stackFieldName}</span><span class="field-type">:</span> <span lang="en">${stack}</span></p>

                    <p class="technologies"><span class="field-type">${technologiesFieldName}</span><span class="field-type">:</span> <span lang="en">${technologiesList}</span></p>
                  </div>

                  <p class="flip-card-prompt-to-click">${flipCardPrompt}</p> 
                </div> 
              </div>
            </div>
          </a>

        </div>
      </article>
    </li>
  `;
}
