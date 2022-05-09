import { displayDetails } from "./data/displayDetailedProduct.js";
import { addToList } from "./data/displayDetailedProduct.js";
import { api } from "./utils/api.js";
import menu from "./utils/createMenu.js";
// import { displayMessage } from "./utils/displayMessage.js";

menu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const productUrl = api + "products/" + id;

async function showDetailedProduct() {

  try {
    const response = await fetch(productUrl);
    const data = await response.json();

    displayDetails(data);
    addToList(data);

  } catch (error) {
    console.log(error);
  }  
}
showDetailedProduct();