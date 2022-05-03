import { userKey, tokenKey } from "./utils/storage.js";

const logoutButton = document.querySelector("#logout");

export function logOut() {
  logoutButton.addEventListener("click", logMeOut);

  function logMeOut() {
    localStorage.removeItem(userKey, tokenKey);

    location.href = "index.html";
  }
}
logOut();
