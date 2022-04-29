import { userKey, tokenKey } from "./utils/storage.js";

const logoutButton = document.querySelector("#logout");

function logOut() {
  logoutButton.addEventListener("click", logMeOut);

  function logMeOut() {
    localStorage.removeItem(userKey, tokenKey);

    location.href = "index.html";
  }
}
logOut();