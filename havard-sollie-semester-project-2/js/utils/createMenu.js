import { getUsername } from "../settings/storage.js";
import logOutBtn from "./logout.js";

export default function menu() {
  const { path } = document.location;
  const container = document.querySelector(".menu-container");
  const username = getUsername();
  let authorizationLink = `<a href="admin.html" class="${path === "/admin.html" ? "active" : ""}">Login</a>`;

  if (username) {
    authorizationLink = `
                          <a href="productsforadmin.html" class="${path === "/productsforadmin.html" ? "active" : ""}">Edit Products</a>
                          <a href="add.html" class="${path === "/add.html" ? "active" : ""}">Add product</a>
                          <i class="fa fa-dove" id="dove"></i>
                        `;
  }

  container.innerHTML = `<label for="hamburger-menu"><i class="fas fa-bars"></i></label>
                          <input type="checkbox" id="hamburger-menu">
                          <nav>
                          <div class="menu-items">
                              
                              <div class="menu-links">
                                <a href="index.html" class="${path === "/index.html" ? "active" : ""}">Home</a>
                                <a href="products.html" class="${path === "/products.html" ? "active" : ""}">Collection</a>
                                <a href="cart.html" id="cart" class="${path === "/cart.html" ? "active" : ""}">Cart</a>
                                ${authorizationLink}
                              </div>
                          </div>
                          </nav>`;
  
  logOutBtn();
}