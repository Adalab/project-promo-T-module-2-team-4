'use strict';

const linkUrl = document.querySelector('.js_url');
const msgError = document.querySelector('.js_msg-error');
const msgSuccess = document.querySelector('.js_success-msg');

function handleClickCreateBtn(event) {
  event.preventDefault();
  console.log('se ha enviado');
  console.log(data);
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        linkUrl.innerHTML = data.cardURL;
        linkUrl.href = data.cardURL;
        msgSuccess.innerHTML = 'La tarjeta ha sido creada:';
      } else {
        msgError.innerHTML = 'Recuerda rellenar todos los campos';
      }
    });
}

shareButton.addEventListener('click', handleClickCreateBtn);
