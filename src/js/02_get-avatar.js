'use strict';

const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profilePreview = document.querySelector('.js__profile-preview');
const redPreview = document.querySelector('.js__red-preview');

function getImage(e) {
  for (let i = 0; i <= i++; i++) {
    const myFile = e.currentTarget.files[i];
    fr.addEventListener('load', writeImage);
    fr.readAsDataURL(myFile);
  }
}

function writeImage() {
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  redPreview.style.backgroundImage = `url(${fr.result})`;
  data.photo = fr.result;
}

fileField.addEventListener('change', getImage);
