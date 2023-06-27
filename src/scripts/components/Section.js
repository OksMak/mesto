export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(initialCards) {
    initialCards.forEach(item => {
      this._renderer(item);
    })
  }

  addItem(element, position) {
    switch (position) {
      case 'prepend': 
        this._container.prepend(element);
        break;

      default:
        this._container.append(element);
    }
  }
}