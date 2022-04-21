import getCart from "./utils/getCart.js";

const cart = getCart();

const container = document.querySelector(".product-container");

if(cart.length === 0) {
  container.innerHTML = "There are no favorites";
}

cart.forEach((product) => {
  container.innerHTML += `<div class="item">
                            <p>${product.title}</p>
                            <p>${product.price}</p>
                            <img src="${product.image}" width="200px" height="150px">
                            <a href="details.html?id=${product.id}">
                            <p>Go to page</p></a>
                            </div>`
});