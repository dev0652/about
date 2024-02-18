import projects from '/data/db';
import createModal from './createModal';

// ***** Tile card modal *********************************

const modalPopUp = document.querySelector('.popup-modal-backdrop');
const closeModalButton = modalPopUp.querySelector('.popup-modal-close-button');
const modalContentEl = modalPopUp.querySelector(
  '.modal-content-injection-target'
);

export function openModal(id) {
  const selectedProject = projects.find((project) => project.id === +id);
  modalContentEl.innerHTML = createModal(selectedProject);

  modalPopUp.classList.remove('is-hidden');
  modalPopUp.classList.add('current-modal');

  closeModalButton.classList.add('current-close-button');

  onModalOpen();
}

// ***** Email dialog modal ******************************

const modalEmail = document.querySelector('.email-modal-backdrop');
const closeDialogButton = modalEmail.querySelector('.email-modal-close-button');
const modalEmailText = modalEmail.querySelector('.email-confirmation-text');

export function openEmailModal(message) {
  modalEmailText.innerHTML = message;

  modalEmail.classList.remove('is-hidden');
  modalEmail.classList.add('current-modal');
  closeDialogButton.addEventListener('click', onModalClose);

  onModalOpen();
}

// ***** Do for all modals ********************************

function onModalOpen() {
  document.body.classList.add('modal-open');
  document.addEventListener('click', handleBackdropClick);
  document.addEventListener('keydown', handleEscapePress);

  const currentCloseButton = document.querySelector('.current-close-button');
  currentCloseButton.addEventListener('click', onModalClose);
}

function onModalClose() {
  document.body.classList.remove('modal-open');
  document.removeEventListener('click', handleBackdropClick);
  document.removeEventListener('keydown', handleEscapePress);

  const currentModal = document.querySelector('.current-modal');
  currentModal.classList.add('is-hidden');
  currentModal.classList.remove('current-modal');

  const currentCloseButton = document.querySelector('.current-close-button');
  currentCloseButton.removeEventListener('click', onModalClose);
}

// *****************************************************

function handleBackdropClick(event) {
  const backdrop = document.querySelector('.current-modal');
  if (event.target !== backdrop) return;

  onModalClose();
}

function handleEscapePress(event) {
  if (event.key === 'Escape') onModalClose();
}
