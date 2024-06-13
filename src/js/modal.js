import projects from '/data/db';
import { createCardModal } from '/js/createCardModal';

const modalPopUp = document.querySelector('.popup-backdrop');
const closeModalButton = modalPopUp.querySelector('.popup-modal-close-button');
const modalContentEl = modalPopUp.querySelector(
  '.modal-content-injection-target'
);

function handleBackdropClick(event) {
  const backdrop = document.querySelector('.current-modal');
  if (event.target === backdrop) onModalClose();
}

function onModalOpen() {
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  document.addEventListener('click', handleBackdropClick);
  document.addEventListener('keydown', handleEscapePress);

  const currentCloseButton = document.querySelector('.current-close-button');
  currentCloseButton.addEventListener('click', onModalClose);
}

function onModalClose() {
  document.documentElement.style.removeProperty('overflow');
  document.body.style.removeProperty('overflow');

  document.removeEventListener('click', handleBackdropClick);
  document.removeEventListener('keydown', handleEscapePress);

  const currentModal = document.querySelector('.current-modal');
  currentModal.classList.add('is-hidden');
  currentModal.classList.remove('current-modal');

  const currentCloseButton = document.querySelector('.current-close-button');
  currentCloseButton.removeEventListener('click', onModalClose);
}

function handleEscapePress(event) {
  if (event.key === 'Escape') onModalClose();
}

export function openCardModal(id) {
  const selectedProject = projects.find(project => project.id === +id);
  modalContentEl.innerHTML = createCardModal(selectedProject);

  modalPopUp.classList.remove('is-hidden');
  modalPopUp.classList.add('current-modal');

  closeModalButton.classList.add('current-close-button');

  onModalOpen();
}
