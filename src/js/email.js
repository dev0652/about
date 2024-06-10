import { constants } from '/constants';

import emailjs from '@emailjs/browser';

import translations from '/data/translations.json' assert { type: 'json' };

// *********************************

const { LOCALE_ENG } = constants;

emailjs.init('E8FZeR5jYUP13UDEy');

const form = document.getElementById('contact-form');

form.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();

  const locale = window.locale ? window.locale : LOCALE_ENG;
  const { successMessage, errorMessage } = translations[locale].email;

  emailjs
    .sendForm('default_service', 'contact_form', '#contact-form')
    .then(
      function (response) {
        if (response.status === 200) openEmailModal(successMessage);
      },
      function (error) {
        console.error('error: ', error);
        openEmailModal(errorMessage);
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
