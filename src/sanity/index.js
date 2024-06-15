import { createClient } from '@sanity/client';

// https://www.sanity.io/docs/js-client#quickstart
// https://www.sanity.io/docs/image-url

const client = createClient({
  projectId: 'zmxpcy21',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-06-15', // use current date (YYYY-MM-DD) to target the latest API version
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
async function getData() {
  const data = await client.fetch('*[_type == "event"]');
  console.log('data: ', data);
  return data;
}

// export async function createPost(post) {
//   const result = client.create(post);
//   return result;
// }

// export async function updateDocumentTitle(_id, title) {
//   const result = client.patch(_id).set({ title });
//   return result;
// }

export const sanity = {
  client,
  get: getData(),
};

sanity.get();
