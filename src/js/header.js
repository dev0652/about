import { setTypewriterEffect } from './typing-animation';
import { refs } from './refs';

// ***********************************

refs.headerNavLinks.forEach((link) => {
  link.addEventListener('click', handleNavLinkClick);
});

// *********************************

function handleNavLinkClick(event) {
  event.preventDefault();
  const { id } = event.target.dataset;

  // Display the desired section and hide the others
  refs.sections.forEach((section) => {
    const isCurrent = section.id === id;
    section.style.display = isCurrent ? 'block' : 'none';

    if (isCurrent) setTypewriterEffect(id);
  });

  // Set all link inactive
  refs.headerNavLinks.forEach((link) => {
    link.classList.remove('active');
  });

  // Make the clicked link active
  event.target.classList.add('active');
}

// *********************************

export function adjustHeaderHeight(isMobile) {
  const { height } = refs.header.getBoundingClientRect();
  const headerHeight = `${height}px`;

  // Adjust body height to make up for the height of the fixed header
  refs.main.style.setProperty('--blurOffset', headerHeight);

  if (isMobile) {
    document.body.style.paddingBottom = headerHeight;
    document.documentElement.style.scrollPaddingBottom = headerHeight;
  } else {
    document.body.style.paddingTop = headerHeight;
    document.documentElement.style.scrollPaddingTop = headerHeight;
  }
}

// ***********************************

export function restoreSectionVisibility() {
  refs.sections.forEach((section) => {
    section.style.display = 'block';
  });
}

// ***********************************

export function setCurrentSection() {
  // Get the current section's index
  const currentSectionIndex = window.mySwipe.getPos();

  // Set active the current section's corresponding nav link
  refs.headerNavLinks.forEach((link, index) => {
    const method = index === currentSectionIndex ? 'add' : 'remove';
    // index === currentSectionIndex ? link.classList.add('active') : link.classList.remove('active');

    link.classList[method]('active');
  });

  // Display the current section and hide the others
  refs.sections.forEach((section, index) => {
    const isCurrent = index === currentSectionIndex;
    section.style.display = isCurrent ? 'block' : 'none';

    if (isCurrent) setTypewriterEffect(section.id);
  });
}
