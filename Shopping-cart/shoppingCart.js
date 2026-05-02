import currencyFomater from "./utils/currencyFomater.js";
import items from "./items.json";
import { GlobalEventListener } from "./utils/GlobalEventlisner.js";
import { getItemById } from "./utils/GetItemsId.js";

const imageUrl = "https://dummyimage.com/420x260";
let shoppingCart = [];

const cartContainer = document.querySelector("[data-cart-container]");
const templateCard = document.querySelector("#cart-template-card");
const totalPrice = document.querySelector("[data-total-price]");
const cart = document.querySelector("[data-cart]");
const cartButton = document.querySelector("[data-cart-button]");
const cartQuantity = document.querySelector("[data-cart-quantity]");
const cartItemsWrapper = document.querySelector("[ data-cart-items-wrapper]");

const loadcartItems = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("cartItem-")) {
      const itemData = localStorage.getItem(key);
      if (itemData) {
        const item = JSON.parse(itemData);
        shoppingCart.push(item);
      }
    }
  }
};

console.log("Loaded shopping cart items from localStorage:", shoppingCart);
loadcartItems();
renderCart();
setUpShoppingcart();

export function setUpShoppingcart() {
  GlobalEventListener("click", "[data-remove-from-cart-button]", (e) => {
    const storeItem = e.target.closest("[data-cart-item]");
    const id = parseInt(storeItem.dataset.id, 10);
    const item = getItemById(id);
    console.log(storeItem, id);
    console.log("Add to cart clicked for item:", item);
    deleteFromCart(item);
  });
}

cartButton.addEventListener("click", () => {
  console.log("Cart button clicked");
  cartItemsWrapper.classList.toggle("invisible");
});

function deleteFromCart(item) {
  const cartItems = cartContainer.querySelectorAll("[data-cart-item]");
  cartItems.forEach((cartItem) => {
    if (parseInt(cartItem.dataset.id) === item.id) {
      cartItem.remove();
      shoppingCart = shoppingCart.filter((entry) => entry.id !== item.id);
      localStorage.removeItem(`cartItem-${item.id}`);
      // Calculate and update the total price after deletion
      const sumTotal = shoppingCart.reduce(
        (total, price) => total + price.price * price.quantity,
        0,
      );
      totalPrice.innerText = currencyFomater(sumTotal);
      updateCartQuantity();
    }
  });
}

export default function addToCard(id) {
  const existingItem = shoppingCart.find((entry) => entry.id === id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    shoppingCart.push({
      id: id,
      quantity: 1,
      price: items.find((item) => item.id === id).priceCents,
    });
    shoppingCart.forEach((entry) => {
      const item = entry;
      localStorage.setItem(`cartItem-${item.id}`, JSON.stringify(item));
      console.log(`Saved item with id ${item.id} to localStorage`);
    });
  }
  renderCart();
  showCart();
}

function renderCart() {
  if (shoppingCart.length === 0) {
    hideCart();
  } else {
    renderCartItems();
    showCart();
  }
}

function showCart() {
  cart.classList.remove("invisible");
}

function hideCart() {
  cart.classList.add("invisible");
  cartItemsWrapper.classList.add("invisible");
}

function updateCartQuantity() {
  const cartlength = shoppingCart.length;
  if (cartlength === 0) {
    hideCart();
  }
  cartQuantity.innerText = cartlength > 0 ? cartlength : "";
}

function renderCartItems() {
  cartContainer.innerHTML = "";
  shoppingCart.forEach((entry) => {
    const item = items.find((i) => i.id === entry.id);
    const storeItem = templateCard.content.cloneNode(true);
    const cartItem = storeItem.querySelector("[data-cart-item]");

    cartItem.dataset.id = item.id;

    const name = storeItem.querySelector("[data-cart-name]");
    name.innerText = item.name;

    const price = storeItem.querySelector("[data-cart-price]");
    price.innerText = currencyFomater(item.priceCents);

    const imageSrc = storeItem.querySelector("[data-cart-image]");
    imageSrc.src = `${imageUrl}/${item.imageColor}/${item.imageColor}`;

    if (entry.quantity > 1) {
      const quantityItem = storeItem.querySelector("[data-quantity]");
      quantityItem.innerText = `x${entry.quantity}`;
    }

    // Calculate and update the total price
    const sumTotal = shoppingCart.reduce(
      (total, price) => total + price.price * price.quantity,
      0,
    );
    totalPrice.innerText = currencyFomater(sumTotal);

    updateCartQuantity();

    cartContainer.appendChild(storeItem);
  });
}
