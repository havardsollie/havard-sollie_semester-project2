import { url } from "../utils/api.js";
import getCart from "../utils/getCart.js";
import saveCart from "../utils/saveCart.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
export const productUrl = url + id;

const cart = getCart();

export function displayDetails (product) {
  const container = document.querySelector(".product-container");

  container.innerHTML = "";
  
  let cssClass = "far";

  const cartItem = cart.find(function (fav) {
    return parseInt(fav.id) === product.id;
  })

  if (cartItem) {
    cssClass = "fa";
  }
  
  container.innerHTML += `<div class="detailedData">
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    <p>${product.price}</p>
    <img src="http://localhost:1337${product.image.url}" width="400px" height="300px" alt="${product.image.alternativeText}">
    <i class="${cssClass} fa-heart" data-id="${product.id}"></i>
    </div>`

    const iconToClick = document.querySelectorAll(".detailedData i");

    iconToClick.forEach((icon) => {
        icon.addEventListener("click", addToList);
    });
}

export function addToList() {
  this.classList.toggle("fa");
  this.classList.toggle("far");

  const id = this.dataset.id;

  const cart = getCart();

  const cartItem = cart.find(function(fav) {
    return fav.id === id;
  });
  
  if (cartItem === undefined) {
    const newItem = { id: id};
    cart.push(newItem);
    saveCart(cart);
  }
  else {
    const newCart = cart.filter((fav) => fav.id !== id);
    saveCart(newCart);
  }
}