import { userKey, tokenKey } from "./storage.js";

export default function logOutBtn() {
  const button = document.querySelector("#dove");

  if(button) {

    button.onclick = function () {
      const check = confirm("Log out?");

      if(check) {
        localStorage.removeItem(userKey, tokenKey);

        location.href = "index.html";
      }
  }
}
}
