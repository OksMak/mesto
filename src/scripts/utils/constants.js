// data

export const data = {
  // popup

  popup: 'popup',
  popupContainer: 'popup__container',
  popupOpened: 'popup_opened',
	formSelector: '.popup__form',
  buttonClose: '.popup__close',
  submitButton: '.popup__button',

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

  // popup edit avatar

  popupEditAvatar: '.popup_type_edit-avatar',

  // popup warning

  popupWarning: '.popup_type_warning',

  // validation

	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__input-error_visible',

  // popup inputs

  inputSelector: '.popup__input',
  inputTitleCard: '.popup__input_type_title',
  inputLinkCard: '.popup__input_type_link',

  // profile

  profileName: '.profile__name',
  profileProfession: '.profile__speciality',
  profileAvatar: '.profile__avatar',
  profileAvatarContainer: '.profile__avatar-container',
	
  // gallery

  galleryTemplate: '#gallery__list-item',
  galleryList: '.gallery__list',
  likeButton: '.gallery__like',
  likeCounter: '.gallery__like-counter',
  likeButtonActive: 'gallery__like_active',
  trashButton: '.gallery__trash',
  galleryListItem: '.gallery__list-item',
  cardImage: '.gallery__image',
  cardTitle: '.gallery__image-title',
  };


// popup list

export const popupList = Array.from(document.querySelectorAll(data.popup));

// profile

export const profileName = document.querySelector(data.profileName);
export const profileProfession = document.querySelector(data.profileProfession);
export const profileAvatar = document.querySelector(data.profileAvatar);
export const profileAvatarContainer = document.querySelector(data.profileAvatarContainer);

// popup edit profile

export const buttonOpenEditProfile = document.querySelector(data.buttonEditProfile);

// popup add cards

export const buttonOpenAddCards = document.querySelector(data.buttonAddCards);