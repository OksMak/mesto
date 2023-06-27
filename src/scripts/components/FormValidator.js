export default class FormValidator {
  constructor({ data, form }) {
    this._data = data;
		this._form = form;
		this._inputSelector = this._data.inputSelector;
		this._submitButtonSelector = this._data.submitButtonSelector;
		this._inactiveButtonClass = this._data.inactiveButtonClass;
		this._inputErrorClass = this._data.inputErrorClass;
		this._errorClass = this._data.errorClass;
		this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
		this._buttonElement = this._form.querySelector(this._submitButtonSelector);
	}

	_hasInvalidInput(inputList) {
		return inputList.some(input => {
			return !input.validity.valid;
		})
	}

	// button state

  disableSubmitButton() {
		this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', 'disabled');
	}

  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled');
  }

	_toggleButtonState(inputList) {
		if (this._hasInvalidInput(inputList)) {
      this.disableSubmitButton();
		} else {
			this._enableSubmitButton();
		}
	}

	// error element

	_searchErrorElement(inputElement) {
		return this._form.querySelector(`.${inputElement.id}-error`);
	}

	_showInputError(inputElement, errorMessage) {
		const errorElement = this._searchErrorElement(inputElement);

		inputElement.classList.add(this._inputErrorClass);
		errorElement.classList.add(this._errorClass);
		errorElement.textContent = errorMessage;
	}

	_hideInputError(inputElement) {
		const errorElement = this._searchErrorElement(inputElement);

		inputElement.classList.remove(this._inputErrorClass);
		errorElement.classList.remove(this._errorClass);
		errorElement.textContent = '';
	}

	// validity check

	_isValid(inputElement){
		if (!inputElement.validity.valid) {
			this._showInputError(inputElement, inputElement.validationMessage);
		} else {
			this._hideInputError(inputElement);
		}
	}

	removeValidationErrors() {
		this._inputList.forEach(inputElement => {
			this._hideInputError(inputElement);
		})
	}

	// handle input

	_handleInputElementInput(inputElement, inputList, buttonElement) {
		this._isValid(inputElement);
		this._toggleButtonState(inputList, buttonElement);
	}

	_setEventListener() {
		this._inputList.forEach(inputElement => {
			inputElement.addEventListener('input', () => {
				this._handleInputElementInput(inputElement, this._inputList, this._buttonElement);
			})
		})
	}

	enableValidation() {
		this._setEventListener();
	}
}