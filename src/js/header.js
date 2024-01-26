import { setTypewriterEffect } from './typing-animation';

// Refs
const header = document.querySelector('.header');
const headerNavLinks = document.querySelectorAll('.header-nav-link');

const sections = document.querySelectorAll('.section');
const main = document.querySelector('main');

// Body height adjust to compensate for positioned header height
const { height } = header.getBoundingClientRect();
const headerHeight = `${height}px`;

document.body.style.paddingTop = headerHeight;
document.documentElement.style.scrollPaddingTop = headerHeight;
main.style.setProperty('--topOffset', headerHeight);

// Listen to clicks on header nav links
headerNavLinks.forEach((link) => {
  link.addEventListener('click', handleNavLinkClick);
});

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
