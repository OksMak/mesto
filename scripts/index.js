import Card from './Card.js';

// popup list

const popupList = Array.from(document.querySelectorAll('.popup'));

// profile
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__speciality');
const inputProfileName = document.querySelector('.popup__input_type_name');
const inputProfileProfession = document.querySelector('.popup__input_type_profession');

// popup edit profile
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__close');
const buttonEditProfile = document.querySelector('.profile__button-edit');
const formEditProfile = popupEditProfile.querySelector('.popup__form');

// popup add cards

const popupAddCards = document.querySelector('.popup_type_add-cards');
const buttonAddCard = document.querySelector('.profile__button-add');
const buttonCloseAddCard = popupAddCards.querySelector('.popup__close');
const formAddCards = popupAddCards.querySelector('.popup__form');
const inputTitleCard = document.querySelector('.popup__input_type_title');
const inputLinkCard = document.querySelector('.popup__input_type_link');

// popup image
const popupOpenImage = document.querySelector('.popup_type_show-image');
const buttonCloseImage = popupOpenImage.querySelector('.popup__close');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__caption');

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

const createCard = (data, template) => {
  const card = new Card(data, template);
  const cardElement = card.generateCard();

  const cardImage = cardElement.querySelector('.gallery__list-image');
  const cardName = cardElement.querySelector('.gallery__image-title');

  const handleCardImageClick = () => {
    openPopup(popupOpenImage);
    popupImage.src = cardImage.src;
    popupImage.alt = cardName.textContent;
    popupImageCaption.textContent = cardName.textContent;
  }

  cardImage.addEventListener('click', handleCardImageClick);

  return cardElement;
}

// render card

const renderCard = (initialCards) => {
  initialCards.forEach(item => {
    const cardElement = createCard(item, '#gallery__list-item');

    galleryList.append(cardElement);
  })
}

renderCard(initialCards);

// edit profile popup

const handleButtonEditProfileClick = () => {
    openPopup(popupEditProfile)
    inputProfileName.value = profileName.textContent;
    inputProfileProfession.value = profileProfession.textContent;
  }

const handleButtonCloseEditProfileClick = () => {
  closePopup(popupEditProfile);
}

// add card popup

const handleAddButtonCardClick = () => {
  openPopup(popupAddCards);
}

const handleButtonCloseAddCardClick = () => {
    closePopup(popupAddCards);
    inputTitleCard.value = '';
    inputLinkCard.value = '';
  }

// image popup

const handleButtonCloseImageClick = () => {
  closePopup(popupOpenImage);
}

// edit profile

const handleFormEditProfileSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileProfession.textContent = inputProfileProfession.value;
  handleButtonCloseEditProfileClick();
}

// add card

const handleFormAddCardsSubmit = (evt) => {
  evt.preventDefault();

  const data = {
    name: inputTitleCard.value,
    link: inputLinkCard.value,
  }

  const cardElement = createCard(data, '#gallery__list-item');

  galleryList.prepend(cardElement);

  handleButtonCloseAddCardClick();
}

// listeners

buttonAddCard.addEventListener('click', handleAddButtonCardClick)
buttonEditProfile.addEventListener('click', handleButtonEditProfileClick);

buttonCloseEditProfile.addEventListener('click', handleButtonCloseEditProfileClick);
buttonCloseAddCard.addEventListener('click', handleButtonCloseAddCardClick);
buttonCloseImage.addEventListener('click', handleButtonCloseImageClick);

formEditProfile.addEventListener('submit', handleFormEditProfileSubmit);
formAddCards.addEventListener('submit', handleFormAddCardsSubmit);