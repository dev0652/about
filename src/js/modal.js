import { createCardModal } from '/js/createCardModal';

const cardModalBackdrop = document.querySelector('.card-modal-backdrop');
const closeModalButton = cardModalBackdrop.querySelector(
  '.card-modal-close-button'
);
const closeModalButtonMobile = cardModalBackdrop.querySelector(
  '.card-modal-close-button-mobile'
);

const modalContentEl = cardModalBackdrop.querySelector(
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
  toggleModalCloseButtonsClickListeners();

  window.modalOpen = true;
}

function onModalClose() {
  const currentModal = document.querySelector('.current-modal');
  const modal = currentModal.querySelector('.modal-wrapper');

  modal.classList.add('on-modal-close');

  setTimeout(() => {
    modal.classList.remove('on-modal-close');

    document.documentElement.style.removeProperty('overflow');
    document.body.style.removeProperty('overflow');

    toggleBackdropClickAndEscapeKeyListeners();
    toggleModalCloseButtonsClickListeners();

    currentModal.classList.add('is-hidden');
    currentModal.classList.remove('current-modal');

    removeHoverEffectFromFlipCard();

    window.modalOpen = false;
  }, 600);
}

function toggleModalCloseButtonsClickListeners() {
  const method = !window.modalOpen ? 'add' : 'remove';
  const currentModalCloseButtons = document.querySelectorAll(
    '.current-close-button'
  );

  currentModalCloseButtons.forEach(closeButton => {
    closeButton[`${method}EventListener`]('click', onModalClose);
  });
}

function handleEscapePress(event) {
  if (event.key === 'Escape') onModalClose();
}

export function openCardModal(id) {
  const selectedProject = window.projects.find(project => project.id === +id);
  modalContentEl.innerHTML = createCardModal(selectedProject);

  cardModalBackdrop.classList.remove('is-hidden');
  cardModalBackdrop.classList.add('current-modal');

  closeModalButton.classList.add('current-close-button');
  closeModalButtonMobile.classList.add('current-close-button');

  onModalOpen(selectedProject.id);
}
