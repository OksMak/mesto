import './index.css';

import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';

import {
  data,
  initialCards,
  buttonOpenEditProfile,
  formEditProfile,
  buttonOpenAddCards,
  formAddCards,
  createCard
} from '../scripts/utils/constants.js';

// validation

const validatorEditProfile = new FormValidator({
  data: data,
  formSelector: formEditProfile
});

validatorEditProfile.enableValidation();

const validatorAddCards = new FormValidator({
  data: data,
  formSelector: formAddCards
});

validatorAddCards.enableValidation();

// userInfo

const userInfo = new UserInfo({ 
  selectorUserName: data.profileName, 
  selectorUserProfession: data.profileProfession 
});

// Section

const section = new Section({
  dataCard: initialCards,
  renderer: (cardItem) => {
    const cardElement = createCard(data, cardItem, () => {
      popupWithImage.open(cardElement);
    }, data.galleryTemplate);

    section.addItem('append', cardElement);
  }
}, data.galleryList);

section.renderItems();

// popup edit profile

const popupEditProfile = new PopupWithForm({ 
  data: data,
  popupSelector: data.popupEditProfile, 
  handleFormSubmit: (formData) => {

  userInfo.setUserInfo(formData);
}});

// popup with image

const popupWithImage = new PopupWithImage({ 
  data: data,
  popupSelector: data.popupOpenImage 
});

// popup add cards

const popupAddCards = new PopupWithForm({ 
  data: data,
  popupSelector: data.popupAddCards, 
  handleFormSubmit: (formData) => {
    const cardElement = createCard(data, formData, () => {
      popupWithImage.open(cardElement)
    }, data.galleryTemplate);
    
    section.addItem('prepend', cardElement);
}});

// handlers

const handleButtonOpenEditProfileClick = () => {
  const userData = userInfo.getUserInfo();

  popupEditProfile.open();
  popupEditProfile.setInputValues(userData);

  validatorEditProfile.disableSubmitButton();
  validatorEditProfile.removeValidationErrors();
}

const handleButtonOpenAddCardsClick = () => {
  popupAddCards.open();

  validatorAddCards.disableSubmitButton();
  validatorAddCards.removeValidationErrors();
}

// listeners
popupEditProfile.setEventListeners();
popupAddCards.setEventListeners();
popupWithImage.setEventListeners();

buttonOpenAddCards.addEventListener('click', handleButtonOpenAddCardsClick);
buttonOpenEditProfile.addEventListener('click', handleButtonOpenEditProfileClick);