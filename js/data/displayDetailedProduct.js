import { url } from "../utils/api.js";
// import getCart from "../utils/cart.js";
// import { AMOUNT } from "../utils/settings.js";
// import addToList from "../utils/cartClick.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
export const productUrl = url + id;

export function displayDetails (product) {
  const container = document.querySelector(".product-container");
  let cssClass = "far";
  
  container.innerHTML += `<div class="detailedData">
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    <p>${product.price}</p>
    <img src="http://localhost:1337${product.image.url}" width="400px" height="300px" alt="${product.image.alternativeText}">
    <i class="${cssClass} fa-heart" data-id="${i}"></i>
    </div>`
  };

// for (let i = 1; i <= AMOUNT; i++) {
//   let cssClass = "far";
//   const cart = getCart();

//   const cartItem = cart.find(function (fav) {
//     return i === parseInt(fav.id);
//   });
                        
//   if (cartItem) {
//     cssClass = "fa";
//   }

//   const iconToClick = document.querySelectorAll(".products i");

//     iconToClick.forEach((icon) => {
//         icon.addEventListener("click", addToList);
//     });
//   };