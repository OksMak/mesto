export default class Card {
	constructor(dataCard, handleCardClick, template) {
		this._link = dataCard.link;
		this._name = dataCard.name;
		this._template = template;
		this._handleCardClick = handleCardClick;
		this._popupOpenCardImage = document.querySelector('.popup_type_show-image');
		this._popupImage = this._popupOpenCardImage.querySelector('.popup__image');
		this._popupImageCaption = this._popupOpenCardImage.querySelector('.popup__caption');
	}

	_getCard() {
		const cardElement = document.querySelector(this._template)
																.content
																.querySelector('.gallery__list-item')
																.cloneNode(true);

		return cardElement;
	}

	_handleLikeButtonClick() {
		this._element.querySelector('.gallery__like').classList.toggle('gallery__like_active');
	}

	_handleTrashButtonClick() {
		this._element.remove();
	}

	_setEventListeners() {
		this._element.querySelector('.gallery__like').addEventListener('click', () => {
			this._handleLikeButtonClick();
		});

		this._element.querySelector('.gallery__trash').addEventListener('click', () => {
			this._handleTrashButtonClick();
		})

		this._element.querySelector('.gallery__list-image').addEventListener('click', () => {
			this._handleCardClick();
		})

	}

	generateCard() {
		this._element = this._getCard();
		this._setEventListeners();

		const galleryImage = this._element.querySelector('.gallery__list-image');
		const galleryImageName = this._element.querySelector('.gallery__image-title');

		galleryImage.src = this._link;
		galleryImage.alt = this._name;
		galleryImageName.textContent = this._name;


		return this._element;
	}
}