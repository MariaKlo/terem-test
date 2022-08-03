// js for Button 1
const firstBtn = {
  firstBlock: document.getElementById('header'),
  firstButton: document.getElementById('block__button_first'),

  clickOnFirstButton() {
    this.firstButton.addEventListener('click', () => {
      this.firstBlock.classList.toggle('header_hidden');
    });
  }
};

// js for Button 2
const secondBtn = {
  secondButton: document.getElementById('block__button_second'),
  secondBlock: document.querySelector('.block_second'),
  thirdBlock: document.querySelector('.block_third'),

  // toggle не получилось использовать из-за приоритетов стилей
  clickOnSecondButton() {
    let btnClicked = true;
    this.secondButton.addEventListener('click', () => {
      if (btnClicked === true) {
        this.secondBlock.classList.remove('block_second');
        this.secondBlock.classList.add('block_third');
        this.thirdBlock.classList.remove('block_third');
        this.thirdBlock.classList.add('block_second');
      } else if (btnClicked === false) {
        this.secondBlock.classList.add('block_second');
        this.secondBlock.classList.remove('block_third');
        this.thirdBlock.classList.add('block_third');
        this.thirdBlock.classList.remove('block_second');
      }
      btnClicked = !btnClicked;
    });
  }
};

// js for modal window
const modalWindow = {
  modal: document.getElementById('modal'),
  modalButton: document.querySelector('.modal__close'),

  showModal() {
    this.modal.classList.add('modal_open');
  },
  
  hideModal() {
    this.modalButton.addEventListener('click', () => {
      this.modal.classList.remove('modal_open');
    });
  }
};

firstBtn.clickOnFirstButton();
secondBtn.clickOnSecondButton();
setTimeout(modalWindow.showModal, 500);
modalWindow.hideModal();