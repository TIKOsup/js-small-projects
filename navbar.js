const toggle = document.querySelector(".nav-toggle");

toggle.addEventListener("click", function() {
    const links = document.querySelector(".links");
    links.classList.toggle("show-links");
    toggle.classList.toggle("nav-toggle-anim");
});