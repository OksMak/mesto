const enableValidation = (data) => {
	const formList = Array.from(document.querySelectorAll(data.formSelector));

	// edit profile

	const popupEditProfile = document.querySelector(data.popupEditProfileClass);
	const buttonCloseEditProfile = popupEditProfile.querySelector(data.buttonClose);
	const buttonOpenEditProfile = document.querySelector(data.buttonEditProfile);

	// add cards

	const popupAddCards = document.querySelector(data.popupAddCardsClass);
	const buttonCloseAddCards = popupAddCards.querySelector(data.buttonClose);
	const buttonOpenAddCards = document.querySelector(data.buttonAddCards);

	const hasInvalidInput = (inputList) => {
		return inputList.some(input => {
			return !input.validity.valid;
		})
	}
	
	const toggleButtonState = (inputList, button) => {
		if (hasInvalidInput(inputList)) {
			button.classList.add(data.inactiveButtonClass);
		} else {
			button.classList.remove(data.inactiveButtonClass);
		}
	}
	
	const searchErrorElement = (formElement, inputElement) => {
		const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
		return errorElement;
	}
	
	const showInputError = (formElement, inputElement, errorMessage) => {
		const errorElement = searchErrorElement(formElement, inputElement);

		inputElement.classList.add(data.inputErrorClass);
		errorElement.classList.add(data.errorClass);
		errorElement.textContent = errorMessage;
	}
	
	const hideInputError = (formElement, inputElement) => {
		const errorElement = searchErrorElement(formElement, inputElement);

		inputElement.classList.remove(data.inputErrorClass);
		errorElement.classList.remove(data.errorClass);
		errorElement.textContent = '';
	}
	
	const isValid = (formElement, inputElement) => {
		if (!inputElement.validity.valid) {
			showInputError(formElement, inputElement, inputElement.validationMessage);
		} else {
			hideInputError(formElement, inputElement);
		}
	}
	
	const setEventListeners = (formElement) => {
		const inputList = Array.from(formElement.querySelectorAll(data.inputSelector));
		const buttonElement = formElement.querySelector(data.submitButtonSelector);

		toggleButtonState(inputList, buttonElement);

		inputList.forEach(inputElement => {

			inputElement.addEventListener('input', () => {
				isValid(formElement, inputElement);
				toggleButtonState(inputList, buttonElement);
			})

			formElement.addEventListener('submit', () => {
				isValid(formElement, inputElement);
				hideInputError(formElement, inputElement);
				toggleButtonState(inputList, buttonElement);
			})

			buttonOpenEditProfile.addEventListener('click', () => {
				isValid(formElement, inputElement);
				toggleButtonState(inputList, buttonElement);
			})
	
			buttonCloseEditProfile.addEventListener('click', () => {
				isValid(formElement, inputElement);
				toggleButtonState(inputList, buttonElement);
			})

			buttonOpenAddCards.addEventListener('click', () => {
				hideInputError(formElement, inputElement);
				toggleButtonState(inputList, buttonElement);
			})
	
			buttonCloseAddCards.addEventListener('click', () => {
				hideInputError(formElement, inputElement);
				toggleButtonState(inputList, buttonElement);
			})
		})
	}

	formList.forEach(formElement => {
		setEventListeners(formElement);
	})
}

enableValidation({
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__input-error_visible',
	popupEditProfileClass: '.popup_type_edit-profile',
	popupAddCardsClass: '.popup_type_add-cards',
	buttonEditProfile: '.profile__button-edit',
	buttonAddCards: '.profile__button-add',
	buttonClose: '.popup__close'
  });