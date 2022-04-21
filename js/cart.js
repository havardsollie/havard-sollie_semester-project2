import getCart from "./utils/getCart.js";

const cart = getCart();

const container = document.querySelector(".product-container");

if(cart.length === 0) {
  container.innerHTML = `<div class="error">
                            <p>There are no favorites</p>
                          </div>`
}

const totalPrice = document.querySelector(".total");
let total = 0;

cart.forEach((product) => {
  total += product.price;
  container.innerHTML += `<div class="item">
                            <p>${product.title}</p>
                            <p>${product.price}</p>
                            <img src="${product.image}" width="200px" height="150px">
                            <a href="details.html?id=${product.id}">
                            <p>Go to page</p></a>
                            </div>`
                            
});

totalPrice.innerHTML = `Total: ${total}`;