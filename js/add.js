// import displayMessage from "./utils/displayMessage.js";
import menu from "./utils/createMenu.js";
import { fetchToken } from "./utils/storage.js";
import { url } from "./utils/api.js";
import checkFeatured from "./utils/featuredCheck.js";

menu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const message = document.querySelector(".add-container");

const image = document.getElementById("image");


form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const imageValue = image.files;
  const trueValue = checkFeatured();

  // if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || imageValue.length === 0) {
  //   return displayMessage("Please supply proper input", ".add-container");
  // }

  addProduct(titleValue, priceValue, imageValue, trueValue);
}

async function addProduct(title, price, image, trueValue) {
  const token = fetchToken();

  const formData = new FormData();

  const data = JSON.stringify({ title, price, featured: trueValue });

  formData.append("files.image", image[0]);
  formData.append("data", data);
  console.log("data", data, formData);

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