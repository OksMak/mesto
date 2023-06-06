import './index.css';

import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import Popup from '../scripts/components/Popup.js';

import {
  data,
  initialCards,
  popupList,
  profileName,
  profileProfession,
  inputProfileName,
  inputProfileProfession,
  buttonCloseEditProfile,
  buttonOpenEditProfile,
  formEditProfile,
  buttonOpenAddCards,
  buttonCloseAddCards,
  formAddCards,
  inputTitleCard,
  inputLinkCard,
  buttonCloseImage,
  galleryList
} from '../scripts/utils/constants.js';



const validatorEditProfile = new FormValidator(data, formEditProfile);
validatorEditProfile.enableValidation();

const validatorAddCards = new FormValidator(data, formAddCards);
validatorAddCards.enableValidation();

// open popup function

const popupEditProfile = new Popup('.popup_type_edit-profile');
popupEditProfile.setEventListeners();

const popupAddCards = new Popup('.popup_type_add-cards');
popupAddCards.setEventListeners();

const popupOpenImage = new Popup('.popup_type_show-image');
popupOpenImage.setEventListeners();


const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');

  // document.addEventListener('keydown', handleClosePopupKeydown);
  // popupElement.addEventListener('click', handleCloseOverlayClick);
  // popupElement.addEventListener('mouseover', handleSetCursorMouseover);
}

// create card

const createCard = (data, openPopup, template) => {
  const card = new Card(data, openPopup, template);
  const cardElement = card.generateCard();

  return cardElement;
}

// render card

const renderInitialCards = new Section({
  data: initialCards,
  renderer: (cardItem) => {
    const cardElement = createCard(cardItem, openPopup, '#gallery__list-item');

    renderInitialCards.addItem(cardElement);
  }
},
'.gallery__list')

renderInitialCards.renderItems();

// edit profile popup

const handleButtonOpenEditProfileClick = () => {
  popupEditProfile.open();
  inputProfileName.value = profileName.textContent;
  inputProfileProfession.value = profileProfession.textContent;

  validatorEditProfile.disableSubmitButton();
  validatorEditProfile.removeValidationErrors();
}

// add card popup

const handleButtonOpenAddCardsClick = () => {
  popupAddCards.open();
  formAddCards.reset();

  validatorAddCards.disableSubmitButton();
  validatorAddCards.removeValidationErrors();
}

const handleButtonCloseAddCardsClick = () => {
  closePopup(popupAddCards);
}

// edit profile submit

const handleFormEditProfileSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileProfession.textContent = inputProfileProfession.value;

  handleButtonCloseEditProfileClick();
}

// add card submit

const handleFormAddCardsSubmit = (evt) => {
  evt.preventDefault();

  const dataCard = {
    name: inputTitleCard.value,
    link: inputLinkCard.value,
  }

  const cardElement = createCard(dataCard, openPopup, '#gallery__list-item');

  galleryList.prepend(cardElement);

  handleButtonCloseAddCardsClick();
}

// listeners

buttonOpenAddCards.addEventListener('click', handleButtonOpenAddCardsClick);
buttonOpenEditProfile.addEventListener('click', handleButtonOpenEditProfileClick);

formEditProfile.addEventListener('submit', handleFormEditProfileSubmit);
formAddCards.addEventListener('submit', handleFormAddCardsSubmit);