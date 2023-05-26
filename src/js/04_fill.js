'use strict';
const inputName  = document.querySelector ('.js__name');
const previewName = document.querySelector('.js__preview_name');
const inputJob = document.querySelector('.js__job');
const previewJob = document.querySelector('.js__description');
const inputeMail = document.querySelector('.js__email');


function handlerInputName(event) { const inputValue = event.target.value;
  previewName.innerHTML = inputValue;
}
function handlerInputJob(event) { const inputValue = event.target.value;
  previewJob.innerHTML = inputValue;
}

inputName.addEventListener('input', handlerInputName);