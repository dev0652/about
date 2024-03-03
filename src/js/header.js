import { setTypewriterEffect } from './typing-animation';

// ***********************************

// Refs
const header = document.querySelector('.header');
const headerNavLinks = document.querySelectorAll('.header-nav-link');
const sections = document.querySelectorAll('.section');
const main = document.querySelector('main');

// ***********************************

headerNavLinks.forEach((link) => {
  link.addEventListener('click', handleNavLinkClick);
});

// *********************************

// Set an active nav link in header
function handleNavLinkClick(event) {
  event.preventDefault();
  const { id } = event.target.dataset;

  // Display the desired section and hide the others
  sections.forEach((section) => {
    const isCurrent = section.id === id;
    section.style.display = isCurrent ? 'block' : 'none';

    if (isCurrent) setTypewriterEffect(id);
  });

  // Make the clicked link active
  headerNavLinks.forEach((link) => {
    link.classList.remove('active');
  });

  event.target.classList.add('active');
}

// *********************************

export function adjustHeaderHeight(isMobile) {
  const { height } = header.getBoundingClientRect();
  const headerHeight = `${height}px`;

  // Adjust body height to make up for the height of the fixed header
  main.style.setProperty('--blurOffset', headerHeight);

  if (isMobile) {
    document.body.style.paddingBottom = headerHeight;
    document.documentElement.style.scrollPaddingBottom = headerHeight;
  } else {
    document.body.style.paddingTop = headerHeight;
    document.documentElement.style.scrollPaddingTop = headerHeight;
  }
}

// ***********************************

export function toggleSectionVisibility(isMobile) {
  if (isMobile) {
    sections.forEach((section) => {
      section.style.display = 'block';
    });
  }
}
