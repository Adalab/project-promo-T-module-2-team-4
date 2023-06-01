'use strict';

const resetBtn = document.querySelector('.js__resetbtn');
const handleReset = (event) => {
  event.preventDefault();
  /*data = {
      palete: 1,
      full_name: '',
      job: '',
      photo: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    };*/
};

resetBtn.addEventListener('click', handleReset);
