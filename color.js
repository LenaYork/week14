const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");

div1.addEventListener("click", function() {
    div1.classList.toggle("blue");
});

div2.addEventListener("click", function() {
    div2.classList.toggle("red");
});

div3.addEventListener("click", function() {
    div3.classList.toggle("purple");
});
