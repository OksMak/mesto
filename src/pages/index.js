import './index.css';

import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithConfirm from '../scripts/components/PopupWithConfirm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';
import Card from '../scripts/components/Card.js';

import {
  data,
  buttonOpenEditProfile,
  formEditProfile,
  buttonOpenAddCards,
  formAddCards,
  profileAvatarContainer,
  formEditAvatar,
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

const validatorEditAvatar = new FormValidator({
  data: data,
  formSelector: formEditAvatar
});

validatorEditAvatar.enableValidation();

// api

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: 'e8803ec9-a123-4a64-8ea6-17d84f0d5aa3',
    'Content-Type': 'application/json'
  }
});

// userInfo

const userInfo = new UserInfo({ 
  selectorUserName: data.profileName, 
  selectorUserProfession: data.profileProfession,
  selectorUserAvatar: data.profileAvatar,
});

// section

const section = new Section({
  renderer: (cardItem) => {
    const cardElement = createCard(cardItem, data.galleryTemplate);
    section.addItem('append', cardElement);
  }
}, data.galleryList);

// get server data

api.getServerData()
  .then((res) => {
    const [userData, initialCards] = res;

    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    userInfo.saveUserId(userData._id);
    section.renderItems(initialCards);
  })
  .catch((err) => console.error(err));

// popup edit profile

const popupEditProfile = new PopupWithForm({ 
  data: data,
  popupSelector: data.popupEditProfile, 
  handleFormSubmit: (formData) => {
    popupEditProfile.isDataLoading(true, 'Сохранение...', 'Сохранить');
    api.editProfileInfo(formData)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .catch((err) => console.error(err))
    .finally(() => popupEditProfile.isDataLoading(false, 'Сохранение...', 'Сохранить'));
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
    popupAddCards.isDataLoading(true, 'Создание...', 'Создать');
    api.addNewCard(formData)
    .then((res) => {
      const cardElement = createCard(res, data.galleryTemplate);
      section.addItem('prepend', cardElement);
    })
    .catch((err) => console.error(err))
    .finally(() => popupAddCards.isDataLoading(false, 'Создание...', 'Создать'));
}});

// popup edit avatar

const popupEditAvatar = new PopupWithForm({
  data: data,
  popupSelector: data.popupEditAvatar,
  handleFormSubmit: (formData) => {
    popupEditAvatar.isDataLoading(true, 'Сохранение...', 'Сохранить');
    api.editAvatar(formData)
    .then((res) => {
      userInfo.setUserAvatar(res);
    })
    .catch((err) => console.error(err))
    .finally(() => popupEditAvatar.isDataLoading(false, 'Сохранение...', 'Сохранить'));
  }
})

// popup warning

const popupWarning = new PopupWithConfirm({
  data: data,
  popupSelector: data.popupWarning
})

// create card fucntion

const createCard = (dataCard, template) => {
  const card = new Card({ 
    data,
    dataCard, 
    userId: userInfo.getUserId(),
    handleImageClick: () => {
      popupWithImage.open(card.generateCard());
    },
    handleLikeButtonClick: () => {
      if (card.isLiked) {
        api.removeLike(card.getCardId())
        .then((res) => {
          card.removeLike();
          card.updateLikes(res);
        })
        .catch((err) => console.log(err));
      } else {
        api.addLike(card.getCardId())
        .then((res) => {
          card.addLike();
          card.updateLikes(res);
        })
        .catch((err) => console.log(err));
      }
    },
    handleTrashButtonClick: (evt) => {
      const cardElement = evt.target.closest(data.galleryListItem);
      popupWarning.open();
      popupWarning.setConfirmSubmit(() => {
        api.removeCard(card.getCardId())
        .then(() => {
          cardElement.remove();
        })
      })
    },
    template});
  return card.generateCard();
}

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

const handleEditAvatarClick = () => {
  popupEditAvatar.open();

  validatorEditAvatar.disableSubmitButton();
  validatorEditAvatar.removeValidationErrors();
}

// listeners
popupEditProfile.setEventListeners();
popupAddCards.setEventListeners();
popupWithImage.setEventListeners();
popupEditAvatar.setEventListeners();
popupWarning.setEventListeners();


profileAvatarContainer.addEventListener('click', handleEditAvatarClick);
buttonOpenAddCards.addEventListener('click', handleButtonOpenAddCardsClick);
buttonOpenEditProfile.addEventListener('click', handleButtonOpenEditProfileClick);