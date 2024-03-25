import emailjs from '@emailjs/browser';
// import { openEmailModal } from './modal';

emailjs.init('E8FZeR5jYUP13UDEy');

const form = document.getElementById('contact-form');

form.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();

  emailjs
    .sendForm('default_service', 'contact_form', '#contact-form')
    .then(
      function (response) {
        if (response.status === 200)
          openEmailModal('Your message has been successfully sent');
      },
      function (error) {
        console.error('error: ', error);
        openEmailModal('Sorry, there was an error sending your message');
      }
    )
    .finally(function () {
      document.getElementById('contact-form').reset();
    });
}

// ============================================

const dialog = document.querySelector('.email-dialog');
const closeButton = dialog.querySelector('.email-dialog-button');
const emailDialogText = dialog.querySelector('.email-dialog-text');

closeButton.addEventListener('click', () => {
  closeEmailModal();
});

function onDialogBackdropClick(event) {
  if (event.target === dialog) closeEmailModal();
}

function openEmailModal(text) {
  emailDialogText.innerHTML = text;
  dialog.showModal();
  dialog.addEventListener('click', onDialogBackdropClick);
}

function closeEmailModal() {
  dialog.close();
  dialog.removeEventListener('click', onDialogBackdropClick);
}
