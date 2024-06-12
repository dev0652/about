import { setTypewriterEffect } from './typing-animation';
import { refs } from './refs';
import { constants } from '../constants';

import throttle from 'lodash.throttle';

// ***********************************

const { TYPING_ANIMATION_INTERVAL: interval } = constants;

export function addHeaderNavListeners() {
  refs.headerNavLinks.forEach(link => {
    const timer = link.innerText.length * interval * 3;
    link.addEventListener('click', throttle(handleNavLinkClick, timer));
  });
}

function handleNavLinkClick(event) {
  event.preventDefault();
  const { id } = event.target.dataset;

  // Display the desired section and hide the others
  refs.sections.forEach(section => {
    const isCurrent = section.id === id;
    section.style.display = isCurrent ? 'block' : 'none';

    if (isCurrent) setTypewriterEffect(id);
  });

  // Set all link inactive
  refs.headerNavLinks.forEach(link => {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
  });

  // Make the clicked link active
  event.target.classList.add('active');
  event.target.setAttribute('aria-current', true);
}

// *********************************

// export function adjustBodyOffsets(isMobile) {
//   const { height } = refs.header.getBoundingClientRect();
//   const headerHeight = `${height}px`;

//   // Adjust body height to make up for the height of the fixed header
//   document.body.style.paddingTop = headerHeight;
//   document.body.style.setProperty('--blurOffset', headerHeight);
//   document.documentElement.style.scrollPaddingTop = headerHeight;

//   if (isMobile) {
//     const { height } = refs.footer.getBoundingClientRect();
//     const footerHeight = `${height}px`;

//     document.body.style.paddingBottom = footerHeight;
//     // document.body.style.setProperty('--bottomBlurOffset', footerHeight);
//     document.documentElement.style.scrollPaddingBottom = footerHeight;
//   } else {
//     document.body.style.removeProperty('padding-bottom');
//     document.documentElement.style.removeProperty('scroll-padding-bottom');
//   }
// }

// ***********************************

export function restoreSectionVisibility() {
  refs.sections.forEach(section => {
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
    link.classList[method]('active');
  });

  // Display the current section and hide the others
  refs.sections.forEach((section, index) => {
    const isCurrent = index === currentSectionIndex;
    section.style.display = isCurrent ? 'block' : 'none';

    if (isCurrent) setTypewriterEffect(section.id);
  });
}
