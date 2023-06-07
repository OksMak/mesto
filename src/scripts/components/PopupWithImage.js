import Popup from "./Popup.js";
import { data } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
  }

  open(element) {
    super.open();
    const popupOpenCardImage = this._getPopup();
		const popupImage = popupOpenCardImage.querySelector(data.popupImage);
		const popupImageCaption = popupOpenCardImage.querySelector(data.popupCaption);

    const cardImage = element.querySelector(data.galleryImage);
    const cardCaption = element.querySelector(data.galleryTitle);

    popupImage.src = cardImage.src;
		popupImage.alt = cardCaption.textContent;
		popupImageCaption.textContent = cardCaption.textContent;
  }
}