// geetting all the element where necessary
const form = document.querySelector("#form");
const orderInput = document.querySelector("#input");
const costomerClotting = 10;

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const orderValue = Number(orderInput.value);
//   if (Number.isNaN(orderValue)) {
//     console.log(`${orderValue}: is not a number`);
//   } else if (orderValue <= 5) {
//     alert("hi! costumer are order is ready");
//   } else {
//     alert("your order is on process!");
//   }
//   orderInput.value = "";
//   console.log(orderValue);
//   console.log(NaN === NaN);
// });

function orderPromise(element, method) {
  return new Promise((resolve, reject) => {
    element.addEventListener(method, resolve);
  });
}

function makingOrder() {
  const orderValue = Number(orderInput.value);
  if (Number.isNaN(orderValue)) {
    console.log(`${orderValue}: is not a number`);
  } else if (orderValue <= 5) {
    alert("hi! costumer are order is ready");
  } else {
    alert("your order is on process!");
  }
  orderInput.value = "";
  console.log(orderValue);
  console.log(NaN === NaN);
}

orderPromise(form, "submit").then((e) => {
  makingOrder();
});
