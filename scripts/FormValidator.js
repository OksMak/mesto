class FormValidator {
  constructor(data, formSelector) {
		this._formSelector = formSelector;
		this._inputSelector = data.inputSelector;
		this._submitButtonSelector = data.submitButtonSelector;
		this._inactiveButtonClass = data.inactiveButtonClass;
		this._inputErrorClass = data.inputErrorClass;
		this._errorClass = data.errorClass;
		this._popupEditProfileClass = data.popupEditProfileClass;
		this._popupAddCardsClass = data.popupAddCardsClass;
		this._buttonEditProfile = data.buttonEditProfile;
		this._buttonAddCards = data.buttonAddCards;
		this._buttonClose = data.buttonClose;
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
		} else {
			buttonElement.classList.remove(this._inactiveButtonClass);
		}
	}

	_setInactiveButton(buttonElement) {
		buttonElement.classList.add(this._inactiveButtonClass);
	}

	// error element

	_searchErrorElement(inputElement) {
		return this._formSelector.querySelector(`.${inputElement.id}-error`);
	}

	_returnErrorElement(inputElement) {
		return this._searchErrorElement(inputElement);
	}

	_showInputError(inputElement, errorMessage) {
		const errorElement = this._returnErrorElement(inputElement);

		inputElement.classList.add(this._inputErrorClass);
		errorElement.classList.add(this._errorClass);
		errorElement.textContent = errorMessage;
	}

	_hideInputError(inputElement) {
		const errorElement = this._returnErrorElement(inputElement);

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

	// handles edit profile

	_handleButtonOpenEditProfileClick(inputElement, buttonElement) {
		this._isValid(inputElement);
		this._setInactiveButton(buttonElement);
	}

	_handleButtonCloseEditProfileClick(inputElement, buttonElement) {
		this._isValid(inputElement);
		this._setInactiveButton(buttonElement);
	}

	// handles add cards

	_handleButtonOpenAddCardsClick(inputElement, inputList, buttonElement) {
		this._hideInputError(inputElement);
		this._toggleButtonState(inputList, buttonElement);
	}

	_handleButtonCloseAddCardsClick(inputElement, inputList, buttonElement) {
		this._hideInputError(inputElement);
		this._toggleButtonState(inputList, buttonElement);
	}

	// handle input

	_handleInputElementInput(inputElement, inputList, buttonElement) {
		this._isValid(inputElement);
		this._toggleButtonState(inputList, buttonElement);
	}

	// handle submit

	_handleFormSubmit(inputElement, buttonElement) {
		this._isValid(inputElement);
		this._hideInputError(inputElement);
		this._setInactiveButton(buttonElement);
	}

	// listener open form

	_setEventListenerOpenForm(inputElement) {
		this._popupEditProfile = document.querySelector(this._popupEditProfileClass);
		this._buttonCloseEditProfile = this._popupEditProfile.querySelector(this._buttonClose);
		this._buttonOpenEditProfile = document.querySelector(this._buttonEditProfile);

		this._buttonOpenEditProfile.addEventListener('click', () => {
			this._handleButtonOpenEditProfileClick(inputElement, this._buttonElement);
		})

		this._popupAddCards = document.querySelector(this._popupAddCardsClass);
		this._buttonCloseAddCards = this._popupAddCards.querySelector(this._buttonClose);
		this._buttonOpenAddCards = document.querySelector(this._buttonAddCards);

		this._buttonOpenAddCards.addEventListener('click', () => {
			this._handleButtonOpenAddCardsClick(inputElement, this._inputList, this._buttonElement)
		})
	}

	// listener close form

	_setEventListenerCloseForm(inputElement) {
		this._buttonCloseEditProfile.addEventListener('click', () => {
			this._handleButtonCloseEditProfileClick(inputElement, this._buttonElement);
		})

		this._buttonCloseAddCards.addEventListener('click', () => {
			this._handleButtonCloseAddCardsClick(inputElement, this._inputList, this._buttonElement)
		})
	}

	// listener submit form

	_setEventListenerSubmitForm(inputElement) {
		this._formSelector.addEventListener('submit', () => {
			this._handleFormSubmit(inputElement, this._buttonElement);
		})
	}

	// listener input form

	_setEventListenerInputForm(inputElement) {
			inputElement.addEventListener('input', () => {
				this._handleInputElementInput(inputElement, this._inputList, this._buttonElement);
			})
	}

	_setEventListeners() {
		this._inputList.forEach(inputElement => {
			this._setEventListenerInputForm(inputElement);
			this._setEventListenerOpenForm(inputElement)
			this._setEventListenerCloseForm(inputElement);
			this._setEventListenerSubmitForm(inputElement)
		})
	}

	enableValidation() {
		this._setEventListeners();
	}
}

export default FormValidator;