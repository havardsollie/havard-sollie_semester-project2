import { displayAll } from "./data/displayAll.js";
import { searchInData } from "./utils/search.js";
import { api } from "./settings/api.js";
import { displayMessage } from "./utils/displayMessage.js";
import menu from "./utils/createMenu.js";

menu();

const url = api + "products/";

async function showAll() {

  try {
    const response = await fetch(url);
    const data = await response.json();

    displayAll(data);
    searchInData(data);

  } catch (error) {
    displayMessage("warning", "Error. Not recieving data", ".message-container")
    console.log(error);
  }  
}
showAll();