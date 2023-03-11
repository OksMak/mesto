let buttonEdit = document.querySelector('.profile__button-edit');
let buttonClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let inputName = document.querySelector('.popup__input_type_name');
let inputProfession = document.querySelector('.popup__input_type_profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__speciality');
let form = document.querySelector('.popup__form');

function openPopup () {
  if (!popup.classList.contains('popup_opened')) {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputProfession.value = profileProfession.textContent;
  }
}

function closePopup () {
  if (popup.classList.contains('popup_opened')) {
    popup.classList.remove('popup_opened');
  }
}

function formSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  closePopup();
}

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
form.addEventListener('submit', formSubmit);
