const set=setTimeout(function(){

console.log("hi i will come after ever y second")
console.log("hi i came fast");
},5000)

// It sets a timeout for 5000 milliseconds (5 seconds) to execute the provided function.
// After setting the timeout, it logs "I don't take time" immediately.

console.log("i dont take time");

const runn=setTimeout(function(){//phla y code run hoga phir upar wala qki iska 2s h or upr ka 5s
  console.log("hi iam mithlesh")
},2000);   //am sa kam 2 sec lagaga usa jada bhi lag sakta han

//Another timeout is set for 2000 milliseconds (2 seconds) to execute a function that logs "hi I am mithlesh".
// Note that this timeout is shorter than the first one (5 seconds)

const sett=setInterval(function(){

console.log("sssss come after ever y second")
console.log("fast");
},1000)

// It sets an interval to execute the provided function every 1000 milliseconds (1 second).
// After setting the interval, it logs "take time" immediately.
console.log(" take time");
const intervalId = setInterval(function() {
    console.log("This will run every 1000 milliseconds (1 second).");
  }, 1000);

  const set3=setTimeout(function(){
    console.log("hi iam mithlesh")
  },2000);


  //jiska set timeout jada hoga wo sabsa last mai run hoga

//   The code demonstrates the concept of asynchronous execution in JavaScript using timers.
// setTimeout and setInterval are used to schedule functions to run after a specified delay or at regular intervals.
// The order of execution is not strictly sequential. Shorter timeouts or intervals may complete before longer ones, leading to interleaved log outputs.
// The final comment indicates that the setTimeout with a longer delay will run last.
  
console.log("script start");
function hello(){
  console.log("hello worls")
}
setTimeout(hello,2000);
//set timeout browser provide karta han
