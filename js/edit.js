
import { api } from "./utils/api.js";
import { displayMessage } from "./utils/displayMessage.js";
import menu from "./utils/createMenu.js";
import { fetchToken } from "./utils/storage.js";
import checkFeatured from "./utils/featuredCheck.js";
import deleteProduct from "./utils/deleteProduct.js";

const url = api + "products/";


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
const message = document.querySelector(".message-container");

(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

    title.value = details.title;
    price.value = details.price;
    idInput.value = details.id;

    deleteProduct(details.id);

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
  const imageValue = image.files;
  const featuredValue = checkFeatured();

  if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) ) {
    return displayMessage("warning", "Please supply proper input", ".message-container");
  }

  updateProduct(titleValue, priceValue, imageValue, featuredValue);
  console.log(submitForm)
}

async function updateProduct(title, price, image, featuredValue) {
  const token = fetchToken();
  const formData = new FormData();

  const data = JSON.stringify({ title, price, featured: featuredValue });

  formData.append("files.image", image[0]);
  formData.append("data", data);
  console.log("data", data, formData);

  const options = {
    method: "PUT",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(productUrl, options);
    const json = await response.json();

    if (json.updated_at) {
      displayMessage("success", "Product updated", ".message-container");
      form.reset();
    }

  } catch (error) {
    console.log(error);
    displayMessage("warning", "An error occured", ".message-container");
  }
}