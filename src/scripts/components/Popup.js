export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  _searchPopup() {
    const popup = document.querySelector(this._popupSelector);

    return popup;
  }

  _searchClosePopupButton() {
    const buttonCloseButton = this._searchPopup().querySelector('.popup__close');

    return buttonCloseButton;
  }

  open() {
    this._searchPopup().classList.add('popup_opened');
  }

  close() {
    this._searchPopup().classList.remove('popup_opened');
  }

  _handleCloseOverlayClick(evt) {
    if (evt.target.classList.contains('popup')) {
      this.close(evt.target);
    }
  }

  _handleSetCursorMouseover(evt) {
    if (evt.target.classList.contains('popup__container')) {
      evt.target.style.cursor = 'auto';
    }
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._buttonClosePopup = this._searchClosePopupButton();
    this._popup = this._searchPopup();

    this._popup.addEventListener('click', (evt) => {
      this._handleCloseOverlayClick(evt);
    })

    this._popup.addEventListener('mouseover', (evt) => {
      this._handleSetCursorMouseover(evt);
    })

    this._buttonClosePopup.addEventListener('click', () => {
      this.close();
    })

    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    })
  }
}