import translations from '/data/translations.json' assert { type: 'json' };
import { constants } from '/constants';
import { getLocale } from '/js/localization';
import { urlFor } from '../sanity';

const { IMAGE_SIZE_NAMES, LOCALE_UKR, LS_COLOR_SCHEME_KEY } = constants;

const { small, medium, large1x, large2x } = IMAGE_SIZE_NAMES;

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

function getImagePaths(images, isDarkVersion = false) {
  const imgPaths = {};

  for (const key in IMAGE_SIZE_NAMES) {
    const imgName = isDarkVersion ? key + '_dark' : key;
    imgPaths[key] = urlFor(images[imgName]);
  }

  return imgPaths;
}

function makeSourceTag(
  images,
  imageOrigin,
  colorScheme,
  hasDarkVersion = false
) {
  let imageType = 'svg';
  let sizes = '';
  let srcset = placeholderUrl[colorScheme];
  let media = `(prefers-color-scheme: ${colorScheme})`;
  let dataMedia = '';

  const isModal = imageOrigin === 'modal';

  if (images) {
    const isDarkVersion =
      colorScheme === 'dark' && hasDarkVersion ? true : false;

    const paths = getImagePaths(images, isDarkVersion);

    imageType = 'webp';
    sizes = sizesString[imageOrigin];
    srcset = `
        ${paths[small]} 370w,
        ${paths[medium]} 480w,
        ${paths[large1x]} 960w,
        ${paths[large2x]} 1920w
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
  projectImages,
  imageOrigin,
  hasDarkVersion
) {
  const sourceTagLight = makeSourceTag(projectImages, imageOrigin, 'light');
  const sourceTagDark = makeSourceTag(
    projectImages,
    imageOrigin,
    'dark',
    hasDarkVersion
  );

  const medium = urlFor(projectImages.medium);
  const large1x = urlFor(projectImages.large1x);

  // large1x for 'list' & 'modal', medium for 'tile'
  const imgSrc = imageOrigin === 'tile' ? medium : large1x;

  // <img src={urlFor(mysteryPerson.mugshot).width(480).height(270).format('webp').fit(clip).url()}>

  // eager for 'list' & 'modal', lazy for 'tile'
  const loadingMode = imageOrigin === 'tile' ? 'lazy' : 'eager';

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
