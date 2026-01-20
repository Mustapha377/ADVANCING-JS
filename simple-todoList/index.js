//1. get all the element
const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

//2. get the input values
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //3. create an item in the list
  const item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("list-item");

  //4. add the item to the list
  list.appendChild(item);

  //5.clear input
  input.value = "";

  // 6. setup eventlistener to delected item when clicks
  item.addEventListener("click", () => {
    list.removeChild(item);
  });
});
