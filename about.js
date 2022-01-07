console.log("hello world");


let form = document.querySelector('form#contact');
let imageHover = document.querySelector('img');
let newName = document.querySelector('#name');
let message = document.querySelector('#message');
let friendOption = document.querySelector('#friend')
let googleOption = document.querySelector('#google');
let otherOption = document.querySelector('#other');




function handleSubmit(evt) {
	evt.preventDefault();
	//console.log('form submit');
	alert("The Form Has Been Submitted!");
	newName.value = "";
	message.value = "";
	//was researching how to clear the radio buttons but ran out of time


}

function compliment(){
	alert("You are a fantastic human being!!");
}



form.addEventListener('submit', handleSubmit);
imageHover.addEventListener('mouseover', compliment);