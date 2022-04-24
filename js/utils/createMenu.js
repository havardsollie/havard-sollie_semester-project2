import { getUsername } from "./storage.js";

export default function menu() {
  const { path } = document.location;
  const container = document.querySelector(".menu");
  const username = getUsername();
  let authorizationLink = `<a href="admin.html" class="${path === "/admin.html" ? "active" : ""}">Login</a>`;

  if (username) {
    authorizationLink = `<span>Hi ${username}</span>`;
  }

  container.innerHTML = `<div class="menu-items>
                              <a href="/" class="${path === "/" ? "active" : ""}">Back</a>
                              ${authorizationLink}
                          </div>`;
}