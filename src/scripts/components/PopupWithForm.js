import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ data, popupSelector, handleFormSubmit }) {
    super(data, popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popup.querySelectorAll(this._data.inputSelector);
    this._form = this._popup.querySelector(this._data.formSelector);
    this._submitButton = this._form.querySelector(this._data.submitButton);
    this._submitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    this._formData = {};

    this._inputList.forEach(input => {
      this._formData[input.name] = input.value;
    })

    return this._formData;
  }

  setInputValues(data) {
    this._inputList.forEach(input => {
      input.value = data[input.name];
    })
  }

  _resetForm() {
    this._form.reset();
  }

  close() {
    super.close();
    this._resetForm();
  }

  renderLoading(isLoading, loadingText = 'Сохранение...') {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  }
}