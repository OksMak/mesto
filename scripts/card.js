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

	_setEventListeners() {
		this._element.querySelector('.gallery__like').addEventListener('click', () => {
			this._handleLikeButtonClick();
		});

		this._element.querySelector('.gallery__trash').addEventListener('click', () => {
			this._handleTrashButtonClick();
		})
	}

	_handleLikeButtonClick() {
		this._element.querySelector('.gallery__like').classList.toggle('gallery__like_active');
	}

	_handleTrashButtonClick() {
		this._element.remove();
	}
}

export default Card;