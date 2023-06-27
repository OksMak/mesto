import Popup from '../components/Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor({ data, popupSelector }) {
    super(data, popupSelector);
    this._form = this._popup.querySelector(this._data.formSelector);
  }

  setConfirmSubmit(instruction) {
    this._handleFormSubmit = instruction;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
      this.close();
    })
  }
}