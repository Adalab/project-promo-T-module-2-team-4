'use strict';

//Querys
//const inputName  = document.querySelector ('.js__name');
const previewName = document.querySelector('.js__preview_name');

//const inputJob = document.querySelector('.js__job');
const previewJob = document.querySelector('.js__description');

//const inputMail = document.querySelector('.js__email');
const previewMail = document.querySelector('.js__preview_mail');

//const inputTelephone = document.querySelector('.js__telephone');
const previewTelephone = document.querySelector('.js__preview_telephone');

//const inputLinkedIn = document.querySelector('.js__linkedin');
const previewLinkedIn = document.querySelector('.js__preview_linkedin');

//const inputGitHub = document.querySelector('.js__github');
const previewGitHub = document.querySelector('.js__preview_github');

const fillInput =document.querySelector('.js__fill');

const data = {
  palete: 1,
  full_name: '',
  job: '',
  photo: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
};

// Funciones
function renderPreview() {
  previewName.innerHTML = data.full_name;
  previewJob.innerHTML = data.job;
  previewMail.href = `mailto:${data.email}`;
  previewTelephone.href = `tel:${data.phone}`;
  previewLinkedIn.href = data.linkedin;
  previewGitHub.href = `https://github.com/${data.github.replace('@', '')}`;
}

function handlerInputs (event) {
  const idInput = event.target.id;
  const valueInput = event.target.value;

  data[idInput] = valueInput;
  renderPreview();
}

fillInput.addEventListener('keyup', handlerInputs);