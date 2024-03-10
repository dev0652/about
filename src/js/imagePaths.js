// *********************************

function makePlaceholderUrl(resolution, message = null, isDarkThumb = false) {
  // https://placehold.co/600x400/2A3439/808080/webp?text=Image+pending
  const baseUrl = 'https://placehold.co/';
  const colors = isDarkThumb ? '/2A3439/808080' : '';
  const extension = '/webp';
  const parameter = message ? `?text=${message.split(' ').join('+')}` : '';

  return baseUrl + resolution + colors + extension + parameter;
}

// *********************************

function getImageUrl(dir, name, isDarkThumb) {
  const fileName = isDarkThumb ? name + '_dark' : name;
  console.log('fileName: ', fileName);

  return new URL(
    `/images/projects/webp/${dir}/${fileName}.webp`,
    import.meta.url
  ).href;
}

// *********************************

const res = {
  small: '370x208',
  medium: '480x270',
  large1x: '960x540',
  large2x: '1920x1080',
};

const message = 'Image pending';

function getImagePaths(fileName, isDarkThumb = false) {
  //
  const small = getImageUrl('small', fileName, isDarkThumb);
  const medium = getImageUrl('medium', fileName, isDarkThumb);
  const large1x = getImageUrl('large1x', fileName, isDarkThumb);
  const large2x = getImageUrl('large2x', fileName, isDarkThumb);

  const placeholderSmall = makePlaceholderUrl(res.small, message, isDarkThumb);
  const placeholderMedium = makePlaceholderUrl(
    res.large1x,
    message,
    isDarkThumb
  );
  const placeholderLarge1x = makePlaceholderUrl(
    res.large1x,
    message,
    isDarkThumb
  );
  const placeholderLarge2x = makePlaceholderUrl(
    res.large2x,
    message,
    isDarkThumb
  );

  return {
    small: fileName ? small : placeholderSmall,
    medium: fileName ? medium : placeholderMedium,
    large1x: fileName ? large1x : placeholderLarge1x,
    large2x: fileName ? large2x : placeholderLarge2x,
  };
}

// *********************************

const listSizes = '(max-width: 767px): 100vw, (max-width: 1279px) 450px, 490px';
const tileSizes = '(min-width: 768px) 350px, (min-width: 1440px) 400px';
const modalSizes =
  '(max-width: 400px): 100vw, (min-width: 768px) 520px, (min-width: 1280px) 620px';

// *********************************

function createSourceTag(fileName, cardType, colorPreference, isDarkThumb) {
  // cardType: 'list' | 'tile' | 'modal'
  // colorPreference: 'light' | 'dark'
  // isDarkThumb: boolean

  const paths = getImagePaths(fileName, isDarkThumb);

  let sizes;

  switch (cardType) {
    case 'list':
      sizes = listSizes;
      break;
    case 'tile':
      sizes = tileSizes;
      break;
    case 'modal':
      sizes = modalSizes;
  }

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

export function createPictureTag(name, fileName, cardType, isDarkThumb) {
  //
  const sourceTagLight = createSourceTag(fileName, cardType, 'light');

  const sourceTagDark = createSourceTag(
    fileName,
    cardType,
    'dark',
    isDarkThumb
  );

  const { medium, large1x } = getImagePaths(fileName);

  // Pick large1x for 'list' and 'modal', medium for 'tile'
  const imgSrc = cardType === 'tile' ? medium : large1x;

  const loadingMode = cardType === 'list' ? 'eager' : 'lazy';

  return /* html */ `
    <picture class="project-card-image">

      ${sourceTagLight}
      ${sourceTagDark}

      <img
      src="${imgSrc}"
      alt="${name} live page screenshot"
      loading="${loadingMode}"
      />
    </picture>
  `;
}
