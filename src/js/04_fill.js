'use strict';

const previewName = document.querySelector('.js__preview_name');

const previewJob = document.querySelector('.js__description');

const previewMail = document.querySelector('.js__preview_mail');

const previewTelephone = document.querySelector('.js__preview_telephone');

const previewLinkedIn = document.querySelector('.js__preview_linkedin');

const previewGitHub = document.querySelector('.js__preview_github');

const fillInput = document.querySelector('.js__fill');

let data = {
  palette: 1,
  name: '',
  job: '',
  photo: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
};

function renderPreview() {
  if (data.name === '') {
    previewName.innerHTML = 'Name Surname';
  } else {
    previewName.innerHTML = data.name;
  }
  if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = data.job;
  }
  previewMail.href = `mailto:${data.email}`;
  previewTelephone.href = `tel:${data.phone}`;
  previewLinkedIn.href = data.linkedin;
  previewGitHub.href = `https://github.com/${data.github.replace('@', '')}`;
}

function handlerInputs(event) {
  const idInput = event.target.id;
  const valueInput = event.target.value;

  data[idInput] = valueInput;
  renderPreview();
}

fillInput.addEventListener('keyup', handlerInputs);
