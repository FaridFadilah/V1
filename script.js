let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let slides = document.querySelectorAll(".container-slide");
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}
window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}
document.querySelectorAll(".image-featured-1").forEach(image_1 => {
    image_1.addEventListener("click", () => {
        var src = image_1.getAttribute("src");
        document.querySelector(".big-image-1").src = src;
    });
});

document.querySelectorAll(".image-featured-2").forEach(image_2 => {
    image_2.addEventListener("click", () => {
        var src = image_2.getAttribute("src");
        document.querySelector(".big-image-2").src = src;
    });
});

document.querySelectorAll(".image-featured-3").forEach(image_3 => {
    image_3.addEventListener("click", () => {
        var src = image_3.getAttribute("src");
        document.querySelector(".big-image-3").src = src;
    });
});

function darkmode() {
    var body = document.body;
    body.classList.toggle("darkmode");
}