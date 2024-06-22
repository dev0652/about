import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { getCurrentDate } from '/js/services';

// https://www.sanity.io/docs/js-client#api
// https://www.sanity.io/docs/image-url

const client = createClient({
  projectId: 'ik2t7qlr',
  dataset: 'projects',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: getCurrentDate(), // use current date (YYYY-MM-DD) to target the latest API version
});

async function getProjects() {
  return await client.fetch('*[_type == "project"]');
}

async function getSectionContent() {
  return await client.fetch('*[_type == "sectionContent"]');
}
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export const sanity = {
  getProjects,
  getSectionContent,
};
