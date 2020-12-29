const navIcon1 = document.getElementsByClassName("animatedBurgerIcon1")[0];
const navIcon2 = document.getElementsByClassName("animatedBurgerIcon2")[0];
const navIcon3 = document.getElementsByClassName("animatedBurgerIcon3")[0];
const navIcon4 = document.getElementsByClassName("animatedBurgerIcon4")[0];


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