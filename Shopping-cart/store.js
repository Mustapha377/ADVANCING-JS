import items from "./items.json";
import currencyFomater from "./utils/currencyFomater";
import addToCard from "./shoppingCart";
import { GlobalEventListener } from "./utils/GlobalEventlisner.js";
import { getItemById } from "./utils/GetItemsId.js";

const templateCard = document.querySelector("#store-template-card");
const storeContainer = document.querySelector("[data-cards-container]");
const imageUrl = "https://dummyimage.com/420x260";

export function setUpStore() {
  if (!templateCard || !storeContainer) {
    return;
  }

  items.forEach(renderstoreItem);

  GlobalEventListener("click", "[data-add-to-cart-button]", (addToCartBtn) => {
    const storeItem = addToCartBtn.target.closest("[data-store-item]");
    const id = parseInt(storeItem.dataset.id);
    addToCard(id);
  });
}

function renderstoreItem(item) {
  const storeItem = templateCard.content.cloneNode(true);
  const container = storeItem.querySelector("[data-store-item]");
  container.dataset.id = item.id;

  const name = storeItem.querySelector("[data-name]");
  name.innerText = item.name;

  const cartegory = storeItem.querySelector("[data-category]");
  cartegory.innerText = item.category;

  const price = storeItem.querySelector("[data-price]");
  price.innerText = currencyFomater(item.priceCents);

  const imageSrc = storeItem.querySelector("[data-image]");
  imageSrc.src = `${imageUrl}/${item.imageColor}/${item.imageColor}`;

  storeContainer.appendChild(storeItem);
}

setUpStore();
