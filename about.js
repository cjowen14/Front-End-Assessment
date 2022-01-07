console.log("hello world");


let form = document.querySelector('form#contact');
let imageHover = document.querySelector('img');



function handleSubmit(evt) {
	evt.preventDefault();
	//console.log('form submit');
	alert("The Form Has Been Submitted!");
}

function compliment(){
	alert("You are a fantastic human being!!");
}



form.addEventListener('submit', handleSubmit);
imageHover.addEventListener('mouseover', compliment);