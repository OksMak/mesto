export default class Section {
  constructor({ dataCard, renderer }, containerSelector) {
    this._initialArray = dataCard;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  renderItems() {
    this._initialArray.forEach(item => {
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