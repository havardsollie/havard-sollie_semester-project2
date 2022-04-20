import getCart from "./cart.js";
import saveCart from "./saveCart.js";

export default function addToList() {
  this.classList.toggle("fa");
  this.classList.toggle("far");

  const id = this.dataset.id;

  const cart = getCart();

  const cartItem = cart.find(function(fav) {
    return fav.id === id;
  });
  
  if (cartItem === undefined) {
    const newItem = { id: id};
    cart.push(newItem);
    saveCart(cart);
  }
  else {
    const newCart = cart.filter((fav) => fav.id !== id);
    saveCart(newCart);
  }
}