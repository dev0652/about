import { setTypewriterEffect } from './typing-animation';
import { refs } from './refs';
import { constants } from '../constants';

import throttle from 'lodash.throttle';

const { TYPING_ANIMATION_INTERVAL: interval } = constants;

export function addHeaderNavListeners() {
  refs.headerNavLinks.forEach(link => {
    const timer = link.innerText.length * interval * 3;
    const options = { trailing: false };

    link.addEventListener(
      'click',
      throttle(handleNavLinkClick, timer, options)
    );
  });
}

function displayCurrentSection(section, id, isCurrent) {
  section.style.display = isCurrent ? 'block' : 'none';
  if (isCurrent) setTypewriterEffect(id);
}

function displayOnlyCurrentSectionById(id) {
  refs.sections.forEach(section => {
    const isCurrent = section.id === id;
    displayCurrentSection(section, id, isCurrent);
  });
}

function displayOnlyCurrentSectionByIndex(currentSectionIndex) {
  refs.sections.forEach((section, index) => {
    const { id } = section;
    const isCurrent = index === currentSectionIndex;
    displayCurrentSection(section, id, isCurrent);
  });
}

function setAllLinksInactive() {
  refs.headerNavLinks.forEach(link => {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
  });
}

function makeCurrentLinkActive(link) {
  link.classList.add('active');
  link.setAttribute('aria-current', true);
}

function handleNavLinkClick(event) {
  event.preventDefault();
  const { id } = event.target.dataset;

  displayOnlyCurrentSectionById(id);
  setAllLinksInactive();
  makeCurrentLinkActive(event.target);
}

export function restoreSectionVisibility() {
  refs.sections.forEach(section => {
    section.style.display = 'block';
  });
}

function setCurrentSectionNavLinkActive(currentSectionIndex) {
  refs.headerNavLinks.forEach((link, index) => {
    const method = index === currentSectionIndex ? 'add' : 'remove';
    link.classList[method]('active');
  });
}

export function setCurrentSection() {
  // Get the current section's index
  const currentSectionIndex = window.mySwipe.getPos();

  setCurrentSectionNavLinkActive(currentSectionIndex);

  // Display the current section and hide the others
  displayOnlyCurrentSectionByIndex(currentSectionIndex);
}
