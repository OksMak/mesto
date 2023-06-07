import Card from "../components/Card.js";

// data

export const data = {
  // popup

  popup: 'popup',
  popupContainer: 'popup__container',
  popupOpened: 'popup_opened',
	formSelector: '.popup__form',
  buttonClose: '.popup__close',

  // popup edit profile

  popupEditProfile: '.popup_type_edit-profile',
	buttonEditProfile: '.profile__button-edit',

  // popup add cards

  popupAddCards: '.popup_type_add-cards',
  buttonAddCards: '.profile__button-add',

  // popup show image

  popupOpenImage: '.popup_type_show-image',
  popupImage: '.popup__image',
  popupCaption: '.popup__caption',

  // validation

	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__input-error_visible',

  // popup inputs

  inputSelector: '.popup__input',
  inputProfileName: '.popup__input_type_name',
  inputProfileProfession: '.popup__input_type_profession',
  inputTitleCard: '.popup__input_type_title',
  inputLinkCard: '.popup__input_type_link',

  // profile

  profileName: '.profile__name',
  profileProfession: '.profile__speciality',
	
  // gallery

  galleryTemplate: '#gallery__list-item',
  galleryList: '.gallery__list',
  galleryLike: '.gallery__like',
  galleryLikeActive: 'gallery__like_active',
  galleryTrash: '.gallery__trash',
  galleryListItem: '.gallery__list-item',
  galleryImage: '.gallery__image',
  galleryTitle: '.gallery__image-title',
  };

  // cards

export const initialCards = [
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1552735855-79278b1667ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80'
  },
  {
    name: 'Эльбрус',
    link: 'https://images.unsplash.com/photo-1638989420853-a6437f7a0d2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
  },
  {
    name: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1557094005-176cbfe3554d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80'
  },
  {
    name: 'Красная Поляна',
    link: 'https://images.unsplash.com/photo-1627110281873-696878f72bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80'
  },
  {
    name: 'Ласточкино гнездо',
    link: 'https://images.unsplash.com/photo-1598867957922-2cd433a5dacc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'
  },
  {
    name: 'Алтай',
    link: 'https://images.unsplash.com/photo-1593948360735-4ddb6f0dde7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
]; 

// popup list

export const popupList = Array.from(document.querySelectorAll(data.popup));

// profile

export const profileName = document.querySelector(data.profileName);
export const profileProfession = document.querySelector(data.profileProfession);
export const inputProfileName = document.querySelector(data.inputProfileName);
export const inputProfileProfession = document.querySelector(data.inputProfileProfession);

// popup edit profile

const popupEditProfile = document.querySelector(data.popupEditProfile);
export const buttonOpenEditProfile = document.querySelector(data.buttonEditProfile);
export const formEditProfile = popupEditProfile.querySelector(data.formSelector);

// popup add cards

const popupAddCards = document.querySelector(data.popupAddCards);
export const buttonOpenAddCards = document.querySelector(data.buttonAddCards);
export const formAddCards = popupAddCards.querySelector(data.formSelector);

// createCard function

export const createCard = (data, handleImageClick, template) => {
  const card = new Card(data, handleImageClick, template);
  const cardElement = card.generateCard();

  return cardElement;
}