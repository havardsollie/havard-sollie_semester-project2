
import getCart from "../utils/getCart.js";
import saveCart from "../utils/saveCart.js";

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
    <div class="detailed-img">
    <img src="http://localhost:1337${product.image.url}" width="100%" height="auto" alt="${product.image.alternativeText}">
    </div>
    <div class="inner-details">
    <h3>${product.title}</h3>
    <i class="${cssClass} fa-heart" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="http://localhost:1337${product.image.url}"></i>
    <h4>$${product.price}</h4>
    </div>
    <p>${product.description}</p>
    </div>`

    const iconToClick = document.querySelectorAll(".detailedData i");

    iconToClick.forEach((icon) => {
        icon.addEventListener("click", addToList, function (){
          this.id = product.id;
          cart.push(product);
          saveCart();
        });
    });
}

export function addToList() {
  this.classList.toggle("fa");
  this.classList.toggle("far");

  const id = this.dataset.id;
  const title = this.dataset["title"];
  const price = this.dataset["price"];
  const image = this.dataset["image"];

  const cart = getCart();

  const cartItem = cart.find(function(fav) {
    return fav.id === id;
  });
  
  if (cartItem === undefined) {
    const newItem = { id: id, title: title, price: price, image: image };
    cart.push(newItem);
    saveCart(cart);
  }
  else {
    const newCart = cart.filter((fav) => fav.id !== id);
    saveCart(newCart);
  }
}