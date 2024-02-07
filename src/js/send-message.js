import emailjs from '@emailjs/browser';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

emailjs.init('E8FZeR5jYUP13UDEy');

const form = document.getElementById('contact-form');

form.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();

  // serviceID, templateID, templateParams, options

  emailjs
    .sendForm('default_service', 'contact_form', '#contact-form')
    .then(
      function (response) {
        // Notify.success('Успішно надіслано');
        alert('Success');
      },
      function (error) {
        // Notify.failure('Щось пішло не так!');
        alert('Error');
      }
    )
    .finally(function () {
      document.getElementById('contact-form').reset();
    });
}
