'use strict';

const resetBtn = document.querySelector('.js__resetbtn');
const nameInput = document.querySelector('.js__name');
const jobInput = document.querySelector('.js__job');
const emailInput = document.querySelector('.js__email');
const telephoneInput = document.querySelector('.js__telephone');
const linkedinInput = document.querySelector('.js__linkedin');
const githubInput = document.querySelector('.js__github');


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

  renderPreview();
  data.email = '';
};

resetBtn.addEventListener('click', handleReset);
