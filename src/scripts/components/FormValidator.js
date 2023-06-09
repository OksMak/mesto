export default class FormValidator {
  constructor({ data, formSelector }) {
    this._data = data;
		this._formSelector = formSelector;
		this._inputSelector = this._data.inputSelector;
		this._submitButtonSelector = this._data.submitButtonSelector;
		this._inactiveButtonClass = this._data.inactiveButtonClass;
		this._inputErrorClass = this._data.inputErrorClass;
		this._errorClass = this._data.errorClass;
		this._inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
		this._buttonElement = this._formSelector.querySelector(this._submitButtonSelector);
	}

	_hasInvalidInput(inputList) {
		return inputList.some(input => {
			return !input.validity.valid;
		})
	}

	// button state

	_toggleButtonState(inputList, buttonElement) {
		if (this._hasInvalidInput(inputList)) {
			buttonElement.classList.add(this._inactiveButtonClass);
      this.disableSubmitButton();
		} else {
			buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
		}
	}

	// error element

	_searchErrorElement(inputElement) {
		return this._formSelector.querySelector(`.${inputElement.id}-error`);
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

	disableSubmitButton() {
		this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', 'disabled');
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