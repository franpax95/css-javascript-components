const navIcon1 = document.getElementById("nav-icon1");
const navIcon2 = document.getElementById("nav-icon2");
const navIcon3 = document.getElementById("nav-icon3");
const navIcon4 = document.getElementById("nav-icon4");


navIcon1.addEventListener('click', function() {
    navIcon1.classList.toggle("open");
});

navIcon2.addEventListener('click', function() {
    navIcon2.classList.toggle("open");
});

navIcon3.addEventListener('click', function() {
    navIcon3.classList.toggle("open");
});

navIcon4.addEventListener('click', function() {
    navIcon4.classList.toggle("open");
});