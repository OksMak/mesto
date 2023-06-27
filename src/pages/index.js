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
  buttonOpenAddCards,
  profileAvatarContainer,
} from '../scripts/utils/constants.js';

// validation

const formValidators = {};

const enableValidation = (data) => {
  const formList = Array.from(document.querySelectorAll(data.formSelector));

  formList.forEach((formElement) => {
    const validator = new FormValidator({ 
      data,
      form: formElement 
    });

    const formName = formElement.getAttribute('name');

    formValidators[formName] = validator;
    validator.enableValidation();
  })
}

enableValidation(data);

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
    section.addItem(cardElement);
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

  // handle submit function

  const handleSubmit = (request, popup, loadingText = 'Сохранение...') => { 
    popup.renderLoading(true, loadingText);

    request()
      .then(() => {
        popup.close();
      })
      .catch((err) => console.error(err))
      .finally(() => {
        popup.renderLoading(false);
      })
  };

// popup edit profile

const popupEditProfile = new PopupWithForm({ 
  data: data,
  popupSelector: data.popupEditProfile, 
  handleFormSubmit: (formData) => {
    const makeRequest = () => {
      return api.editProfileInfo(formData)
        .then((res) => {
          userInfo.setUserInfo(res);
        })
        .catch((err) => console.error(err));
    }

    handleSubmit(makeRequest, popupEditProfile);
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

    const makeRequest = () => {
      return api.addNewCard(formData)
        .then((res) => {
          const cardElement = createCard(res, data.galleryTemplate);
          section.addItem(cardElement, 'prepend');
        })
        .catch((err) => console.error(err));
    }

    handleSubmit(makeRequest, popupAddCards, 'Создание...');
}});

// popup edit avatar

const popupEditAvatar = new PopupWithForm({
  data: data,
  popupSelector: data.popupEditAvatar,
  handleFormSubmit: (formData) => {
    const makeRequest = () => {
      return api.editAvatar(formData)
        .then((res) => {
          userInfo.setUserAvatar(res);
        })
        .catch((err) => console.error(err));
    }

    handleSubmit(makeRequest, popupEditAvatar);
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
        .catch((err) => console.error(err));
      } else {
        api.addLike(card.getCardId())
        .then((res) => {
          card.addLike();
          card.updateLikes(res);
        })
        .catch((err) => console.error(err));
      }
    },
    handleTrashButtonClick: (evt) => {
      const cardElement = evt.target.closest(data.galleryListItem);
      popupWarning.open();
      popupWarning.setConfirmSubmit(() => {
        api.removeCard(card.getCardId())
        .then(() => {
          cardElement.remove();
          popupWarning.close();
        })
        .catch((err) => console.error(err));
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

  formValidators['profile-form'].disableSubmitButton();
  formValidators['profile-form'].removeValidationErrors();
}

const handleButtonOpenAddCardsClick = () => {
  popupAddCards.open();

  formValidators['cards-form'].disableSubmitButton();
  formValidators['cards-form'].removeValidationErrors();
}

const handleEditAvatarClick = () => {
  popupEditAvatar.open();

  formValidators['avatar-form'].disableSubmitButton();
  formValidators['avatar-form'].removeValidationErrors();
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