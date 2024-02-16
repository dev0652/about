function makePlaceholderUrl(resolution, message = null) {
  let queryFromMessage = '';
  if (message) queryFromMessage = `?text=${message.split(' ').join('+')}`;

  const baseUrl = 'https://placehold.co/';
  const query = resolution + queryFromMessage;
  return baseUrl + query;
}

// *****************************************************

function getImageUrl(dir, name) {
  return new URL(`/images/projects/webp/${dir}/${name}.webp`, import.meta.url)
    .href;
}

// *****************************************************

export function getImagePaths(thumb) {
  const small = getImageUrl('small', thumb);
  const medium = getImageUrl('medium', thumb);
  const large1x = getImageUrl('large1x', thumb);
  const large2x = getImageUrl('large2x', thumb);

  const message = 'Image pending';

  const placeholderSmall = makePlaceholderUrl('370x208', message);
  const placeholderMedium = makePlaceholderUrl('480x270', message);
  const placeholderLarge1x = makePlaceholderUrl('960x540', message);
  const placeholderLarge2x = makePlaceholderUrl('1920x1080', message);

  const paths = {
    imgSmall: !thumb ? placeholderSmall : small,
    imgMedium: !thumb ? placeholderMedium : medium,
    imgLarge1x: !thumb ? placeholderLarge1x : large1x,
    imgLarge2x: !thumb ? placeholderLarge2x : large2x,
  };

  return paths;
}
