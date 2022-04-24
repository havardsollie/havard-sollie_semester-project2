import { displayAll } from "../data/displayAll.js";

export function searchInData (data) {
  const search = document.querySelector("input.search");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();
  
    const filterTitles = data.filter(function(product) {
      if(product.title.toLowerCase().includes(searchValue)) {
        return true;
      }
    });
  
    displayAll(filterTitles);
    // getExistingFavorites();
  };

}