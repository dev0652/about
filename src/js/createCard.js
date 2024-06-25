import { getLocale } from './localization';
import {
  getProjectCardFieldNames,
  getProjectCardFieldValues,
} from './projects';

import { makePictureTag } from './imagePaths';
import translations from '/data/translations.json' assert { type: 'json' };

export function createCardMarkup(project) {
  const locale = getLocale();
  if (!project) return translations[locale].errors.contentLoadingError;

  const {
    id,
    name,
    type,
    link,
    livePage,
    images,
    hasDarkVersion,
    isRole,
    customer,
  } = project;

  const listPictureTag = makePictureTag(name, images, 'list', hasDarkVersion);
  const tilePictureTag = makePictureTag(name, images, 'tile', hasDarkVersion);

  const fieldNames = getProjectCardFieldNames('card');
  const values = getProjectCardFieldValues(project);

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
                >${fieldNames.livePageBtn}</a
              >
            </div>

            <div class="list-card-summary">
              <div class="summary-items-wrapper">
                  <p>
                    <span class="field-type">${fieldNames.type}</span><span class="field-type">:</span> ${values.type}
                  </p>

                  <p style="${customer === '' && 'display: none'}">
                    <span class="field-type">${fieldNames.customer}</span><span class="field-type">:</span> ${customer}
                  </p>

                  <p style="${!isRole && 'display: none'}">
                    <span class="field-type">${fieldNames.role}</span><span class="field-type">:</span> ${values.role}
                  </p>

                  <p>
                    <span class="field-type">${fieldNames.stack}</span><span class="field-type">:</span> <span lang="en">${values.stack}</span>
                  </p>
              </div>

              <p>
                <span class="only-desktop">
                  <span class="field-type">${fieldNames.technologies}</span><span class="field-type">:</span>
                </span> <span class="technologies" lang="en">${values.technologies}</span>
              </p>
            </div>

            <div class="list-card-description">
              <p class="project-description">${values.description}</p>
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
                    <p class="type"><span class="field-type">${fieldNames.type}</span><span class="field-type">:</span> ${type}</p>

                    <p class="stack"><span class="field-type">${fieldNames.stack}</span><span class="field-type">:</span> <span lang="en">${values.stack}</span></p>

                    <p class="technologies"><span class="field-type">${fieldNames.technologies}</span><span class="field-type">:</span> <span lang="en">${values.technologies}</span></p>
                  </div>

                  <p class="flip-card-prompt-to-click">${fieldNames.flipCardPrompt}</p> 
                </div> 
              </div>
            </div>
          </a>

        </div>
      </article>
    </li>
  `;
}
