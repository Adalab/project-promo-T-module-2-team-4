'use strict';

const linkUrl = document.querySelector('.js_url');
const msgError = document.querySelector('.js_msg-error');
const msgSuccess = document.querySelector('.js_success-msg');
const btnTwitter = document.querySelector('.js_btnTw');
function msgAlert() {
  msgError.innerHTML +=
    '¡Atención! Ha olvidado completar algunos campos obligatorios*';
}

function msgAlert2() {
  msgError.innerHTML += ' El correo electrónico no es válido*';
}
const setLocalStorage = () => {
  localStorage.setItem('infoCard', JSON.stringify(data));
};
const getLocalStorage = () => {
  const dataCard = localStorage.getItem('infoCard');
  if (dataCard) {
    data = JSON.parse(dataCard);
  }
  renderPreview();
};
getLocalStorage();

const sendApiData = () => {
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      linkUrl.innerHTML = data.cardURL;
      linkUrl.href = data.cardURL;
      btnTwitter.href = `https://twitter.com/intent/tweet?url=${linkUrl.href}&text=Ya%20estoy%20suscrita%20al%20Adalab%20Tech%20Summit%21%21%21&hashtags=Adalab`;
      msgSuccess.innerHTML = 'La tarjeta ha sido creada:';
    });
};

function handleClickCreateBtn(event) {
  event.preventDefault();
  const emailValue = emailInput.value;
  if (data.name === '') {
    nameInput.classList.add('borderRedEmpty');
  }
  if (data.job === '') {
    jobInput.classList.add('borderRedEmpty');
  }
  if (data.photo === '') {
    redPreview.classList.add('borderRedEmpty');
  }
  if (data.email === '') {
    emailInput.classList.add('borderRedEmpty');
  }
  if (
    data.name !== '' &&
    data.job !== '' &&
    data.photo !== '' &&
    data.email !== ''
  ) {
    sendApiData();
  } else {
    msgAlert();
    fillContainer.classList.remove('collapsed');
    shareContainer2.classList.add('collapsed');
  }
  if (!emailValue.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
    msgAlert2();
  }
  setLocalStorage();
}

shareButton.addEventListener('click', handleClickCreateBtn);
