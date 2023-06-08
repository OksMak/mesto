import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ data, popupSelector }) {
    super(data, popupSelector);
    this._popupImage = this._popup.querySelector(this._data.popupImage);
    this._popupImageCaption = this._popup.querySelector(this._data.popupCaption)
  }

  open(element) {
    super.open();

    const cardImage = element.querySelector(this._data.cardImage);
    const cardCaption = element.querySelector(this._data.cardTitle);

    this._popupImage.src = cardImage.src;
		this._popupImage.alt = cardCaption.textContent;
		this._popupImageCaption.textContent = cardCaption.textContent;
  }
}