import './index.css';

import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';

import {
  data,
  initialCards,
  inputProfileName,
  inputProfileProfession,
  buttonOpenEditProfile,
  formEditProfile,
  buttonOpenAddCards,
  formAddCards,
  createCard
} from '../scripts/utils/constants.js';

// validation

const validatorEditProfile = new FormValidator(formEditProfile);
validatorEditProfile.enableValidation();

const validatorAddCards = new FormValidator(formAddCards);
validatorAddCards.enableValidation();

// userInfo

const userInfo = new UserInfo({ 
  selectorUserName: data.profileName, 
  selectorUserProfession: data.profileProfession 
});

// popup edit profile

const popupEditProfile = new PopupWithForm({ 
  popupSelector: data.popupEditProfile, 
  handleFormSubmit: (formData) => {

  userInfo.setUserInfo(formData);
}});



// popup add cards

const popupAddCards = new PopupWithForm({ 
  popupSelector: data.popupAddCards, 
  handleFormSubmit: (formData) => {
    const renderCard = new Section({
      dataCard: [formData],
      renderer: (cardItem) => {
        const cardElement = createCard(cardItem, () => {
          popupWithImage.open(cardElement);
        }, data.galleryTemplate);

        renderCard.addItem('prepend', cardElement);
      }
    }, data.galleryList);

  renderCard.renderItems();
}});

// popup with image

const popupWithImage = new PopupWithImage({ popupSelector: data.popupOpenImage });

// render initial cards

const renderInitialCards = new Section({
  dataCard: initialCards,
  renderer: (cardItem) => {
    const cardElement = createCard(cardItem, () => {
      popupWithImage.open(cardElement);
    }, data.galleryTemplate);

    renderInitialCards.addItem('append', cardElement);
  }
},
  data.galleryList);

renderInitialCards.renderItems();

// handlers

const handleButtonOpenEditProfileClick = () => {
  const userData = userInfo.getUserInfo();

  inputProfileName.value = userData.name;
  inputProfileProfession.value = userData.profession;

  popupEditProfile.open();

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