import getCart from "./utils/getCart.js";
import menu from "./utils/createMenu.js";

menu();

const cart = getCart();

const container = document.querySelector(".cart-container");

if(cart.length === 0) {
  container.innerHTML = `<div class="error">
                            <p>There are no favorites</p>
                          </div>`
}

const totalPrice = document.querySelector(".total");
let total = 0;

cart.forEach((product) => {
  total += parseFloat(product.price);
  container.innerHTML += `<span class="item">
                            <img src="${product.image}" width="200px" height="150px">
                            <div class="inner-item">
                            <h3>${product.title}</h3>
                            <h4>$${product.price},-</h4>
                            <a href="details.html?id=${product.id}">
                            <p>Go to page</p></a>
                            </div>
                            </span>
                            <hr>`
}); 

totalPrice.innerHTML = `<p>Total:</p><h4>$${total}</h4>`;