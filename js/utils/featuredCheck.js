

const checkbox = document.querySelector("#yes");
  

export default function checkFeatured() {
  if (checkbox.checked) {
    return true;
  }
}