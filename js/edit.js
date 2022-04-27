import { displayDetails } from "./data/displayDetailedProduct.js";
import { url } from "./utils/api.js";
// import displayMessage from "./utils/displayMessage.js";
import menu from "./utils/createMenu.js";
import { searchInData } from "./utils/search.js";
import { fetchToken } from "./utils/storage.js";
import checkFeatured from "./utils/featuredCheck.js";


menu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const productUrl = url + id;

// if (!id) {
//   document.location.href = "/";
// }

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const image = document.querySelector("#image");
const idInput = document.querySelector("#id");
const message = document.querySelector(".add-container");

(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

    title.value = details.title;
    price.value = details.price;
    image.value = `http://localhost:1337"${details.image.url}`;
    idInput.value = details.id;
  } catch (error) {
    console.log(error);
  };
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const imageValue = image.value.trim();
  const trueValue = checkFeatured();

  // if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || imageValue.length === 0) {
  //   return displayMessage("Please supply proper input", ".add-container");
  // }

  updateProduct(titleValue, priceValue, imageValue, trueValue);
  console.log(submitForm)
}

async function updateProduct(title, price, image, trueValue, id) {
  const data = JSON.stringify({ title: title, price: price, image: image, featured: trueValue });
  const token = fetchToken();

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(productUrl, options);
    const json = await response.json();

    displayDetails(data);
    searchInData(data);

    if (json.updated_at) {
      // displayMessage("Product created", ".add-container");
      form.reset();
    }

    // if (json.error) {
    //   displayMessage(json.message, ".add-container");
    // }
    console.log(json);
  } catch (error) {
    console.log(error);
    // displayMessage("An error occured", ".add-container");
  }
}