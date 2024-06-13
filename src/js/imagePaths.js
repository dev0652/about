import translations from '/data/translations.json' assert { type: 'json' };
import { constants } from '/constants';
import { getLocale } from '/js/localization';

const { IMAGE_SIZE_NAMES, LOCALE_UKR, LS_COLOR_SCHEME_KEY } = constants;

const sizesString = {
  list: '(max-width: 767px): 100vw, (max-width: 1279px) 550px, 600px',
  tile: '(max-width: 400px): 100vw, (max-width: 1279px) 325px, 400px',
  modal: '(max-width: 400px): 100vw, (max-width: 1279px) 520px, 620px',
};

const placeholderUrl = {
  light: makePlaceholderUrl('light'),
  dark: makePlaceholderUrl('dark'),
};

function makePlaceholderUrl(scheme) {
  const baseName = 'placeholder';
  const fileName = scheme === 'dark' ? baseName + '_' + scheme : baseName;
  return new URL(`/images/projects/svg/${fileName}.svg`, import.meta.url).href;
}

function makeImageUrl(dirName, fileName, isDark) {
  const name = isDark ? fileName + '_dark' : fileName;
  return new URL(
    `/images/projects/webp/${dirName}/${name}.webp`,
    import.meta.url
  ).href;
}

function getImagePaths(fileName, willCreateDark) {
  const pathsObj = {};

  for (const key in IMAGE_SIZE_NAMES) {
    pathsObj[key] = makeImageUrl(key, fileName, willCreateDark);
  }

  return pathsObj;
}

function makeSourceTag(
  fileName,
  imgLocation,
  colorScheme,
  hasDarkVersion = false
) {
  let imageType = 'svg';
  let sizes = '';
  let srcset = placeholderUrl[colorScheme];
  let media = `(prefers-color-scheme: ${colorScheme})`;
  let dataMedia = '';

  const isModal = imgLocation === 'modal';

  if (fileName) {
    const willCreateDark =
      colorScheme === 'dark' && hasDarkVersion ? true : false;

    const paths = getImagePaths(fileName, willCreateDark);

    imageType = 'webp';
    sizes = sizesString[imgLocation];
    srcset = `
        ${paths.small} 370w,
        ${paths.medium} 480w,
        ${paths.large1x} 960w,
        ${paths.large2x} 1920w
        `;

    if (isModal) {
      const savedScheme = localStorage.getItem(LS_COLOR_SCHEME_KEY);

      if (savedScheme) {
        dataMedia = `(prefers-color-scheme: ${colorScheme})`;
        media = savedScheme === colorScheme ? 'all' : 'none';
      }
    }
  }

  return /* html */ `
    <source  
      srcset="${srcset}"
      sizes="${sizes}"
      media="${media}"
      data-media="${dataMedia}"
      type="image/${imageType}"
    />
  `;
}

function makeImageAltAttr(projectName) {
  const locale = getLocale();

  const defaultAltText = 'live page screenshot';
  const altText = translations
    ? translations[locale]['project-image-alt-text']
    : defaultAltText;

  const altArr = [projectName, altText];
  if (locale === LOCALE_UKR) altArr.reverse();

  return altArr.join(' ');
}

// ***** Resulting function: ****************************

export function makePictureTag(
  projectName,
  fileName,
  imgLocation,
  hasDarkVersion
) {
  // fileName, imgLocation, colorPreference: 'light' | 'dark', hasDarkVersion = false
  const sourceTagLight = makeSourceTag(fileName, imgLocation, 'light');
  const sourceTagDark = makeSourceTag(
    fileName,
    imgLocation,
    'dark',
    hasDarkVersion
  );

  const { medium, large1x } = getImagePaths(fileName);

  // Pick large1x for 'list' & 'modal', and medium for 'tile'
  let imgSrc = large1x;
  let loadingMode = 'eager';

  if (imgLocation === 'tile') {
    imgSrc = medium;
    loadingMode = 'lazy';
  }

  const alt = makeImageAltAttr(projectName);

  return /* html */ `
    <picture class="project-card-picture-element">
      ${sourceTagLight}
      ${sourceTagDark}

      <img class="project-card-image error-handleable"
      src="${imgSrc}"
      alt="${alt}"
      loading="${loadingMode}"
      />
    </picture>
  `;
}
