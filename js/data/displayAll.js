



export function displayAll (allData) {
  const container = document.querySelector(".products");

  container.innerHTML = "";

  allData.forEach(function (product) {
    container.innerHTML += `<div class="featuredData">
                              <a href="details.html?id=${product.id}">
                              <h2>${product.title}</h2>
                              <p>${product.description}</p>
                              <p>${product.price}</p>
                              <img src="http://localhost:1337${product.image.url}" width="400px" height="300px" alt="${product.image.alternativeText}">
                              </a>
                            </div>`
  })
}