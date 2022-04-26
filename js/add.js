// import displayMessage from "./utils/displayMessage.js";
import menu from "./utils/createMenu.js";
import { fetchToken } from "./utils/storage.js";
import { url } from "./utils/api.js";
import checkFeatured from "./utils/featuredCheck.js";

menu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const image = document.querySelector("#image");
const message = document.querySelector(".add-container");

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

  addProduct(titleValue, priceValue, imageValue, trueValue);
  console.log(submitForm)
}

async function addProduct(title, price, image, trueValue) {
  const data = JSON.stringify({ title: title, price: price, image: image, featured: trueValue });
  const token = fetchToken();

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.crated_at) {
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