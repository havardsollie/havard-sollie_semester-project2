import { displayFeatured } from "./data/displayFeatured.js";
import menu from "./utils/createMenu.js";
import { api } from "./settings/api.js";
import { displayMessage } from "./utils/displayMessage.js";

const url = api + "products/";

menu();

async function showFeatured() {

  try {
    const response = await fetch(url);
    const data = await response.json();

    displayFeatured(data);

  } catch (error) {
    displayMessage("warning", "Error. Not recieving data", ".message-container")
    console.log(error);
  }  
}
showFeatured();
