'use strict';

const radio1 = document.querySelector('.js_radio-1');

const radio2 = document.querySelector('.js_radio-2');

const radio3 = document.querySelector('.js_radio-3');

const radio4 = document.querySelector('.js_radio-4');

const previewCard = document.querySelector('.js__preview');


// js__preview parte Preview

function handleClickRadio1() {
  previewCard.classList.remove('palette-2','palette-3','palette-4');
  previewCard.classList.add('palette-1');
}
function handleClickRadio2() {
  previewCard.classList.remove('palette-1','palette-3','palette-4');
  previewCard.classList.add('palette-2');
}
function handleClickRadio3() {
  previewCard.classList.remove('palette-1', 'palette-2', 'palette-4');
  previewCard.classList.add('palette-3');
}

function handleClickRadio4() {
  previewCard.classList.remove('palette-1', 'palette-2','palette-3');
  previewCard.classList.add('palette-4');
}

radio1.addEventListener('click', handleClickRadio1);

radio2.addEventListener('click', handleClickRadio2);

radio3.addEventListener('click', handleClickRadio3);

radio4.addEventListener('click', handleClickRadio4);

