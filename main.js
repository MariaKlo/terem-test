const firstBlock = document.getElementById('header');
const firstButton = document.getElementById('block__button_first');

const secondButton = document.getElementById('block__button_second');
const secondBlock = document.querySelector('.js-block_second');

const modal = document.getElementById('modal');
const modalButton = document.querySelector('.modal__close');

// listener for 1st button
firstButton.addEventListener('click', function () {
  firstBlock.classList.toggle('header_hidden');
});

// listener for 2nd button
secondButton.addEventListener('click', function () {
  secondBlock.classList.toggle('order-2');
});

// listener for modal
modalButton.addEventListener('click', function () {
  modal.classList.toggle('modal_closed');
});