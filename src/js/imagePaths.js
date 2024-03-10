function makePlaceholderUrl(resolution, message = null, isDark = false) {
  // https://placehold.co/600x400/2A3439/808080/webp?text=Image+pending
  const baseUrl = 'https://placehold.co/';
  const colors = isDark ? '/2A3439/808080' : '';
  const extension = '/webp';
  const parameter = message ? `?text=${message.split(' ').join('+')}` : '';

  return baseUrl + resolution + colors + extension + parameter;
}

// *********************************

function getImageUrl(dir, name, isDark = false) {
  const fileName = isDark ? name + '_dark' : name;
  return new URL(
    `/images/projects/webp/${dir}/${fileName}.webp`,
    import.meta.url
  ).href;
}

// *********************************

const message = 'Image pending';

export function getImagePaths(fileName, isDark = false) {
  const suffix = isDark ? 'Dark' : '';

  const propNameSmall = 'imgSmall' + suffix;
  const propNameMedium = 'imgMedium' + suffix;
  const propNameLarge1x = 'imgLarge1x' + suffix;
  const propNameLarge2x = 'imgLarge2x' + suffix;

  const small = getImageUrl('small', fileName, isDark);
  const medium = getImageUrl('medium', fileName, isDark);
  const large1x = getImageUrl('large1x', fileName, isDark);
  const large2x = getImageUrl('large2x', fileName, isDark);

  const placeholderSmall = makePlaceholderUrl('370x208', message, isDark);
  const placeholderMedium = makePlaceholderUrl('480x270', message, isDark);
  const placeholderLarge1x = makePlaceholderUrl('960x540', message, isDark);
  const placeholderLarge2x = makePlaceholderUrl('1920x1080', message, isDark);

  return {
    [propNameSmall]: !fileName ? placeholderSmall : small,
    [propNameMedium]: !fileName ? placeholderMedium : medium,
    [propNameLarge1x]: !fileName ? placeholderLarge1x : large1x,
    [propNameLarge2x]: !fileName ? placeholderLarge2x : large2x,
  };
}
