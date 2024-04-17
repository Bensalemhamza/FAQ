const more = document.querySelectorAll(".more");
const less = document.querySelectorAll(".less");
const para = document.querySelectorAll(".para");

for (let i = 0; i < more.length; i++) {
    more[i].addEventListener("click", function () {
    more[i].classList.toggle("hidden");
    less[i].classList.toggle("hidden");
    para[i].classList.toggle("hidden");
});
}

for (let i = 0; i < less.length; i++) {
    less[i].addEventListener("click", function () {
    less[i].classList.toggle("hidden");
    more[i].classList.toggle("hidden");
    para[i].classList.toggle("hidden");
});
}