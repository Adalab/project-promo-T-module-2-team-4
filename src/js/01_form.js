'use strict';

const designLegend = document.querySelector('.js__design');
const designContainer = document.querySelector('.js__design__container');

const fillLegend = document.querySelector('.js__fill');
const fillContainer = document.querySelector('.js__fill__container');

const shareLegend = document.querySelector('.js__share');
const shareContainer = document.querySelector('.js__share__container');

const shareContainer2 = document.querySelector('.js__share__container2');
//const shareBorder3 = document.querySelector('.js__share__border3');

designLegend.addEventListener('click', () => {
  shareContainer.classList.add('collapsed');
  shareContainer2.classList.add('collapsed');
  designContainer.classList.remove('collapsed');
});
//fillContainer.classList.add('collapsed');
//shareBorder3.classList.add('collapsed');

fillLegend.addEventListener('click', () => {
  designContainer.classList.add('collapsed');
  shareContainer.classList.add('collapsed');
  shareContainer2.classList.add('collapsed');
  fillContainer.classList.remove('collapsed');
});
// shareBorder3.classList.add('collapsed');

shareLegend.addEventListener('click', () =>{
  designContainer.classList.add('collapsed');
  fillContainer.classList.add('collapsed');
  shareContainer.classList.remove('collapsed');
});
// shareContainer2.classList.add('collapsed');


