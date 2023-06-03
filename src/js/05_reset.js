'use strict';

const resetBtn = document.querySelector('.js__resetbtn');
const handleReset = (event) => {
  event.preventDefault();

  for (let item in data) {
    data[item] = '';
  }
  profilePreview.style.backgroundImage = '';
  redPreview.style.backgroundImage = '';
  renderPreview();
  data.email = '';
};

resetBtn.addEventListener('click', handleReset);
