export const setTypewriterEffect = function (id) {
  const sectionId = `#${id}`;
  const titleId = `#${id}-title`;

  const sectionEl = document.querySelector(sectionId);
  const titleEl = sectionEl.querySelector(titleId);
  const contentEl = sectionEl.querySelector('.section-content');

  const text = titleEl.innerHTML; // write content to variable before wiping
  // Animate default section title on first load

  titleEl.innerHTML = '';

  const timeout = 100;

  contentEl.style.animationDelay = timeout * text.length;

  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      titleEl.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, timeout);
    }
  }

  typeWriter();
};
