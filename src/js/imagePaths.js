import translations from '/data/translations.json' assert { type: 'json' };
import { constants } from '/constants';
import { getLocale } from '/js/localization';
import { urlFor } from '../sanity';

const { LOCALE_UKR, LS_KEYS, IMAGE_SIZES, IMAGE_SIZE_NAMES } = constants;

const { small, medium, large1x, large2x } = IMAGE_SIZE_NAMES;

const imageFormats = {
  webp: 'webp',
  svg: 'svg',
};

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

function getImagePaths(
  images,
  isDarkVersion = false,
  format = imageFormats.webp
) {
  const imgPaths = {};

  for (const key in IMAGE_SIZE_NAMES) {
    const source = isDarkVersion ? images.dark : images.light;

    imgPaths[key] = urlFor(source)
      .width(IMAGE_SIZES[key].width)
      .height(IMAGE_SIZES[key].height)
      .format(format)
      .fit('clip')
      .url();
  }

  return imgPaths;
}

function makeSourceTag(images, imageFor, colorScheme, hasDarkVersion = false) {
  let imageType = 'svg';
  let sizes = '';
  let srcset = placeholderUrl[colorScheme];
  let media = `(prefers-color-scheme: ${colorScheme})`;
  let dataMedia = '';

  const isModal = imageFor === 'modal';

  if (images) {
    const isDarkVersion =
      colorScheme === 'dark' && hasDarkVersion ? true : false;

    const paths = getImagePaths(images, isDarkVersion, imageFormats.webp);

    imageType = imageFormats.webp;
    sizes = sizesString[imageFor];
    srcset = `
        ${paths[small]} 370w,
        ${paths[medium]} 480w,
        ${paths[large1x]} 960w,
        ${paths[large2x]} 1920w
        `;

    if (isModal) {
      const savedScheme = localStorage.getItem(LS_KEYS.colorScheme);

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

export function makePictureTag(projectName, images, imageFor, hasDarkVersion) {
  const sourceTagLight = makeSourceTag(images, imageFor, 'light');
  const sourceTagDark = makeSourceTag(images, imageFor, 'dark', hasDarkVersion);

  const { medium, large1x } = getImagePaths(images);

  const imgSrc = imageFor === 'tile' ? medium : large1x; // large1x for 'list' & 'modal', medium for 'tile'

  const loadingMode = imageFor === 'tile' ? 'lazy' : 'eager'; // eager for 'list' & 'modal', lazy for 'tile'

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
