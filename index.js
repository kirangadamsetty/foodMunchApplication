let mainSectionEl = document.getElementById("main-section");
let menuSectionEl = document.getElementById("menu-section");
let menuButtonEl = document.getElementById("menu-button2");
let viewMenuEl = document.getElementById("view-menu-button");


viewMenuEl.addEventListener("click", function() {
    menuSectionEl.classList.toggle("d-none");
    mainSectionEl.classList.toggle("d-none");
});
menuButtonEl.addEventListener("click", function() {
    menuSectionEl.classList.toggle("d-none");
    mainSectionEl.classList.toggle("d-none");
});