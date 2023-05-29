import Card from './Card.js';
import FormValidator from './FormValidator.js';

// data

const data = {
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

// popup list

const popupList = Array.from(document.querySelectorAll('.popup'));

// form list

const formList = Array.from(document.querySelectorAll(data.formSelector));

// profile
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__speciality');
const inputProfileName = document.querySelector('.popup__input_type_name');
const inputProfileProfession = document.querySelector('.popup__input_type_profession');

// popup edit profile
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__close');
const buttonOpenEditProfile = document.querySelector('.profile__button-edit');
const formEditProfile = popupEditProfile.querySelector('.popup__form');

// popup add cards

const popupAddCards = document.querySelector('.popup_type_add-cards');
const buttonOpenAddCards = document.querySelector('.profile__button-add');
const buttonCloseAddCards = popupAddCards.querySelector('.popup__close');
const formAddCards = popupAddCards.querySelector('.popup__form');
const inputTitleCard = document.querySelector('.popup__input_type_title');
const inputLinkCard = document.querySelector('.popup__input_type_link');

// popup image
const popupOpenImage = document.querySelector('.popup_type_show-image');
const buttonCloseImage = popupOpenImage.querySelector('.popup__close');

// gallery-list

const galleryList = document.querySelector('.gallery__list');

// cards

const initialCards = [
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

const hasInvalidInput = (inputList) => {
  return inputList.some(input => {
    return !input.validity.valid;
  })
}

const toggleButtonState = (inputList, button) => {
  if (hasInvalidInput(inputList)) {
    button.classList.add(data.inactiveButtonClass);
  } else {
    button.classList.remove(data.inactiveButtonClass);
  }
}

const setInactiveButton = (buttonElement) => {
  buttonElement.classList.add(data.inactiveButtonClass);
}

const searchErrorElement = (formElement, inputElement) => {
  return formElement.querySelector(`.${inputElement.id}-error`);
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = searchErrorElement(formElement, inputElement);

  inputElement.classList.add(data.inputErrorClass);
  errorElement.classList.add(data.errorClass);
  errorElement.textContent = errorMessage;
}

const hideInputError = (formElement, inputElement) => {
  const errorElement = searchErrorElement(formElement, inputElement);

  inputElement.classList.remove(data.inputErrorClass);
  errorElement.classList.remove(data.errorClass);
  errorElement.textContent = '';
}

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

const searchInputList = (formElement) => {
  return Array.from(formElement.querySelectorAll(data.inputSelector));
}

const searchButtonElement = (formElement) => {
  return formElement.querySelector(data.submitButtonSelector);
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

const renderInitialCards = (initialCards) => {
  initialCards.forEach(item => {
    const cardElement = createCard(item, openPopup, '#gallery__list-item');

    galleryList.append(cardElement);
  })
}

renderInitialCards(initialCards);

// edit profile popup

const handleButtonsEditProfileClick = (formElement) => {
	const inputList = searchInputList(formElement);
	const buttonElement = searchButtonElement(formElement);

	inputList.forEach(inputElement => {
		isValid(formElement, inputElement);
		setInactiveButton(buttonElement);
	})
}

const handleButtonOpenEditProfileClick = () => {
    openPopup(popupEditProfile)
    inputProfileName.value = profileName.textContent;
    inputProfileProfession.value = profileProfession.textContent;

		handleButtonsEditProfileClick(popupEditProfile);
  }

const handleButtonCloseEditProfileClick = () => {
  closePopup(popupEditProfile);
	handleButtonsEditProfileClick(popupEditProfile);
}

// add card popup

const handleButtonsAddCardClick = (formElement) => {
  const inputList = searchInputList(formElement);
  const buttonElement = searchButtonElement(formElement);

  inputList.forEach(inputElement => {
    hideInputError(formElement, inputElement);
    toggleButtonState(inputList, buttonElement);
  })
}

const handleButtonOpenAddCardsClick = () => {
  openPopup(popupAddCards);
  handleButtonsAddCardClick(popupAddCards);
}

const handleButtonCloseAddCardsClick = () => {
    closePopup(popupAddCards);
    handleButtonsAddCardClick(popupAddCards);
    formAddCards.reset();
  }

// image popup

const handleButtonCloseImageClick = () => {
  closePopup(popupOpenImage);
}

// handle buttons submit

const handleButtonsSubmit = (formElement) => {
  const inputList = searchInputList(formElement);
  const buttonElement = searchButtonElement(formElement);

  inputList.forEach(inputElement => {
    isValid(formElement, inputElement);
    hideInputError(formElement, inputElement);
    setInactiveButton(buttonElement);
  })
}

// edit profile submit

const handleFormEditProfileSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileProfession.textContent = inputProfileProfession.value;

  handleButtonsSubmit(formEditProfile);
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

  handleButtonsSubmit(popupAddCards);
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

  const startValidation = (formList) => {
    formList.forEach(form => {
      const validation = new FormValidator(data, form);
      validation.enableValidation();
    })
  }

  startValidation(formList);