import Popup from './Popup.js';
import { data } from '../utils/constants.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputList = this._getPopup().querySelectorAll(data.inputSelector);

    this._formData = {};

    this._inputList.forEach(input => {
      this._formData[input.name] = input.value;
    })

    return this._formData;
  }

  _getForm() {
    this._form = this._getPopup().querySelector(data.formSelector);

    return this._form;
  }

  _resetForm() {
    this._getForm().reset();
  }

  close() {
    super.close();
    this._resetForm();
  }

  setEventListeners() {
    super.setEventListeners();

    this._getForm().addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    })
  }
}