import { displayAllAdmin } from "./data/displayAllAdmin.js";
import { url } from "./utils/api.js";
import { searchInData } from "./utils/search.js";
import { displayMessage } from "./utils/displayMessage.js";
import menu from "./utils/createMenu.js";

menu();

async function showAll() {

  try {
    const response = await fetch(url);
    const data = await response.json();

    displayAllAdmin(data);
    searchInData(data);

  } catch (error) {
    displayMessage("Error. Not recieving data", error)
  }  
}
showAll();