const enableValidation = (data) => {
	const formList = Array.from(document.querySelectorAll(data.formSelector));

	// edit profile

	const popupEditProfile = document.querySelector('.popup_type_edit-profile');
	const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__close');
	const buttonOpenEditProfile = document.querySelector('.profile__button-edit');

	// add cards
	
	const popupAddCards = document.querySelector('.popup_type_add-cards');
	const buttonCloseAddCards = popupAddCards.querySelector('.popup__close');
	const buttonOpenAddCards = document.querySelector('.profile__button-add');

	const hasInvalidInput = (inputList) => {
		return inputList.some(input => {
			return !input.validity.valid;
		})
	}
	
	const toggleButtonState = (inputList, button) => {
		if (hasInvalidInput(inputList)) {
			console.log('true')
			button.classList.add(data.inactiveButtonClass);
		} else {
			console.log('false')
			button.classList.remove(data.inactiveButtonClass);
		}
	}
	
	const showInputError = (formElement, inputElement, errorMessage) => {
		const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	
		inputElement.classList.add(data.inputErrorClass);
		errorElement.classList.add(data.errorClass);
		errorElement.textContent = errorMessage;
	}
	
	const hideInputError = (formElement, inputElement) => {
		const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	
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
	errorClass: 'popup__input-error_visible'
  });