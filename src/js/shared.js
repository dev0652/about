export function makePlaceholderUrl(resolution, message = null) {
  let queryFromMessage = '';
  if (message) queryFromMessage = `?text=${message.split(' ').join('+')}`;

  const baseUrl = 'https://placehold.co/';
  const query = resolution + queryFromMessage;
  return baseUrl + query;
}

export function getImageUrl(dir, name) {
  return new URL(`/images/projects/${dir}/${name}.png`, import.meta.url).href;
}
