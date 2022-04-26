import { getUsername } from "./storage.js";

export default function menu() {
  const { path } = document.location;
  const container = document.querySelector(".menu");
  const username = getUsername();
  let authorizationLink = `<a href="admin.html" class="${path === "/admin.html" ? "active" : ""}">Login</a>`;

  if (username) {
    authorizationLink = ` <a href="productsforadmin.html" class="${path === "/productsforadmin.html" ? "active" : ""}">Edit Products</a>
                          <a href="add.html" class="${path === "/add.html" ? "active" : ""}">Add product</a>
                          <span>Hi ${username}</span>`;
  }

  container.innerHTML = `<div class="menu-items>
                              <a href="/" class="${path === "/" || path === "/productsforadmin.html" ? "active" : ""}">Home</a>
                              <a href="products.html" class="${path === "/products.html" ? "active" : ""}">Products</a>
                              <a href="cart.html" class="${path === "/cart.html" ? "active" : ""}">Cart</a>
                              ${authorizationLink}
                          </div>`;
}