import { CART_KEY } from "./settings.js";

export default function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}