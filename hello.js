let getNameButton = document.querySelector("#getUserName");
let userName;
let greeting = document.querySelector("#greeting");

getNameButton.addEventListener("click", function() {
    userName = document.querySelector("#userName").value;
    if (userName) {
            greeting.innerHTML = `Привет, ${userName}!`;
        } else greeting.innerHTML = "Вы не представились";

});
