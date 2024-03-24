import { makePictureTag } from './imagePaths';

// *********************************

export function getLocalizedField(field) {
  const locale = window.locale ? window.locale : 'en';

  if (!field) return null;
  return field[locale] ? field[locale] : field.en;
}

export const loadingError = {
  en: 'Error loading project',
  uk: 'Помилка завантаження проекту',
};

// *********************************

export function createCardMarkup(project) {
  //
  const locale = window.locale ? window.locale : 'en';
  if (!project) return loadingError[locale];

  const {
    id,
    name,
    type: projType,
    link,
    livePage,
    thumbFileName,
    doesHaveDarkVersion,
    description: projDescription,
    stack,
    role: projRole,
    customer,
    technologies,
  } = project;

  const technologiesList = technologies.join(', ');
  const type = getLocalizedField(projType);
  const role = getLocalizedField(projRole);
  const description = getLocalizedField(projDescription);

  const listPictureTag = makePictureTag(
    name,
    thumbFileName,
    'list',
    doesHaveDarkVersion
  );

  const tilePictureTag = makePictureTag(
    name,
    thumbFileName,
    'tile',
    doesHaveDarkVersion
  );

  return /* html */ `
    <li class="project-card" tabindex="-1">
      <article class="fade-in">
        <h2 class="card-title collapsible-toggle" aria-expanded="false" aria-controls="collapsible-${name}" tabindex="0" data-id="${name}">${name}</h2>

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
                >GitHub</a
              >

              <a
                class="project-link"
                href="${livePage}"
                target="_blank"
                rel="noopener noreferrer"
                tabindex="-1"
                data-i18n-key="live-page"
                >Live page</a
              >
            </div>

            <div class="list-card-summary">
              <div class="summary-items-wrapper">
                  <p class="type"><span class="field-type"  data-i18n-key="type">Type</span><span class="field-type">:</span> ${type}</p>

                  <p class="customer"
                  style="${!customer && 'display: none'}">
                    <span class="field-type" data-i18n-key="customer">Customer</span><span class="field-type">:</span> ${customer}
                  </p>

                  <p class="role"
                  style="${!role && 'display: none'}">
                    <span class="field-type" data-i18n-key="role">Role</span><span class="field-type">:</span> ${role}
                  </p>

                  <p class="stack"><span class="field-type" data-i18n-key="stack">Stack</span><span class="field-type">:</span> ${stack}</p>
              </div>

              <p class="technologies">${technologiesList}</p>
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
              <div class="flip-card-front"> ${tilePictureTag}</div>

              <div class="flip-card-back">
                <h3 class="flip-card-project-name">${name}</h3>

                <div class="tile-card-project-summary">
                  <div>
                    <p class="type"><span class="field-type"  data-i18n-key="type">Type</span><span class="field-type">:</span> ${type}</p>

                    <p class="stack"><span class="field-type" data-i18n-key="stack">Stack</span><span class="field-type">:</span> ${stack}</p>

                    <p class="technologies"><span class="field-type" data-i18n-key="technologies">Technologies</span><span class="field-type">:</span> ${technologiesList}</p>
                  </div>

                  <p class="flip-card-prompt-to-click" data-i18n-key="flip-card-prompt">Click to learn more</p> 
                </div> 
              </div>
            </div>
          </a>

        </div>
      </article>
    </li>
  `;
}
