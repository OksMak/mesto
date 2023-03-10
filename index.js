let buttonEdit = document.querySelector('.profile__button-edit');
let buttonClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let inputName = document.querySelector('.popup__input-name');
let inputProfession = document.querySelector('.popup__input-profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__speciality');
let form = document.querySelector('.popup__form');

function togglePopup () {
  popup.classList.toggle('popup_opened');
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

buttonEdit.addEventListener('click', togglePopup);
buttonClose.addEventListener('click', togglePopup);

function formSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  togglePopup();
}

form.addEventListener('submit', formSubmit);
