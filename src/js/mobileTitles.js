import { refs } from './refs';
import translations from '/data/translations.json' assert { type: 'json' };

export function makeTitles() {
  const sectionsNodeList = refs.sections;
  const sections = Array.from(sectionsNodeList);

  const titles = sections.map(section =>
    translations[window.locale][section.id].toLowerCase()
  );

  window.titles = titles;
}

export function populateTitles(titlesArray) {
  refs.titlesInjectionTarget.innerHTML = '';

  titlesArray.forEach(title => {
    const element = document.createElement('span');
    element.classList.add('mobile-section-title');
    element.innerHTML = title;
    refs.titlesInjectionTarget.appendChild(element);
  });
}

function setActiveTitleById(id) {
  const { titles } = window;

  const index = titles.indexOf(id);

  if (index !== 0) {
    if (index === titles.length - 1) {
      titles.pop();
      titles.unshift(id);
    } else {
      for (let i = 0; i < index; i++) {
        const itemToMove = titles[i];
        titles.shift();
        titles.push(itemToMove);
      }
    }
  }

  populateTitles(titles);
}

export function injectMobileTitles(id) {
  id ? setActiveTitleById(id) : populateTitles(window.titles);
}

export function setActiveTitleByDirection(dir) {
  const { titles } = window;

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
