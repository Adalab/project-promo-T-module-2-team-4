'use strict';

const linkUrl = document.querySelector('.js_url');
const msgError = document.querySelector('.js_msg-error');
const msgSuccess = document.querySelector('.js_success-msg');
function msgAlert(message) {
  msgError.innerHTML = '¡Atención! Ha olvidado completar algunos campos obligatorios';
}

function handleClickCreateBtn(event) {
  event.preventDefault();
  console.log('se ha enviado');
  console.log(data);

  //let message = '';

  if (data.name === '') {
    nameInput.classList.add('borderRedEmpty');
    //message += ('el nombre, ');
  } 
  if (data.job === '') {
    jobInput.classList.add('borderRedEmpty');
    //message += ('la profesión, ');
  } 
  if (data.photo === '') {
    
    //message += ('la imagen, ');
  } 
  if (data.email === '') {
    emailInput.classList.add('borderRedEmpty');
    //message += ('el correo electrónico.');
  } 
  
  if (data.name !== '' && data.job !== '' && data.photo !== '' && data.email !== '') {
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
  else {
    msgAlert(message);
  }
}

shareButton.addEventListener('click', handleClickCreateBtn);
