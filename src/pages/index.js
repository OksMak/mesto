import './index.css';

import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import { Popup, PopupWithImage } from '../scripts/components/Popup.js';

import {
  data,
  initialCards,
  profileName,
  profileProfession,
  inputProfileName,
  inputProfileProfession,
  buttonOpenEditProfile,
  formEditProfile,
  buttonOpenAddCards,
  formAddCards,
  inputTitleCard,
  inputLinkCard,
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

const popupWithImage = new PopupWithImage('.popup_type_show-image');
popupWithImage.setEventListeners();


const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');
}

// create card

const createCard = (data, handleImageClick, template) => {
  const card = new Card(data, handleImageClick, template);
  const cardElement = card.generateCard();

  return cardElement;
}

// render card

const renderInitialCards = new Section({
  data: initialCards,
  renderer: (cardItem) => {
    const cardElement = createCard(cardItem, () => {
      popupWithImage.open(cardElement);
    }, '#gallery__list-item');

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

// edit profile submit

const handleFormEditProfileSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileProfession.textContent = inputProfileProfession.value;
}

// add card submit

const handleFormAddCardsSubmit = (evt) => {
  evt.preventDefault();

  const dataCard = {
    name: inputTitleCard.value,
    link: inputLinkCard.value,
  }

  const cardElement = createCard(dataCard, () => {
      popupWithImage.open(cardElement);
    }, '#gallery__list-item');

  galleryList.prepend(cardElement);
}

// listeners

buttonOpenAddCards.addEventListener('click', handleButtonOpenAddCardsClick);
buttonOpenEditProfile.addEventListener('click', handleButtonOpenEditProfileClick);

formEditProfile.addEventListener('submit', handleFormEditProfileSubmit);
formAddCards.addEventListener('submit', handleFormAddCardsSubmit);