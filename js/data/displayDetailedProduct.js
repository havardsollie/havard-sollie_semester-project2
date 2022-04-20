import { url } from "../utils/api.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
export const productUrl = url + id;

export function displayDetails (product) {

  const container = document.querySelector(".product-container");

  container.innerHTML += `<div class="detailedData">
                            <h2>${product.title}</h2>
                            <p>${product.description}</p>
                            <p>${product.price}</p>
                            </div>`
}