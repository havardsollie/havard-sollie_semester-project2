export function displayAllAdmin (allData) {
  const container = document.querySelector(".products");

  container.innerHTML = "";

  allData.forEach(function (product) {
    container.innerHTML += `<div class="featuredData">
                              <a href="edit.html?id=${product.id}">
                              <h2>${product.title}</h2>
                              <p>${product.price}</p>
                              <img src="http://localhost:1337${product.image.url}" width="400px" height="300px" alt="${product.image.alternativeText}">
                              </a>
                            </div>`
  })
}