'use strict';

const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn'); //linea 18 formfill
const fileField2 = document.querySelector('.js__profile-upload-btn2'); //linea 20 formfill
const profilePreview = document.querySelector('.js__profile-preview'); //linea 12 preview en el preview G
const redPreview = document.querySelector('.js__red-preview'); //linea24 formfill, imagen reducida

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

