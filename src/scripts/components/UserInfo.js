export default class UserInfo {
  constructor({ selectorUserName, selectorUserProfession }) {
    this._selectorUserName = selectorUserName;
    this._selectorUserProfession = selectorUserProfession;
    this._userName = document.querySelector(this._selectorUserName);
    this._userProfession = document.querySelector(this._selectorUserProfession);
  }

  getUserInfo() {
    this._userData = {};

    this._userData.name = this._userName.textContent;
    this._userData.profession = this._userProfession.textContent;

    return this._userData;
  }

  setUserInfo(userData) {
    this._userName.textContent = userData.name;
    this._userProfession.textContent = userData.profession;
  }
}