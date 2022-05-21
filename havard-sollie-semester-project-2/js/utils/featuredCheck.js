const checkbox = document.querySelector("#yes");
const noBox = document.querySelector("#no");
  

export default function checkFeatured() {
  if (checkbox.checked) {
      return true;
  } else (noBox.checked)
    return false;
}