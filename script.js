const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".navbar__links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".navbar__links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

