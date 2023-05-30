'use strict';

const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const fileField2 = document.querySelector('.js__profile-upload-btn2');
const profilePreview = document.querySelector('.js__profile-preview');
const redPreview = document.querySelector('.js__red-preview');

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  redPreview.style.backgroundImage = `url(${fr.result})`;
}

fileField.addEventListener('change', getImage);
fileField2.addEventListener('click', () => {
  fileField.click();
});
