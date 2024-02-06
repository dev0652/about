import projects from '/data/db';
import createModal from './createModal';

// *****************************************************

const modalPopUp = document.querySelector('[data-pop-up]');
const closeModalButton = document.querySelector('[data-modal-close]');
const modalContentEl = document.querySelector(
  '.modal-content-injection-target'
);

// *****************************************************

export function openModal(id) {
  const selectedProject = projects.find((project) => project.id === +id);
  modalContentEl.innerHTML = createModal(selectedProject);

  document.body.style.overflow = 'hidden';
  document.body.style.height = '100vh';

  modalPopUp.classList.remove('is-hidden');

  closeModalButton.addEventListener('click', handleModalCloseButtonClick);
  document.addEventListener('keydown', handleEscapePress);
  document.addEventListener('click', handleBackdropClick);
}

// *****************************************************

function closeModalAndRemoveListeners() {
  closeModalButton.removeEventListener('click', handleModalCloseButtonClick);
  document.removeEventListener('click', handleBackdropClick);
  document.removeEventListener('keydown', handleEscapePress);

  modalPopUp.classList.add('is-hidden');
  document.body.style.removeProperty('overflow');
}

// *****************************************************

function handleModalCloseButtonClick(e) {
  closeModalAndRemoveListeners();
}

function handleBackdropClick(e) {
  if (e.target == modalPopUp) closeModalAndRemoveListeners();
}

function handleEscapePress(e) {
  if (e.key === 'Escape') closeModalAndRemoveListeners();
}
