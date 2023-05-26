class Card {
	constructor(data, template) {
		this._link = data.link;
		this._name = data.name;
		this._template = template;
	}

	_getCard() {
		const cardElement = document.querySelector(this._template)
																.content
																.querySelector('.gallery__list-item')
																.cloneNode(true);

		return cardElement;
	}

	_openCardImage(cardElement) {
		cardElement.classList.add('popup_opened');
	}

	_handleLikeButtonClick() {
		this._element.querySelector('.gallery__like').classList.toggle('gallery__like_active');
	}

	_handleTrashButtonClick() {
		this._element.remove();
	}

	_handleCardImageClick() {
		this._popupOpenCardImage = document.querySelector('.popup_type_show-image');
		this._popupImage = document.querySelector('.popup__image');
		this._popupImageCaption = document.querySelector('.popup__caption');

		this._openCardImage(this._popupOpenCardImage);
		this._popupImage.src = this._link;
		this._popupImage.alt = this._name;
		this._popupImageCaption.textContent = this._name;
	}

	_setEventListeners() {
		this._element.querySelector('.gallery__like').addEventListener('click', () => {
			this._handleLikeButtonClick();
		});

		this._element.querySelector('.gallery__trash').addEventListener('click', () => {
			this._handleTrashButtonClick();
		})

		this._element.querySelector('.gallery__list-image').addEventListener('click', () => {
			this._handleCardImageClick();
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

export default Card;