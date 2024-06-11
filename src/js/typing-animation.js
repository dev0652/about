export const setTypewriterEffect = function (id = 'about') {
  const sectionId = `#${id}`;
  const titleId = `#${id}-title`;

  const sectionEl = document.querySelector(sectionId);
  const titleEl = sectionEl.querySelector(titleId);
  const contentEl = sectionEl.querySelector('.section-content');

  const text = titleEl.innerHTML;
  titleEl.innerHTML = '';

  const delay = 100;
  contentEl.style.animationDelay = delay * text.length;

  for (let i = 0; i < text.length; i++) {
    const timeout = delay * (i + 1);

    setTimeout(() => {
      titleEl.innerHTML += text.charAt(i);
    }, timeout);
  }
};
