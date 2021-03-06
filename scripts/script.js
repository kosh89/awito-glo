'use strict';

// Работа с модальным окном подачи объявления

const HIDE_CLASS = 'hide';
const ESC_CODE = 'Escape';

const newAdBtn = document.querySelector('.add__ad');
const modalAdd = document.querySelector('.modal__add');
const modalAddClose = modalAdd.querySelector('.modal__close');

const onNewAdBtnClick = () => {
  showNewAdModal();
};

const onNewAdModalEscPress = (event) => {
  if (event.key === ESC_CODE) {
    hideNewAdModal();
  }
};

const onModalAddCloseClick = () => {
  hideNewAdModal();
};

const onModalAddClick = (event) => {
  if (event.target === modalAdd) {
    hideNewAdModal();
  }
};

const showNewAdModal = () => {
  modalAdd.classList.remove(HIDE_CLASS);
  document.addEventListener('keyup', onNewAdModalEscPress);
};

const hideNewAdModal = () => {
  modalAdd.classList.add(HIDE_CLASS);
  document.removeEventListener('keyup', onNewAdModalEscPress);
};

newAdBtn.addEventListener('click', onNewAdBtnClick);
modalAddClose.addEventListener('click', onModalAddCloseClick);
modalAdd.addEventListener('click', onModalAddClick);

// Работа с модальным окном карточки товара

const CARD_CLASS = 'card';
const catalog = document.querySelector('.catalog');
const modalItem = document.querySelector('.modal__item');
const modalItemClose = modalItem.querySelector('.modal__close');

const onModalItemEscPress = (event) => {
  if (event.key === ESC_CODE) {
    hideModalItem();
  }
};

const onModalItemCloseClick = () => {
  hideModalItem();
};

const onModalItemClick = (event) => {
  if (event.target === modalItem) {
    hideModalItem();
  }
};

const showModalItem = () => {
  modalItem.classList.remove(HIDE_CLASS);
  document.addEventListener('keyup', onModalItemEscPress);
};

const hideModalItem = () => {
  modalItem.classList.add(HIDE_CLASS);
  document.removeEventListener('keyup', onModalItemEscPress);
};

const onCatalogClick = (event) => {
  if (event.target.closest('.card')) {
    showModalItem();
  }
};

catalog.addEventListener('click', onCatalogClick);
modalItemClose.addEventListener('click', onModalItemCloseClick);
modalItem.addEventListener('click', onModalItemClick);
