// data

export const data = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__input-error_visible',
	popupEditProfileClass: '.popup_type_edit-profile',
	popupAddCardsClass: '.popup_type_add-cards',
	buttonEditProfile: '.profile__button-edit',
	buttonAddCards: '.profile__button-add',
	buttonClose: '.popup__close',
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

export const popupList = Array.from(document.querySelectorAll('.popup'));

// profile
export const profileName = document.querySelector('.profile__name');
export const profileProfession = document.querySelector('.profile__speciality');
export const inputProfileName = document.querySelector('.popup__input_type_name');
export const inputProfileProfession = document.querySelector('.popup__input_type_profession');

// popup edit profile
export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__close');
export const buttonOpenEditProfile = document.querySelector('.profile__button-edit');
export const formEditProfile = popupEditProfile.querySelector('.popup__form');

// popup add cards

export const popupAddCards = document.querySelector('.popup_type_add-cards');
export const buttonOpenAddCards = document.querySelector('.profile__button-add');
export const buttonCloseAddCards = popupAddCards.querySelector('.popup__close');
export const formAddCards = popupAddCards.querySelector('.popup__form');
export const inputTitleCard = document.querySelector('.popup__input_type_title');
export const inputLinkCard = document.querySelector('.popup__input_type_link');

// popup image
export const popupOpenImage = document.querySelector('.popup_type_show-image');
export const buttonCloseImage = popupOpenImage.querySelector('.popup__close');

// gallery-list

export const galleryList = document.querySelector('.gallery__list');