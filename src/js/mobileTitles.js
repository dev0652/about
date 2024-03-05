import { refs } from './refs';

// ***********************************

const sectionsNodeList = refs.sections;
const sections = Array.from(sectionsNodeList);
const titles = sections.map((section) => section.id.toLowerCase());

function populateTitles(titlesArray) {
  refs.titlesInjectionTarget.innerHTML = '';

  titlesArray.forEach((title) => {
    const element = document.createElement('span');
    element.classList.add('mobile-section-title');
    element.innerHTML = title;

    refs.titlesInjectionTarget.appendChild(element);
  });
}

// ***********************************

export function injectMobileTitles(id = null) {
  id ? setActiveTitleById(id) : populateTitles(titles);
}

function setActiveTitleById(id) {
  console.log('id: ', id);

  const newTitleIndex = titles.indexOf(id);
  console.log('newTitleIndex: ', newTitleIndex);

  const indexToDelete =
    newTitleIndex === 0 ? titles.length - 1 : newTitleIndex - 1;
  const itemToMove = titles[indexToDelete];

  titles.splice(indexToDelete, 1);
  titles.push(itemToMove);
  // const isNext = dir === -1;

  // const firstItem = titles[0];
  // const lastItem = titles[titles.length - 1];
  // const itemToMove = isNext ? firstItem : lastItem;

  // const indexToDelete = isNext ? 0 : titles.length - 1;
  // titles.splice(indexToDelete, 1);

  // const method = isNext ? 'push' : 'unshift';
  // titles[method](itemToMove);

  // Re-assemble titles from the rearranged array
  populateTitles(titles);
}

export function setActiveTitleByDirection(dir) {
  // Rearrange the array moving (deleting and then inserting) either:
  // - the first item to the end (for next slide); or
  // - the last item to the beginning (for prev slide) of the array

  // 1 == prev, -1 == next
  const isNext = dir === -1;

  const firstItem = titles[0];
  const lastItem = titles[titles.length - 1];
  const itemToMove = isNext ? firstItem : lastItem;

  const indexToDelete = isNext ? 0 : titles.length - 1;
  titles.splice(indexToDelete, 1);

  const method = isNext ? 'push' : 'unshift';
  titles[method](itemToMove);

  // Re-assemble titles from the rearranged array
  populateTitles(titles);
}
