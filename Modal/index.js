// 1. sellect the elements
const modal = document.querySelector("#modal");
const openModalBtn = document.querySelector("#open-modal-btn");
const closeModalBtn = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

// 2. create a function to open the modal

function openModal() {
  modal.classList.add("open");
  overlay.classList.add("open");
}

// 3. adding eventListener to the modal open button
openModalBtn.addEventListener("click", openModal);

//4. craete a function to close the modal

const closeModal = () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
};

//5. adding eventlisterner to the close button

closeModalBtn.addEventListener("click", closeModal);

//6. finally add event listerner to the overlay to remove the open class

overlay.addEventListener("click", closeModal);
