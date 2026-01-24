const dateBtn = document.querySelector(".date-picker-button");
const datepicker = document.querySelector(".date-picker");

dateBtn.addEventListener("click", () => {
  datepicker.classList.toggle("show");
});
