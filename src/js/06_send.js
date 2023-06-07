'use strict';

const linkUrl = document.querySelector('.js_url');
const msgError = document.querySelector('.js_msg-error');
const msgSuccess = document.querySelector('.js_success-msg');
function msgAlert(message) {
  msgError.innerHTML = message;
}

function handleClickCreateBtn(event) {
  event.preventDefault();
  console.log('se ha enviado');
  console.log(data);

  if (data.name === '') {
    msgAlert('Ha olvidado completar el nombre');
  } else if (data.job === '') {
    msgAlert('Ha olvidado completar la profesión');
  } else if (data.photo === '') {
    msgAlert('Ha olvidado añadir la imagen');
  } else if (data.email === '') {
    msgAlert('Ha olvidado completar el correo electrónico');
  } else {
    fetch('https://dev.adalab.es/api/card/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        linkUrl.innerHTML = data.cardURL;
        linkUrl.href = data.cardURL;
        msgSuccess.innerHTML = 'La tarjeta ha sido creada:';
      });
  }
}

shareButton.addEventListener('click', handleClickCreateBtn);
