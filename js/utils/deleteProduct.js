import { fetchToken } from "./storage.js";
import { api } from "./api.js";

const url = api + "products/"

export default function deleteProduct(id) {
  const container = document.querySelector(".delete");

  container.innerHTML = `<button type="button" class="delete">Delete product</button`;

  const deleteButton = document.querySelector("button.delete");

  deleteButton.onclick = async function () {
    const actuallyDelete = confirm("Are you sure?");

    if (actuallyDelete) {
      const urlToUse = url + id;
      const token = fetchToken();
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(urlToUse, options);
        const json = await response.json();

        location.href = "productsforadmin.html";
      } catch (error) {
        console.log(error);
      }
    }
  };
}