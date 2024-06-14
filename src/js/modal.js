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

function getCurrentFlipCardById(projectId) {
  return document.querySelector(`.flip-card[data-id="${projectId}"]`);
}

function removeHoverEffectFromFlipCard() {
  const flipCard = document.querySelector('.forced-rotated');
  if (flipCard) flipCard.classList.remove('forced-rotated');
}

function toggleBackdropClickAndEscapeKeyListeners() {
  const method = !window.modalOpen ? 'add' : 'remove';
  const listenTo = document[`${method}EventListener`];

  listenTo('click', handleBackdropClick);
  listenTo('keydown', handleEscapePress);
}

function onModalOpen(projectId) {
  if (projectId) {
    const flipCard = getCurrentFlipCardById(projectId);
    if (flipCard) flipCard.classList.add('forced-rotated');
  }

  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  toggleBackdropClickAndEscapeKeyListeners();

  const currentCloseButton = document.querySelector('.current-close-button');
  currentCloseButton.addEventListener('click', onModalClose);

  window.modalOpen = true;
}

function onModalClose() {
  const currentModal = document.querySelector('.current-modal');

  const modal = currentModal.querySelector('.popup-modal');

  modal.classList.add('on-modal-close');

  setTimeout(() => {
    modal.classList.remove('on-modal-close');

    document.documentElement.style.removeProperty('overflow');
    document.body.style.removeProperty('overflow');

    toggleBackdropClickAndEscapeKeyListeners();

    currentModal.classList.add('is-hidden');
    currentModal.classList.remove('current-modal');

    const currentCloseButton = document.querySelector('.current-close-button');
    currentCloseButton.removeEventListener('click', onModalClose);

    removeHoverEffectFromFlipCard();

    window.modalOpen = false;
  }, 600);
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

  onModalOpen(selectedProject.id);
}
