const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");
buttons.forEach(function(button){
console.log(button);
button.addEventListener('click',function(e){
console.log(e);
if(e.target.id==='grey'){
    body.style.backgroundColor=e.target.id;
}
if(e.target.id==='red'){
    body.style.backgroundColor=e.target.id;
    //tRGET ID K Gajah kch or likh sakta han
}

if(e.target.id==='blue'){
    body.style.backgroundColor=e.target.id;
}
if(e.target.id==='yellow'){
    body.style.backgroundColor="yellow";
}

})
})


// Selecting Elements:

// const buttons = document.querySelectorAll('.button');: This line selects all elements with the class "button" and stores them in the buttons variable.
// const body = document.querySelector("body");: This line selects the body element and stores it in the body variable.
// Adding Event Listeners:

// buttons.forEach(function(button) { ... });: This loop iterates over each button in the buttons collection.
// button.addEventListener('click', function(e) { ... });: This sets up a click event listener for each button.
// Handling Click Events:

// The function inside the event listener checks the id of the clicked button using e.target.id.
// Depending on the button clicked, it changes the background color of the body element.
// Console Logs for Debugging:

// console.log(button);: Logs each button to the console for debugging.
// console.log(e);: Logs the click event to the console for debugging.
// In simple terms, this JavaScript code listens for clicks on the colored buttons. When a button is clicked, it checks the button's ID and changes the background color of the webpage accordingly. The console logs are for developers to see what's happening behind the scenes.