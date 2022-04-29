import { displayDetails } from "./data/displayDetailedProduct.js";
import { url } from "./utils/api.js";
// import displayMessage from "./utils/displayMessage.js";
import menu from "./utils/createMenu.js";
import { searchInData } from "./utils/search.js";
import { fetchToken } from "./utils/storage.js";
import checkFeatured from "./utils/featuredCheck.js";
import deleteProduct from "./utils/deleteProduct.js";


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
    idInput.value = details.id;

    // if (data.featured)
    // container.innerHTML = ` <label for="featured">The product is already featured. Undo it?</label>
    //                         <input type="checkbox" id="yes" value="yes" onclick="false">Yes</input>`;
    // if (checkbox.checked) {
    //   return false;
    // }

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

  // if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || imageValue.length === 0) {
  //   return displayMessage("Please supply proper input", ".add-container");
  // }

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