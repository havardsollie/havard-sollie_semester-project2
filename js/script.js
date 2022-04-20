import { displayAll } from "./data/displayAll.js";
import { displayFeatured } from "./data/displayFeatured.js";
// import { getExistingFavorites } from "./utilities/getExistingFavorites.js";
import { searchInData } from "./utils/search.js";
// import { displayMessage } from "./utilities/displayMessage.js";

const url = "http://localhost:1337/products/";

async function showFeatured() {

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    displayFeatured(data);
    // searchInData(data);

  } catch (error) {
    // displayMessage("Error. Not recieving data", error)
  }  
}
showFeatured();

async function showAll() {

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    displayAll(data);
    searchInData(data);

  } catch (error) {
    // displayMessage("Error. Not recieving data", error)
  }  
}
showAll();