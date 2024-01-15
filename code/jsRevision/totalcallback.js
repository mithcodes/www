//In JavaScript, there are several types of callbacks, and they can be categorized based on how and when they are used. Here are some common types of callbacks:


//Function Callbacks:
//These are the most common type of callbacks. A function is passed as an argument to another function and is called when a particular operation is completed.
function callbackFunction() {
    console.log("Callback function executed");
}

function performOperation(callback) {
    console.log("Performing operation...");
    callback();
}

// Using function callback
performOperation(callbackFunction);


//Timer Callbacks:
//Callbacks can be used with timer functions like setTimeout and setInterval to execute code after a specified delay or at regular intervals.
setTimeout(function() {
    console.log("This will be executed after a delay");
}, 2000);


//Event Callbacks:
//Callbacks are often used to handle events in the browser, such as button clicks, form submissions, or key presses.
document.getElementById("myButton").addEventListener("click", function() {
    console.log("Button clicked");
});


//Callback Functions in Array Methods:
//Array methods like forEach, map, filter, etc., take a callback function as an argument to perform an operation on each element of an array.
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number * 2);
});


//Ajax Callbacks:
//In asynchronous operations like AJAX (Asynchronous JavaScript and XML) requests, callbacks are often used to handle responses.

fetch("https://api.example.com/data")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log("Data received:", data);
    })
    .catch(function(error) {
        console.error("Error fetching data:", error);
    });


    //Callback Hell (Nested Callbacks):
//Callback hell occurs when multiple asynchronous operations are nested inside each other, creating code that is hard to read and maintain.

asyncOperation1(function() {
    asyncOperation2(function() {
        asyncOperation3(function() {
            // ... and so on
        });
    });
});


//Yes, generally speaking, any function that is passed as an argument to another function and is intended to be executed at a later point in time can be referred to as a callback function. The term "callback" is commonly used in the context of asynchronous programming, where a function is provided as a parameter to another function with the expectation that it will be called back (executed) once a specific operation is completed.

