import items from "../items.json";

export function getItemById(id) {
  return items.find((item) => item.id === id);
}
