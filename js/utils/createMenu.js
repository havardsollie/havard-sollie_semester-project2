import { getUsername } from "./storage.js";

export default function menu() {
  const { path } = document.location;
  const container = document.querySelector(".menu");
  const username = getUsername();
  let authorizationLink = `<a href="admin.html" class="${path === "/admin.html" ? "active" : ""}">Login</a>`;

  if (username) {
    authorizationLink = `<a href="add.html" class="${path === "/add.html" ? "active" : ""}">Add product</a><span>Hi ${username}</span>`;
  }

  container.innerHTML = `<div class="menu-items>
                              <a href="productsforadmin.html" class="${path === "/productsforadmin.html" || path === "/productsforadmin.html" ? "active" : ""}">Home</a>
                              ${authorizationLink}
                          </div>`;
}