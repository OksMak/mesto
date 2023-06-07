export default class UserInfo {
  constructor({ selectorUserName, selectorUserProfession }) {
    this._selectorUserName = selectorUserName;
    this._selectorUserProfession = selectorUserProfession;
  }

  _getUserName() {
    const userName = document.querySelector(this._selectorUserName);

    return userName;
  }

  _getUserProfession() {
    const userProfession = document.querySelector(this._selectorUserProfession);

    return userProfession;
  }

  getUserInfo() {
    this._userData = {};

    this._userData.name = this._getUserName().textContent;
    this._userData.profession = this._getUserProfession().textContent;

    return this._userData;
  }

  setUserInfo(userData) {
    this._getUserName().textContent = userData.name;
    this._getUserProfession().textContent = userData.profession;
  }
}