import { getImagePaths } from './imagePaths';

// *********************************

const listSizes = '(max-width: 767px): 100vw, (max-width: 1279px) 450px, 490px';
const tileSizes = '(min-width: 768px) 350px, (min-width: 1440px) 400px';

function createSourceTag(fileName, cardType, colorPreference, isDark) {
  // cardType: 'list' | 'tile'
  // colorPreference: 'light' | 'dark'
  // isDark: boolean

  const paths = getImagePaths(fileName, isDark);
  console.log('createSourceTag fired: ');

  const sizes = cardType === 'list' ? listSizes : tileSizes;

  return /* html */ `
    <source
      srcset="
        ${paths.small} 370w,
        ${paths.medium} 480w,
        ${paths.large1x} 960w,
        ${paths.large2x} 1920w"
      sizes="${sizes}"
      media="(prefers-color-scheme: ${colorPreference})"
    />
  `;
}

// *********************************

function createPictureTag(name, fileName, cardType, isDarkThumbAvailable) {
  const sourceTagLight = createSourceTag(
    fileName,
    cardType,
    'light',
    isDarkThumbAvailable
  );
  const sourceTagDark = createSourceTag(
    fileName,
    cardType,
    'dark',
    isDarkThumbAvailable
  );
  const { imgMedium, imgLarge1x } = getImagePaths(fileName);
  const imgSrc = cardType === 'list' ? imgLarge1x : imgMedium;

  return /* html */ `
    <picture class="project-card-image">

      ${sourceTagLight}
      ${sourceTagDark}

      <img
      src="${imgSrc}"
      alt="${name} live page screenshot"
      loading="lazy"
      />
    </picture>
  `;
}

// *********************************

export default function createCardMarkup(project) {
  const {
    id,
    name,
    type,
    link,
    livePage,
    thumbFileName,
    isDarkThumbAvailable: isDark,
    description,
    stack,
    role,
    customer,
    technologies,
  } = project;

  const technologiesList = technologies.join(', ');

  const listPictureTag = createPictureTag(name, thumbFileName, 'list', isDark);
  const tilePictureTag = createPictureTag(name, thumbFileName, 'tile', isDark);

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
                >Live page</a
              >
            </div>

            <div class="list-card-summary">
              <div class="summary-items-wrapper">
                  <p class="type"><span class="field-type">Type:</span> ${type}</p>

                  <p class="customer"
                  style="${!customer && 'display: none'}">
                    <span class="field-type">Customer:</span> ${customer}
                  </p>

                  <p class="role"
                  style="${!role && 'display: none'}">
                    <span class="field-type">Role:</span> ${role}
                  </p>

                  <p class="stack"><span class="field-type">Stack:</span> ${stack}</p>
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
                    <p class="type"><span class="field-type">Type:</span> ${type}</p>

                    <p class="stack"><span class="field-type">Stack:</span> ${stack}</p>

                    <p class="technologies"><span class="field-type">Technologies:</span> ${technologiesList}</p>
                  </div>

                  <p class="flip-card-prompt-to-click">Click to learn more</p> 
                </div>

                             
              </div>
            </div>
          </a>

        </div>
      </article>
    </li>
  `;
}
