const btnOpenModal = document.getElementById("modal-open-btn");
const btnCloseModal = document.getElementById("modal-close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

btnOpenModal.addEventListener("click", function() {
    modalOverlay.style.display = "block";
});

btnCloseModal.addEventListener("click", function() {
    modalOverlay.style.display = "none";
})