(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e){var r=e.data,n=e.form;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=r,this._form=n,this._inputSelector=this._data.inputSelector,this._submitButtonSelector=this._data.submitButtonSelector,this._inactiveButtonClass=this._data.inactiveButtonClass,this._inputErrorClass=this._data.inputErrorClass,this._errorClass=this._data.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var r,n;return r=t,(n=[{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(t){this._hasInvalidInput(t)?this.disableSubmitButton():this._enableSubmitButton()}},{key:"_searchErrorElement",value:function(t){return this._form.querySelector(".".concat(t.id,"-error"))}},{key:"_showInputError",value:function(t,e){var r=this._searchErrorElement(t);t.classList.add(this._inputErrorClass),r.classList.add(this._errorClass),r.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._searchErrorElement(t);t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"removeValidationErrors",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_handleInputElementInput",value:function(t,e,r){this._isValid(t),this._toggleButtonState(e,r)}},{key:"_setEventListener",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._handleInputElementInput(e,t._inputList,t._buttonElement)}))}))}},{key:"enableValidation",value:function(){this._setEventListener()}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t,e){"prepend"===e?this._container.prepend(t):this._container.append(t)}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}var s=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._popupSelector=r,this._closeEsc=this._handleEscClose.bind(this),this._popup=document.querySelector(this._popupSelector),this._buttonClosePopup=this._popup.querySelector(this._data.buttonClose)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add(this._data.popupOpened),document.addEventListener("keydown",this._closeEsc)}},{key:"close",value:function(){this._popup.classList.remove(this._data.popupOpened),document.removeEventListener("keydown",this._closeEsc)}},{key:"_handleCloseOverlayClick",value:function(t){t.target.classList.contains(this._data.popup)&&this.close()}},{key:"_handleSetCursorMouseover",value:function(t){t.target.classList.contains(this._data.popupContainer)&&(t.target.style.cursor="auto")}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){t._handleCloseOverlayClick(e)})),this._popup.addEventListener("mouseover",(function(e){t._handleSetCursorMouseover(e)})),this._buttonClosePopup.addEventListener("click",this.close.bind(this))}}])&&u(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},f.apply(this,arguments)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(n);if(o){var r=y(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e,r=t.data,n=t.popupSelector,o=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,r,n))._handleFormSubmit=o,e._inputList=e._popup.querySelectorAll(e._data.inputSelector),e._form=e._popup.querySelector(e._data.formSelector),e._submitButton=e._form.querySelector(e._data.submitButton),e._submitButtonText=e._submitButton.textContent,e}return e=a,r=[{key:"_getInputValues",value:function(){var t=this;return this._formData={},this._inputList.forEach((function(e){t._formData[e.name]=e.value})),this._formData}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"_resetForm",value:function(){this._form.reset()}},{key:"close",value:function(){f(y(a.prototype),"close",this).call(this),this._resetForm()}},{key:"renderLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._submitButton.textContent=t?e:this._submitButtonText}},{key:"setEventListeners",value:function(){var t=this;f(y(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}}],r&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(s);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},m.apply(this,arguments)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(n);if(o){var r=b(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e,r=t.data,n=t.popupSelector;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,r,n))._popupImage=e._popup.querySelector(e._data.popupImage),e._popupImageCaption=e._popup.querySelector(e._data.popupCaption),e}return e=a,(r=[{key:"open",value:function(t){m(b(a.prototype),"open",this).call(this);var e=t.querySelector(this._data.cardImage),r=t.querySelector(this._data.cardTitle);this._popupImage.src=e.src,this._popupImage.alt=r.textContent,this._popupImageCaption.textContent=r.textContent}}])&&v(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(s);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function k(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===S(o)?o:String(o)),n)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},w.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(n);if(o){var r=E(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e,r=t.data,n=t.popupSelector;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,r,n))._form=e._popup.querySelector(e._data.formSelector),e}return e=a,(r=[{key:"setConfirmSubmit",value:function(t){this._handleFormSubmit=t}},{key:"setEventListeners",value:function(){var t=this;w(E(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit()}))}}])&&k(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(s);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}var I=function(){function t(e){var r=e.selectorUserName,n=e.selectorUserProfession,o=e.selectorUserAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._selectorUserName=r,this._selectorUserProfession=n,this._selectorUserAvatar=o,this._userName=document.querySelector(this._selectorUserName),this._userProfession=document.querySelector(this._selectorUserProfession),this._userAvatar=document.querySelector(this._selectorUserAvatar)}var e,r;return e=t,r=[{key:"getUserInfo",value:function(){return this._userData={},this._userData.name=this._userName.textContent,this._userData.profession=this._userProfession.textContent,this._userData.avatar=this._userAvatar.src,this._userData}},{key:"setUserAvatar",value:function(t){this._userAvatar.src=t.avatar}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userProfession.textContent=t.about}},{key:"saveUserId",value:function(t){this._userId=t}},{key:"getUserId",value:function(){return this._userId}}],r&&L(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}var T=function(){function t(e){var r=e.baseUrl,n=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=r,this._headers=n}var e,r;return e=t,r=[{key:"_handleCheck",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"_request",value:function(t,e){var r=this;return fetch("".concat(this._baseUrl,"/").concat(t),e).then((function(t){return r._handleCheck(t)}))}},{key:"_getProfileInfo",value:function(){return this._request("users/me",{headers:this._headers})}},{key:"_getInitialCards",value:function(){return this._request("cards",{headers:this._headers})}},{key:"getServerData",value:function(){return Promise.all([this._getProfileInfo(),this._getInitialCards()])}},{key:"removeLike",value:function(t){return this._request("cards/".concat(t,"/likes"),{method:"DELETE",headers:this._headers})}},{key:"editAvatar",value:function(t){return this._request("users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatarLink})})}},{key:"editProfileInfo",value:function(t){return this._request("users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.profession})})}},{key:"addLike",value:function(t){return this._request("cards/".concat(t,"/likes"),{method:"PUT",headers:this._headers})}},{key:"addNewCard",value:function(t){return this._request("cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})})}},{key:"removeCard",value:function(t){return this._request("cards/".concat(t),{method:"DELETE",headers:this._headers})}}],r&&B(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===A(o)?o:String(o)),n)}var o}var U=function(){function t(e){var r=e.data,n=e.dataCard,o=e.userId,i=e.handleImageClick,a=e.handleLikeButtonClick,u=e.handleTrashButtonClick,s=e.template;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=r,this._userId=o,this._cardId=n._id,this._ownerId=n.owner._id,this._link=n.link,this._name=n.name,this._likes=n.likes,this._countLikes=n.likes.length,this._template=s,this._handleImageClick=i,this._handleLikeButtonClick=a,this._handleTrashButtonClick=u}var e,r;return e=t,r=[{key:"_getCard",value:function(){return document.querySelector(this._template).content.querySelector(this._data.galleryListItem).cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getCard(),this._likeButton=this._element.querySelector(this._data.likeButton),this._likeCounter=this._element.querySelector(this._data.likeCounter),this._trashButton=this._element.querySelector(this._data.trashButton),this._cardImage=this._element.querySelector(this._data.cardImage),this._cardTitle=this._element.querySelector(this._data.cardTitle),this._checkOwnerCard()||this._trashButton.remove(),this._likeCounter.textContent=this._countLikes,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle.textContent=this._name,this._toggleLikeButtonState(),this._setEventListeners(),this._element}},{key:"getCardId",value:function(){return this._cardId}},{key:"_toggleLikeButtonState",value:function(){this._checkUserLike()?this.addLike():this.removeLike()}},{key:"addLike",value:function(){this._likeButton.classList.add(this._data.likeButtonActive),this.isLiked=!0}},{key:"removeLike",value:function(){this._likeButton.classList.remove(this._data.likeButtonActive),this.isLiked=!1}},{key:"updateLikes",value:function(t){this._likeCounter.textContent=t.likes.length}},{key:"_checkOwnerCard",value:function(){return this._ownerId===this._userId}},{key:"_checkUserLike",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._userId}))}},{key:"removeCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){this._likeButton.addEventListener("click",this._handleLikeButtonClick),this._trashButton.addEventListener("click",this._handleTrashButtonClick),this._cardImage.addEventListener("click",this._handleImageClick)}}],r&&q(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),R={popup:"popup",popupContainer:"popup__container",popupOpened:"popup_opened",formSelector:".popup__form",buttonClose:".popup__close",submitButton:".popup__button",popupEditProfile:".popup_type_edit-profile",buttonEditProfile:".profile__button-edit",popupAddCards:".popup_type_add-cards",buttonAddCards:".profile__button-add",popupOpenImage:".popup_type_show-image",popupImage:".popup__image",popupCaption:".popup__caption",popupEditAvatar:".popup_type_edit-avatar",popupWarning:".popup_type_warning",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible",inputSelector:".popup__input",inputTitleCard:".popup__input_type_title",inputLinkCard:".popup__input_type_link",profileName:".profile__name",profileProfession:".profile__speciality",profileAvatar:".profile__avatar",profileAvatarContainer:".profile__avatar-container",galleryTemplate:"#gallery__list-item",galleryList:".gallery__list",likeButton:".gallery__like",likeCounter:".gallery__like-counter",likeButtonActive:"gallery__like_active",trashButton:".gallery__trash",galleryListItem:".gallery__list-item",cardImage:".gallery__image",cardTitle:".gallery__image-title"},x=(Array.from(document.querySelectorAll(R.popup)),document.querySelector(R.profileName),document.querySelector(R.profileProfession),document.querySelector(R.profileAvatar),document.querySelector(R.profileAvatarContainer)),D=document.querySelector(R.buttonEditProfile),N=document.querySelector(R.buttonAddCards);function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var F={};!function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){var n=new r({data:t,form:e}),o=e.getAttribute("name");F[o]=n,n.enableValidation()}))}(R);var M=new T({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-69",headers:{authorization:"e8803ec9-a123-4a64-8ea6-17d84f0d5aa3","Content-Type":"application/json"}}),J=new I({selectorUserName:R.profileName,selectorUserProfession:R.profileProfession,selectorUserAvatar:R.profileAvatar}),H=new i({renderer:function(t){var e=X(t,R.galleryTemplate);H.addItem(e)}},R.galleryList);M.getServerData().then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],s=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);s=!0);}catch(t){l=!0,o=t}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,r)||function(t,e){if(t){if("string"==typeof t)return V(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?V(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];J.setUserInfo(o),J.setUserAvatar(o),J.saveUserId(o._id),H.renderItems(i)})).catch((function(t){return console.error(t)}));var W=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";e.renderLoading(!0,r),t().then((function(){e.close()})).catch((function(t){return console.error(t)})).finally((function(){e.renderLoading(!1)}))},z=new d({data:R,popupSelector:R.popupEditProfile,handleFormSubmit:function(t){W((function(){return M.editProfileInfo(t).then((function(t){J.setUserInfo(t)})).catch((function(t){return console.error(t)}))}),z)}}),$=new g({data:R,popupSelector:R.popupOpenImage}),G=new d({data:R,popupSelector:R.popupAddCards,handleFormSubmit:function(t){W((function(){return M.addNewCard(t).then((function(t){var e=X(t,R.galleryTemplate);H.addItem(e,"prepend")})).catch((function(t){return console.error(t)}))}),G,"Создание...")}}),K=new d({data:R,popupSelector:R.popupEditAvatar,handleFormSubmit:function(t){W((function(){return M.editAvatar(t).then((function(t){J.setUserAvatar(t)})).catch((function(t){return console.error(t)}))}),K)}}),Q=new P({data:R,popupSelector:R.popupWarning}),X=function(t,e){var r=new U({data:R,dataCard:t,userId:J.getUserId(),handleImageClick:function(){$.open(r.generateCard())},handleLikeButtonClick:function(){r.isLiked?M.removeLike(r.getCardId()).then((function(t){r.removeLike(),r.updateLikes(t)})).catch((function(t){return console.error(t)})):M.addLike(r.getCardId()).then((function(t){r.addLike(),r.updateLikes(t)})).catch((function(t){return console.error(t)}))},handleTrashButtonClick:function(t){var e=t.target.closest(R.galleryListItem);Q.open(),Q.setConfirmSubmit((function(){M.removeCard(r.getCardId()).then((function(){e.remove(),Q.close()})).catch((function(t){return console.error(t)}))}))},template:e});return r.generateCard()};z.setEventListeners(),G.setEventListeners(),$.setEventListeners(),K.setEventListeners(),Q.setEventListeners(),x.addEventListener("click",(function(){K.open(),F["avatar-form"].disableSubmitButton(),F["avatar-form"].removeValidationErrors()})),N.addEventListener("click",(function(){G.open(),F["cards-form"].disableSubmitButton(),F["cards-form"].removeValidationErrors()})),D.addEventListener("click",(function(){var t=J.getUserInfo();z.open(),z.setInputValues(t),F["profile-form"].disableSubmitButton(),F["profile-form"].removeValidationErrors()}))})();