export default class Popup {
  constructor(data, popupSelector) {
    this._data = data;
    this._popupSelector = popupSelector;
    this._closeEsc = this._handleEscClose.bind(this);
    this._popup = document.querySelector(this._popupSelector);
    this._buttonClosePopup = this._popup.querySelector(this._data.buttonClose);
  }

  open() {
    this._popup.classList.add(this._data.popupOpened);
    document.addEventListener('keydown', this._closeEsc);
  }

  close() {
    this._popup.classList.remove(this._data.popupOpened);
    document.removeEventListener('keydown', this._closeEsc);
  }

  _handleCloseOverlayClick(evt) {
    if (evt.target.classList.contains(this._data.popup)) {
      this.close();
    }
  }

  _handleSetCursorMouseover(evt) {
    if (evt.target.classList.contains(this._data.popupContainer)) {
      evt.target.style.cursor = 'auto';
    }
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      this._handleCloseOverlayClick(evt);
    })

    this._popup.addEventListener('mouseover', (evt) => {
      this._handleSetCursorMouseover(evt);
    })

    this._buttonClosePopup.addEventListener('click', this.close.bind(this));
  }
}