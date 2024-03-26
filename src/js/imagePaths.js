import translations from '/data/translations.json' assert { type: 'json' };

// *********************************

// !!! May cause server blocking due to too many requests

// function makePlaceholderUrl(resolution, message, hasDarkVersion = false) {
//   if (!message) message = resolution;

//   // https://placehold.co/600x400/2A3439/808080/webp?text=Image+pending
//   const baseUrl = 'https://placehold.co/';
//   const colors = hasDarkVersion ? '/2A3439/808080' : '';
//   const extension = '/webp';
//   const text = `?text=${message.split(' ').join('+')}`;

//   return baseUrl + resolution + colors + extension + text;
// }

// const res = {small: '370x208', medium: '480x270', large1x: '960x540', large2x: '1920x1080'};

// *********************************

function getPlaceholderUrl(isDarkVersion = false) {
  const baseName = 'placeholder';
  const fileName = isDarkVersion ? baseName + '_dark' : baseName;

  return new URL(`/images/projects/svg/${fileName}.svg`, import.meta.url).href;
}

const placeholderUrl = {
  light: getPlaceholderUrl(),
  dark: getPlaceholderUrl(true),
};

// *********************************

const names = {
  small: 'small',
  medium: 'medium',
  large1x: 'large1x',
  large2x: 'large2x',
};

// *********************************

function getImageUrl(dirName, fileName, isDark) {
  const name = isDark ? fileName + '_dark' : fileName;

  return new URL(
    `/images/projects/webp/${dirName}/${name}.webp`,
    import.meta.url
  ).href;
}

function getImagePaths(fileName, willCreateDark) {
  return {
    [names.small]: getImageUrl(names.small, fileName, willCreateDark),
    [names.medium]: getImageUrl(names.medium, fileName, willCreateDark),
    [names.large1x]: getImageUrl(names.large1x, fileName, willCreateDark),
    [names.large2x]: getImageUrl(names.large2x, fileName, willCreateDark),
  };
}

// *********************************

const sizesString = {
  list: '(max-width: 767px): 100vw, (max-width: 1279px) 550px, 600px',
  tile: '(max-width: 400px): 100vw, (max-width: 1279px) 325px, 400px',
  modal: '(max-width: 400px): 100vw, (max-width: 1279px) 520px, 620px',
};

// *********************************

function makeSourceTag(
  fileName,
  imgLocation,
  colorPreference,
  hasDarkVersion = false
) {
  let imageType = 'svg';
  let sizes = '';
  let srcset = placeholderUrl[colorPreference];

  if (fileName) {
    let willCreateDark;

    if (colorPreference === 'light') {
      willCreateDark = false;
    } else if (hasDarkVersion) {
      willCreateDark = true;
    } else {
      willCreateDark = false;
    }

    const paths = getImagePaths(fileName, willCreateDark);

    imageType = 'webp';
    sizes = sizesString[imgLocation];
    srcset = `
        ${paths.small} 370w,
        ${paths.medium} 480w,
        ${paths.large1x} 960w,
        ${paths.large2x} 1920w
        `;
  }

  return /* html */ `
    <source  
      srcset="${srcset}"
      sizes="${sizes}"
      media="(prefers-color-scheme: ${colorPreference})"
      type="image/${imageType}"
    />
  `;
}

// ***** Resulting function: ****************************

export function makePictureTag(
  projectName,
  fileName,
  imgLocation,
  hasDarkVersion
) {
  // fileName, imgLocation, colorPreference: 'light' | 'dark', hasDarkVersion
  const sourceTagLight = makeSourceTag(fileName, imgLocation, 'light');
  const sourceTagDark = makeSourceTag(
    fileName,
    imgLocation,
    'dark',
    hasDarkVersion
  );

  const { medium, large1x } = getImagePaths(fileName);

  // Pick large1x for 'list' & 'modal', and medium for 'tile'
  const imgSrc = imgLocation === 'tile' ? medium : large1x;

  const loadingMode = imgLocation === 'list' ? 'eager' : 'lazy';

  const defaultAltText = 'live page screenshot';
  const locale = window.locale ? window.locale : 'en';
  const altText = translations
    ? translations[locale]['project-image-alt-text']
    : defaultAltText;
  const altArr = [projectName, altText];
  if (locale === 'uk') altArr.reverse();

  const alt = altArr.join(' ');

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
