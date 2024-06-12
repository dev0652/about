import { constants } from '../constants';

const { TYPING_ANIMATION_INTERVAL: interval } = constants;

export const setTypewriterEffect = function (id = 'about') {
  const sectionId = `#${id}`;
  const titleId = `#${id}-title`;

  const sectionEl = document.querySelector(sectionId);
  const titleEl = sectionEl.querySelector(titleId);
  const contentEl = sectionEl.querySelector('.section-content');

  const text = titleEl.innerText;
  titleEl.innerText = '';

  contentEl.style.animationDelay = text.length * interval;

  for (let i = 0; i < text.length; i++) {
    const timeout = interval * (i + 1);

    setTimeout(() => {
      titleEl.innerHTML += text.charAt(i);
    }, timeout);
  }
};
