export function displayAll (allData) {
  const container = document.querySelector(".products");

  container.innerHTML = "";

  allData.forEach(function (product) {
    container.innerHTML += `<div class="allData">
                              <a href="details.html?id=${product.id}">
                              <h3>${product.title}</h3>
                              <p>${product.price}</p>
                              <img src="http://localhost:1337${product.image.url}" width="400px" height="300px" alt="${product.image.alternativeText}">
                              </a>
                            </div>`
  })
}