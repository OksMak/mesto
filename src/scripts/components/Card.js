export default class Card {
	constructor(data, dataCard, handleCardClick, template) {
    this._data = data;
		this._link = dataCard.link;
		this._name = dataCard.name;
		this._template = template;
		this._handleCardClick = handleCardClick;
	}

	_getCard() {
		const cardElement = document.querySelector(this._template)
																.content
																.querySelector(this._data.galleryListItem)
																.cloneNode(true);

		return cardElement;
	}

	generateCard() {
		this._element = this._getCard();
    this._likeButton = this._element.querySelector(this._data.likeButton);
    this._trashButton = this._element.querySelector(this._data.trashButton);
    this._cardImage = this._element.querySelector(this._data.cardImage);
    this._cardTitle = this._element.querySelector(this._data.cardTitle);

		this._setEventListeners();

		this._cardImage.src = this._link;
		this._cardImage.alt = this._name;
		this._cardTitle.textContent = this._name;


		return this._element;
	}

  _handleLikeButtonClick() {
		this._likeButton.classList.toggle(this._data.likeButtonActive);
	}

	_handleTrashButtonClick() {
		this._element.remove();
	}

  _setEventListeners() {
    this._likeButton.addEventListener('click', this._handleLikeButtonClick.bind(this));

    this._trashButton.addEventListener('click', this._handleTrashButtonClick.bind(this))
 
		this._cardImage.addEventListener('click', this._handleCardClick)
	}
}