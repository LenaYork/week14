let currentPic = 0;
const rightArrow = document.querySelector("#rightArrow");
const leftArrow = document.querySelector("#leftArrow");

rightArrow.addEventListener("click", function() {
    if (currentPic < 4) {
        document.querySelector(`#pic${currentPic}`).style.display = "none";
        currentPic +=1;
        document.querySelector(`#pic${currentPic}`).style.display = "block";
        console.log(currentPic);
    }
    
});

leftArrow.addEventListener("click", function() {
    if (currentPic > 0) {
        document.querySelector(`#pic${currentPic}`).style.display = "none";
        currentPic -=1;
        document.querySelector(`#pic${currentPic}`).style.display = "block";
        console.log(currentPic);
    }
});