




export function mouseover() {

  const dolly = document.querySelector(".fa.fa-dolly");
  const cart = document.querySelector("#cart");

  if(dolly) {
    dolly.addEventListener("click", styleCart, removeStyle);
  }

  function styleCart () {
    cart.style.animation = "blinker 0.5s";
  }

  function removeStyle () {
    cart.removeAttribute("style", "animation:blinker 0.5s")
  }
}

export function mouseout() {
  const check = document.querySelector(".fa.fa-check");
  const cart = document.querySelector("#cart");

  if(check) {
    check.addEventListener("click", styleCartAgain, removeStyleAgain);
  }

  function styleCartAgain () {
    cart.style.animation = "blinker 0.5s";
  }

  function removeStyleAgain () {
    cart.removeAttribute("style", "animation:blinker 0.5s")
  }
}