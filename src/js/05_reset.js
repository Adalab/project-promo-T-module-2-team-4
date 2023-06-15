'use strict';

const resetBtn = document.querySelector('.js__resetbtn');
const nameInput = document.querySelector('.js__name');
const jobInput = document.querySelector('.js__job');
const emailInput = document.querySelector('.js__email');
const telephoneInput = document.querySelector('.js__telephone');
const linkedinInput = document.querySelector('.js__linkedin');
const githubInput = document.querySelector('.js__github');
//const navPreview = document.querySelector('.js__navPreview');

const handleReset = (event) => {
  event.preventDefault();

  for (let item in data) {
    data[item] = '';
  }
  profilePreview.style.backgroundImage = '';
  redPreview.style.backgroundImage = '';
  nameInput.value = '';
  jobInput.value = '';
  emailInput.value = '';
  telephoneInput.value = '';
  linkedinInput.value = '';
  githubInput.value = '';
  shareButton.classList.remove('disabled__button');
  shareButton.innerHTML =
    '<i class="fa-regular fa-address-card"></i> CREAR TARJETA';
  shareContainer.classList.add('collapsed');
  shareContainer2.classList.add('collapsed');
  designContainer.classList.remove('collapsed');
  handleClickRadio1();
  radio1.checked = true;
  renderPreview();
  fileField.addEventListener('change', getImage);
};

const handleMailBtn = (event) => {
  if (emailInput.value === '') {
    event.preventDefault();
  }
};
const handleTelephoneBtn = (event) => {
  if (telephoneInput.value === '') {
    event.preventDefault();
  }
};
const handleLinkedinBtn = (event) => {
  if (linkedinInput.value === '') {
    event.preventDefault();
  }
};
const handleGitHubBtn = (event) => {
  if (githubInput.value === '') {
    event.preventDefault();
  }
};
resetBtn.addEventListener('click', handleReset);
previewMail.addEventListener('click', handleMailBtn);
previewTelephone.addEventListener('click', handleTelephoneBtn);
previewLinkedIn.addEventListener('click', handleLinkedinBtn);
previewGitHub.addEventListener('click', handleGitHubBtn);
