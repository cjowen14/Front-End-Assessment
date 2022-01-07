console.log("Hello World");

const randoRestaurant = document.querySelector("button");
let restArray = ['Tony Burgers', 'ABC Mandarin', 'McDonalds', 'Jersey Mikes', 'Warrens', 'Texas Roadhouse', 'Ruby River'];

function getRando(){
    console.log("It works!")
        let randoPicker = Math.floor(Math.random() * restArray.length);
        console.log(restArray[randoPicker]);
        alert(`Your random restuarant recommendation is ${restArray[randoPicker]}!`);
}


randoRestaurant.addEventListener("click", getRando);

