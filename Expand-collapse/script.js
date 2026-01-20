document.addEventListener("click", (e) => {
  if (!e.target.matches(".expand-button")) return;

  const card = e.target.closest(".card");
  const cardbBody = card.querySelector(".card-body");

  cardbBody.classList.toggle("show");
  if (e.target.textContent === "Collapse") {
    e.target.textContent = "Expand";
  } else {
    e.target.textContent = "Collapse";
  }
});
