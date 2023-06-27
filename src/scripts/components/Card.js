export default class Card {
	constructor({ data, dataCard, userId, handleImageClick, handleLikeButtonClick, handleTrashButtonClick, template }) {
    this._data = data;
    this._userId = userId;
    this._cardId = dataCard._id;
    this._ownerId = dataCard.owner._id;
		this._link = dataCard.link;
		this._name = dataCard.name;
    this._likes = dataCard.likes;
    this._countLikes = dataCard.likes.length;
		this._template = template;
		this._handleImageClick = handleImageClick;
    this._handleLikeButtonClick = handleLikeButtonClick;
    this._handleTrashButtonClick = handleTrashButtonClick;
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
    this._likeCounter = this._element.querySelector(this._data.likeCounter);
    this._trashButton = this._element.querySelector(this._data.trashButton);
    this._cardImage = this._element.querySelector(this._data.cardImage);
    this._cardTitle = this._element.querySelector(this._data.cardTitle);

    if (!this._checkOwnerCard()) {
      this._trashButton.remove();
    }

    this._likeCounter.textContent = this._countLikes;
		this._cardImage.src = this._link;
		this._cardImage.alt = this._name;
		this._cardTitle.textContent = this._name;

    this._toggleLikeButtonState();
		this._setEventListeners();

		return this._element;
	}

  getCardId() {
    return this._cardId;
  }

  _toggleLikeButtonState() {
    if (this._checkUserLike()) {
      this.addLike();
    } else {
      this.removeLike();
    }
  }

  addLike() {
    this._likeButton.classList.add(this._data.likeButtonActive);
    this.isLiked = true;
  }

  removeLike() {
    this._likeButton.classList.remove(this._data.likeButtonActive);
    this.isLiked = false;
  }

  updateLikes(data) { 
    this._likeCounter.textContent = data.likes.length;
  }

  _checkOwnerCard() {
    return this._ownerId === this._userId;
  }

  _checkUserLike() {
    return this._likes.some((item) => item._id === this._userId);
  }

  removeCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', this._handleLikeButtonClick);

    this._trashButton.addEventListener('click', this._handleTrashButtonClick);
 
		this._cardImage.addEventListener('click', this._handleImageClick);
	}
}