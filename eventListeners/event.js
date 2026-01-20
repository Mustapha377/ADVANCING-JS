const btn = document.querySelectorAll("button");
const data = document.querySelector(["data-set-test"]);

btn.forEach((button) => {
  button.addEventListener("click", () => {
    dataAdd = parseInt(button.dataset.clicks);
    button.dataset.clicks = dataAdd + 1;
    console.log(dataAdd);
  });
});
