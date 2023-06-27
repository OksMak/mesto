export default class UserInfo {
  constructor({ selectorUserName, selectorUserProfession, selectorUserAvatar }) {
    this._selectorUserName = selectorUserName;
    this._selectorUserProfession = selectorUserProfession;
    this._selectorUserAvatar = selectorUserAvatar;
    this._userName = document.querySelector(this._selectorUserName);
    this._userProfession = document.querySelector(this._selectorUserProfession);
    this._userAvatar = document.querySelector(this._selectorUserAvatar);
  }

  getUserInfo() {
    this._userData = {};

    this._userData.name = this._userName.textContent;
    this._userData.profession = this._userProfession.textContent;
    this._userData.avatar = this._userAvatar.src;

    return this._userData;
  }

  setUserAvatar(data) {
    this._userAvatar.src = data.avatar;
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userProfession.textContent = data.about;
  }

  saveUserId(data) {
    this._userId = data;
  }

  getUserId() {
    return this._userId;
  }
}