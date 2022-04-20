export function displayFeatured (featuredData) {
  const container = document.querySelector(".featured");

  container.innerHTML = "";

  featuredData.forEach(function (product) {
    if (product.featured)
    container.innerHTML += `<div class="featuredData">
                            <h2>${product.title}</h2>
                            <p>${product.price}</p>
                            </div>`
  })
}