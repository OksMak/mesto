import { data } from '../utils/constants.js';

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._closeEsc = this._handleEscClose.bind(this);
  }

  _getPopup() {
    const popup = document.querySelector(this._popupSelector);

    return popup;
  }

  _getClosePopupButton() {
    const buttonCloseButton = this._getPopup().querySelector(data.buttonClose);

    return buttonCloseButton;
  }

  

  open() {
    this._getPopup().classList.add(data.popupOpened);
    document.addEventListener('keydown', this._closeEsc);
  }

  close() {
    this._getPopup().classList.remove(data.popupOpened);
    document.removeEventListener('keydown', this._closeEsc);
  }

  _handleCloseOverlayClick(evt) {
    if (evt.target.classList.contains(data.popup)) {
      this.close();
    }
  }

  _handleSetCursorMouseover(evt) {
    if (evt.target.classList.contains(data.popupContainer)) {
      evt.target.style.cursor = 'auto';
    }
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      console.log('test')
      this.close();
    }
  }

  setEventListeners() {
    this._popup = this._getPopup();

    this._popup.addEventListener('click', (evt) => {
      this._handleCloseOverlayClick(evt);
    })

    this._popup.addEventListener('mouseover', (evt) => {
      this._handleSetCursorMouseover(evt);
    })

    this._getClosePopupButton().addEventListener('click', this.close.bind(this));
  }
}