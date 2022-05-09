import { displayAllAdmin } from "./data/displayAllAdmin.js";
import { api } from "./utils/api.js";
import { displayMessage } from "./utils/displayMessage.js";
import menu from "./utils/createMenu.js";

const url = api + "products/"

menu();

async function showAll() {

  try {
    const response = await fetch(url);
    const data = await response.json();

    displayAllAdmin(data);

  } catch (error) {
    displayMessage("warning", "Error. Not recieving data", ".message-container");
    console.log(error);
  }  
}
showAll();