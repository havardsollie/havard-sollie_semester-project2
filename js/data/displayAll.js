



export function displayAll (allData) {
  const container = document.querySelector(".products");

  container.innerHTML = "";

  allData.forEach(function (product) {
    container.innerHTML += `<div class="featuredData">
                            <h2>${product.title}</h2>
                            <p>${product.price}</p>
                            </div>`
  })
}