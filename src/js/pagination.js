import { refs } from './refs';

export function createPagination() {
  const paginationList = document.createElement('ul');
  paginationList.classList.add('pagination-list');
  refs.pagination.appendChild(paginationList);

  refs.sections.forEach((section, index, array) => {
    const page = index + 1;
    const pageName = section.id;
    const pages = array.length;

    const bullet = document.createElement('li');
    bullet.classList.add('pagination-bullet');
    bullet.dataset.id = index;
    bullet.setAttribute('ariaLabel', `Page ${page} of ${pages}, ${pageName}`);

    paginationList.appendChild(bullet);
  });
}
