'use strict';

const designLegend = document.querySelector('.js__design');
const designContainer = document.querySelector('.js__design__container');

const fillLegend = document.querySelector('.js__fill');
const fillContainer = document.querySelector('.js__fill__container');

const shareLegend = document.querySelector('.js__share');
const shareContainer = document.querySelector('.js__share__container');

const shareContainer2 = document.querySelector('.js__share__container2');

designLegend.addEventListener('click', (event) => {
  fillContainer.classList.add('collapsed');
  shareContainer.classList.add('collapsed');
  shareContainer2.classList.add('collapsed');
  designContainer.classList.remove('collapsed');
});

fillLegend.addEventListener('click', (event) => {
  designContainer.classList.add('collapsed');
  shareContainer.classList.add('collapsed');
  shareContainer2.classList.add('collapsed');
  fillContainer.classList.remove('collapsed');
});

shareLegend.addEventListener('click', (event) =>{
  shareContainer2.classList.add('collapsed');
  designContainer.classList.add('collapsed');
  fillContainer.classList.add('collapsed');
  shareContainer.classList.remove('collapsed');
});

// CLASE DE DAYANA

/* 1º llamar al input */

const inputName = document.querySelector('.js_name');
// js_name está en el partial de formfill.html

const previewName = document.querySelector('.js__preview_name');
// js_preview_name clase de Dayana para el Nombre y Apellidos del preview

function handlerInputName(event) {
  const inputValue = event.target.value;
  previewName.innerHTML = inputValue;
}

inputName.addEventListener('input', handlerInputName);

//Sería así con todos los demás, profesión, links SM, etc.