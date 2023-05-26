'use strict';
const inputName  = document.querySelector ('.js__name');
const previewName = document.querySelector('.js__preview_name');

const inputJob = document.querySelector('.js__job');
const previewJob = document.querySelector('.js__description');

const inputMail = document.querySelector('.js__email');
const previewMail = document.querySelector('.js__preview_mail');

const inputTelephone = document.querySelector('.js__telephone');
const previewTelephone = document.querySelector('.js__preview_telephone');

const inputLinkedIn = document.querySelector('.js__linkedin');
const previewLinkedIn = document.querySelector('.js__preview_linkedin');

const inputGitHub = document.querySelector('.js__github');
const previewGitHub = document.querySelector('.js__preview_github');

function handlerInputName(event) {
  const inputValue = event.target.value;
  previewName.innerHTML = inputValue;
}
function handlerInputJob(event) {
  const inputValue = event.target.value;
  previewJob.innerHTML = inputValue;
}

function handlerInputMail(event) {
  const inputMail = event.target.value;
  previewMail.href = `mailto:${inputMail}`;
}

function handlerInputTelephone(event) {
  const inputTelephone = event.target.value;
  previewTelephone.href = `tel:${inputTelephone}`;
}

function handlerInputLinkedIn(event) {
  const inputLinkedIn = event.target.value;
  previewLinkedIn.href = inputLinkedIn;
}

function handlerInputGitHub(event) {
  const inputGitHub = event.target.value;
  console.log(inputGitHub);
  previewGitHub.href = `https://github.com/${inputGitHub.replace('@', '')}`;
}

inputName.addEventListener('input', handlerInputName);
inputJob.addEventListener('input', handlerInputJob);
inputMail.addEventListener('input', handlerInputMail);
inputTelephone.addEventListener('input', handlerInputTelephone);
inputLinkedIn.addEventListener('input', handlerInputLinkedIn);
inputGitHub.addEventListener('input', handlerInputGitHub);
