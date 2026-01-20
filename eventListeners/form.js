const form = document.querySelector("[data-form]");

console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submited");
});
