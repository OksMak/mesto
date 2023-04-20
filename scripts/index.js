// profile
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__speciality');
const inputProfileName = document.querySelector('.popup__input_type_name');
const inputProfileProfession = document.querySelector('.popup__input_type_profession');

// popup edit profile
const popupEditProfile = document.querySelector('#popup-edit-profile');
const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__close');
const buttonEditProfile = document.querySelector('.profile__button-edit');
const formEditProfile = popupEditProfile.querySelector('.popup__form');

// popup add cards

const popupAddCards = document.querySelector('#popup-add-cards');
const buttonAddCard = document.querySelector('.profile__button-add');
const buttonCloseAddCard = popupAddCards.querySelector('.popup__close');
const formAddCards = popupAddCards.querySelector('.popup__form');
const inputTitleCard = document.querySelector('.popup__input_type_title');
const inputLinkCard = document.querySelector('.popup__input_type_link');

// popup image
const popupOpenImage = document.querySelector('#popup-open-image');
const buttonCloseImage = popupOpenImage.querySelector('.popup__close');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__caption');

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
  const buttonTrash = cardElement.querySelector('.gallery__trash');

  cardImage.src = cardLink;
  cardImage.alt = cardName;
  cardTitle.textContent = cardName;

  buttonLike.addEventListener('click', (evt) => {
    const target = evt.target;
    target.classList.toggle('gallery__like_active');
  })

  buttonTrash.addEventListener('click', (evt) => {
    const target = evt.target;
    target.closest('.gallery__list-item').remove();
  })

  cardImage.addEventListener('click', () => {
    popupOpenImage.classList.add('popup_opened');
    popupImage.src = cardLink;
    popupImage.alt = cardName;
    popupImageCaption.textContent = cardName;
  })

  return cardElement;
}

// render card

const renderInitialCard = (card) => {
  galleryList.append(createCard(card));
}

initialCards.forEach(item => {
  renderInitialCard(item);
})

const renderCard = (card) => {
  galleryList.prepend(createCard(card));
}

// open popup function

const openPopup = (popupElement) => {
  if (!popupElement.classList.contains('popup_opened')) {
    popupElement.classList.add('popup_opened');
  }
}

// close popup function

const closePopup = (popupElement) => {
  if (popupElement.classList.contains('popup_opened')) {
    popupElement.classList.remove('popup_opened');
  }
}

// edit profile popup

const openEditProfilePopup = () => {
    openPopup(popupEditProfile)
    inputProfileName.value = profileName.textContent;
    inputProfileProfession.value = profileProfession.textContent;
  }

const closeEditProfilePopup = () => {
  closePopup(popupEditProfile);
}

// add card popup

const openAddCardsPopup = () => {
  openPopup(popupAddCards);
}

const closeAddCardPopup = () => {
    closePopup(popupAddCards);
    inputTitleCard.value = '';
    inputLinkCard.value = '';
  }

// image popup

const closeImagePopup = () => {
  closePopup(popupOpenImage);
}

// edit profile

const submitEditProfileForm = (evt) => {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileProfession.textContent = inputProfileProfession.value;
  closeEditProfilePopup();
}

// add card

const submitAddCardsForm = (evt) => {
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
buttonCloseImage.addEventListener('click', closeImagePopup);

formEditProfile.addEventListener('submit', submitEditProfileForm);
formAddCards.addEventListener('submit', submitAddCardsForm);