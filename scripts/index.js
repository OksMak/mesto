// profile
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__speciality');


// buttons

const buttonEditProfile = document.querySelector('.profile__button-edit');
const buttonCloseEditProfile = document.querySelector('#button-close-edit-profile');
const buttonCloseAddCard = document.querySelector('#button-close-add-card');
const buttonAddCard = document.querySelector('.profile__button-add');

// popup

const popupEditProfile = document.querySelector('#popup-edit-profile');
const popupAddCards = document.querySelector('#popup-add-cards');
const inputProfileName = document.querySelector('.popup__input_type_name');
const inputProfileProfession = document.querySelector('.popup__input_type_profession');
const inputTitleCard = document.querySelector('.popup__input_type_title');
const inputLinkCard = document.querySelector('.popup__input_type_link');

// forms

const formEditProfile = popupEditProfile.querySelector('.popup__form');
const formAddCards = popupAddCards.querySelector('.popup__form');

// template gallery-item

const cardTemplate = document.querySelector('#gallery__list-item').content;

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

// create card

const createCard = (data) => {
  const cardElement = cardTemplate.querySelector('.gallery__list-item').cloneNode(true);
  const cardName = data.name;
  const cardLink = data.link;

  const cardImage = cardElement.querySelector('.gallery__list-image');
  const cardTitle = cardElement.querySelector('.gallery__image-title');
  const buttonLike = cardElement.querySelector('.gallery__like');

  cardImage.src = cardLink;
  cardImage.alt = cardName;
  cardTitle.textContent = cardName;

  buttonLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('gallery__like_active');
  })

  return cardElement;
}

// render card

const renderCard = (card) => {
  galleryList.prepend(createCard(card));
}

initialCards.forEach(item => {
  renderCard(item);
})

// edit profile popup

const openEditProfilePopup = () => {
  if (!popupEditProfile.classList.contains('popup_opened')) {
    popupEditProfile.classList.add('popup_opened');
    inputProfileName.value = profileName.textContent;
    inputProfileProfession.value = profileProfession.textContent;
  }
}

const closeEditProfilePopup = () => {
  if (popupEditProfile.classList.contains('popup_opened')) {
    popupEditProfile.classList.remove('popup_opened');
  }
}

// add card popup

const openAddCardsPopup = () => {
  if (!popupAddCards.classList.contains('popup_opened')) {
    popupAddCards.classList.add('popup_opened');
  }
}

const closeAddCardPopup = () => {
  if (popupAddCards.classList.contains('popup_opened')) {
    popupAddCards.classList.remove('popup_opened');
    inputTitleCard.value = '';
    inputLinkCard.value = '';
  }
}

// edit profile

const formEditProfileSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileProfession.textContent = inputProfileProfession.value;
  closeEditProfilePopup();
}

// add card

const formAddCardsSubmit = (evt) => {
  evt.preventDefault();

  const card = {};
  card.name = inputTitleCard.value;
  card.link = inputLinkCard.value;

  renderCard(card);

  closeAddCardPopup();
}

buttonAddCard.addEventListener('click', openAddCardsPopup)
buttonEditProfile.addEventListener('click', openEditProfilePopup);

buttonCloseEditProfile.addEventListener('click', closeEditProfilePopup);
buttonCloseAddCard.addEventListener('click', closeAddCardPopup);

formEditProfile.addEventListener('submit', formEditProfileSubmit);
formAddCards.addEventListener('submit', formAddCardsSubmit);