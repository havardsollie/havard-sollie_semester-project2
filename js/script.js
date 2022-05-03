import { displayAll } from "./data/displayAll.js";
import { displayFeatured } from "./data/displayFeatured.js";
import { displayDetails } from "./data/displayDetailedProduct.js";
import menu from "./utils/createMenu.js";
import { searchInData } from "./utils/search.js";
import { url } from "./utils/api.js";
// import { productUrl } from "./data/displayDetailedProduct.js";
import { displayMessage } from "./utils/displayMessage.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const productUrl = url + id;

menu();

async function showFeatured() {

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    displayFeatured(data);

  } catch (error) {
    displayMessage("warning", "Error. I dont know", ".message-container")
  }  
}
showFeatured();


async function showAll() {

  try {
    const response = await fetch(url);
    const data = await response.json();

    displayAll(data);
    searchInData(data);

  } catch (error) {
    displayMessage("warning", "Cant find something", ".message-container")
  }  
}
showAll();

async function showDetailedProduct() {

  try {
    const response = await fetch(productUrl);
    const data = await response.json();

    displayDetails(data);
    addToList(data);

  } catch (error) {
    displayMessage("warning", "Something is wrong", ".message-container")
  }  
}
showDetailedProduct();
