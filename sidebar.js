const sidebar = document.querySelector("aside");
const toggle = document.querySelector(".sidebar-toggle");

toggle.addEventListener("click", function() {
    sidebar.classList.toggle("show-sidebar");
});