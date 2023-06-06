import './index.css';

import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';

import {
  data,
  initialCards,
  popupList,
  profileName,
  profileProfession,
  inputProfileName,
  inputProfileProfession,
  popupEditProfile,
  buttonCloseEditProfile,
  buttonOpenEditProfile,
  formEditProfile,
  popupAddCards,
  buttonOpenAddCards,
  buttonCloseAddCards,
  formAddCards,
  inputTitleCard,
  inputLinkCard,
  popupOpenImage,
  buttonCloseImage,
  galleryList
} from '../scripts/utils/constants.js';



const validatorEditProfile = new FormValidator(data, formEditProfile);
validatorEditProfile.enableValidation();

const validatorAddCards = new FormValidator(data, formAddCards);
validatorAddCards.enableValidation();

// close popup by overlay and keydown

const handleCloseOverlayClick = (evt) => {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}

const handleSetCursorMouseover = (evt) => {
  if (evt.target.classList.contains('popup__container')) {
    evt.target.style.cursor = 'auto';
  }
}

const handleClosePopupKeydown = (evt) => {
  popupList.forEach(popupElement => {
    if (evt.key === 'Escape') {
      closePopup(popupElement)
    }
  })
}

// open popup function

const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');

  document.addEventListener('keydown', handleClosePopupKeydown);
  popupElement.addEventListener('click', handleCloseOverlayClick);
  popupElement.addEventListener('mouseover', handleSetCursorMouseover);
}

// close popup function

const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened');

  document.removeEventListener('keydown', handleClosePopupKeydown);
  popupElement.removeEventListener('click', handleCloseOverlayClick);
  popupElement.removeEventListener('mouseover', handleSetCursorMouseover);
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
  openPopup(popupEditProfile)
  inputProfileName.value = profileName.textContent;
  inputProfileProfession.value = profileProfession.textContent;

  validatorEditProfile.disableSubmitButton();
  validatorEditProfile.removeValidationErrors();
}

const handleButtonCloseEditProfileClick = () => {
  closePopup(popupEditProfile);
}

// add card popup

const handleButtonOpenAddCardsClick = () => {
  openPopup(popupAddCards);
  formAddCards.reset();

  validatorAddCards.disableSubmitButton();
  validatorAddCards.removeValidationErrors();
}

const handleButtonCloseAddCardsClick = () => {
  closePopup(popupAddCards);
}

// image popup

const handleButtonCloseImageClick = () => {
  closePopup(popupOpenImage);
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

buttonCloseEditProfile.addEventListener('click', handleButtonCloseEditProfileClick);
buttonCloseAddCards.addEventListener('click', handleButtonCloseAddCardsClick);
buttonCloseImage.addEventListener('click', handleButtonCloseImageClick);

formEditProfile.addEventListener('submit', handleFormEditProfileSubmit);
formAddCards.addEventListener('submit', handleFormAddCardsSubmit);