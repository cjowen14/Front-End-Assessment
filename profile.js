const color = document.querySelector("#color")
const place = document.querySelector("#place")
const ritual = document.querySelector("#ritual")


function myFavoriteColor(){
    //console.log("Purple");
    alert("My favorite color is Purple!!");
}

function myFavoritePlace(){
    //console.log("San Diego");
    alert("My favorite place to visit is San Diego!");
}

//I couldn't think of a favorite ritual so I changed it to a ritual I do that bothers me
function myLeastFavoriteRitual(){
    //console.log("I am not sure");
    alert("My least favorite ritual is after getting a kill in any FPS game, I always have to reload my gun. I've paid dearly for that many times.")
}



color.addEventListener("click", myFavoriteColor);
place.addEventListener("click", myFavoritePlace);
ritual.addEventListener("click", myLeastFavoriteRitual);