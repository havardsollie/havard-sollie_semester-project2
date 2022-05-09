import { displayMessage } from "./utils/displayMessage.js";
import menu from "./utils/createMenu.js";
import { fetchToken } from "./utils/storage.js";
import { api } from "./utils/api.js";
import checkFeatured from "./utils/featuredCheck.js";

const url = api + "products/";

menu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const message = document.querySelector(".message-container");

const image = document.getElementById("image");


form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const imageValue = image.files;
  const trueValue = checkFeatured();

  if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || imageValue.length === 0) {
    return displayMessage("Please supply proper input", ".message-container");
  }

  addProduct(titleValue, priceValue, imageValue, trueValue);
}

async function addProduct(title, price, image, trueValue) {
  const token = fetchToken();

  const formData = new FormData();

  const data = JSON.stringify({ title, price, featured: trueValue });

  formData.append("files.image", image[0]);
  formData.append("data", data);

  const options = {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.created_at) {
      displayMessage("success", "Product created", ".message-container");
      form.reset();
    }

    if (json.error) {
      displayMessage("warning", json.message, ".message-container");
    }
    console.log(json);
  } catch (error) {
    console.log(error);
    displayMessage("warning", "An error occured", ".message-container");
  }
}