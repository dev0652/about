import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { getCurrentDate } from '/js/services';

// https://www.sanity.io/docs/js-client#api

const client = createClient({
  projectId: 'ik2t7qlr',
  dataset: 'projects',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: getCurrentDate(), // use current date (YYYY-MM-DD) to target the latest API version
});

async function getData(schemaType) {
  const query = `*[_type == "${schemaType}"]`;
  return await client.fetch(query);
}

// https://www.sanity.io/docs/image-url

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export const sanity = {
  getProjects: () => getData('project'),
  getSectionContent: () => getData('sectionContent'),
};
