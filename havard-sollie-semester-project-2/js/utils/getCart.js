import { CART_KEY } from "./settings.js";

export default function getCart() {
  const cart = localStorage.getItem(CART_KEY);

  if (cart === null) {
    return [];
  } else {
    return JSON.parse(cart);
  }
}