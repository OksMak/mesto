import { data } from '../utils/constants.js';

export default class Card {
	constructor(dataCard, handleCardClick, template) {
		this._link = dataCard.link;
		this._name = dataCard.name;
		this._template = template;
		this._handleCardClick = handleCardClick;
		this._popupOpenCardImage = document.querySelector(data.popupOpenImage);
		this._popupImage = this._popupOpenCardImage.querySelector(data.popupImage);
		this._popupImageCaption = this._popupOpenCardImage.querySelector(data.popupCaption);
	}

	_getCard() {
		const cardElement = document.querySelector(this._template)
																.content
																.querySelector(data.galleryListItem)
																.cloneNode(true);

		return cardElement;
	}

	_handleLikeButtonClick() {
		this._element.querySelector(data.galleryLike).classList.toggle(data.galleryLikeActive);
	}

	_handleTrashButtonClick() {
		this._element.remove();
	}

	_setEventListeners() {
		this._element.querySelector(data.galleryLike).addEventListener('click', this._handleLikeButtonClick.bind(this));

		this._element.querySelector(data.galleryTrash).addEventListener('click', this._handleTrashButtonClick.bind(this))

		this._element.querySelector(data.galleryImage).addEventListener('click', this._handleCardClick)
	}

	generateCard() {
		this._element = this._getCard();
		this._setEventListeners();

		const cardImage = this._element.querySelector(data.galleryImage);
		const cardImageName = this._element.querySelector(data.galleryTitle);

		cardImage.src = this._link;
		cardImage.alt = this._name;
		cardImageName.textContent = this._name;


		return this._element;
	}
}