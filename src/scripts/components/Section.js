export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  renderItems(initialCards) {
    initialCards.forEach(item => {
      this._renderer(item);
    })
  }

  addItem(position, element) {
    switch (position) {
      case 'prepend': 
        this._containerSelector.prepend(element);
        break;

      case 'append': 
        this._containerSelector.append(element);
    
      default:
        this._containerSelector.append(element);
    }
  }
}