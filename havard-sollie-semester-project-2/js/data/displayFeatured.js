
export function displayFeatured (featuredData) {
  const container = document.querySelector(".featured");

  container.innerHTML = "";

  featuredData.forEach(function (product) {
    if (product.featured)
    container.innerHTML += `<div class="featuredData">
                            <a href="details.html?id=${product.id}">
                            <img src="http://localhost:1337${product.image.url}" alt="${product.image.alternativeText}"></a>
                            <h3>${product.title}</h3>
                            <p>ONLY $${product.price}</p>
                            </div>`
  })
}