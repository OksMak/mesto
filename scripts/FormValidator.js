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

	_setEventListeners() {
		const inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
		const buttonElement = this._formSelector.querySelector(this._submitButtonSelector);

		this._toggleButtonState(inputList, buttonElement);

		inputList.forEach(inputElement => {

			// input listener

		inputElement.addEventListener('input', () => {
			this._handleInputElementInput(inputElement, inputList, buttonElement);
		})

			// sumbit listener

			this._formSelector.addEventListener('submit', () => {
				this._handleFormSubmit(inputElement, buttonElement);
			})

			// edit profile listeners

			const popupEditProfile = document.querySelector(this._popupEditProfileClass);
			const buttonCloseEditProfile = popupEditProfile.querySelector(this._buttonClose);
			const buttonOpenEditProfile = document.querySelector(this._buttonEditProfile);

			buttonOpenEditProfile.addEventListener('click', () => {
				this._handleButtonOpenEditProfileClick(inputElement, buttonElement);
			})
	
			buttonCloseEditProfile.addEventListener('click', () => {
				this._handleButtonCloseEditProfileClick(inputElement, buttonElement);
			})

			// add cards listeners

			const popupAddCards = document.querySelector(this._popupAddCardsClass);
			const buttonCloseAddCards = popupAddCards.querySelector(this._buttonClose);
			const buttonOpenAddCards = document.querySelector(this._buttonAddCards);

			buttonOpenAddCards.addEventListener('click', () => {
				this._handleButtonOpenAddCardsClick(inputElement, inputList, buttonElement)
			})
	
			buttonCloseAddCards.addEventListener('click', () => {
				this._handleButtonCloseAddCardsClick(inputElement, inputList, buttonElement)
			})
		})
	}

	enableValidation() {
		this._setEventListeners();
	}
}

export default FormValidator;