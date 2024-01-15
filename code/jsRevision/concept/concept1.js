console.log('start')



Promise.resolve(1).then((res) => {

  console.log(res)

})



Promise.resolve(2).then((res) => {

  console.log(res)

})



console.log('end');


// console.log('start') is a synchronous statement that prints 'start' to the console.

// Promise.resolve(1).then((res) => { console.log(res) }) creates a resolved promise with a value of 1. The then callback logs the value 1 to the console.

// Promise.resolve(2).then((res) => { console.log(res) }) creates another resolved promise with a value of 2. The then callback logs the value 2 to the console.

// console.log('end') is a synchronous statement that prints 'end' to the console.

// The key thing to note is that even though promises are asynchronous, in this case, the Promise.resolve calls are immediately resolved because they contain static values (1 and 2), and the then callbacks will be executed in the next microtask, after the current synchronous code has completed. Therefore, you see 'start', then the promise resolutions (1 and 2), and finally 'end'.


console.log('start')



setTimeout(() => {

  console.log('setTimeout')

})



Promise.resolve().then(() => {

  console.log('resolve')

})



console.log('end')

// console.log('start') is a synchronous statement that prints 'start' to the console.

// setTimeout(() => { console.log('setTimeout') }) schedules the callback function inside setTimeout to be executed in the next event loop iteration. This means it will not be executed immediately. Instead, it will be queued for later.

// Promise.resolve().then(() => { console.log('resolve') }) creates a resolved promise. The then callback is added to the microtask queue and will be executed in the current event loop iteration, after the synchronous code completes but before the next event loop iteration.

// console.log('end') is a synchronous statement that prints 'end' to the console.


const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
      console.log("timerStart");
      resolve("success");
      console.log("timerEnd");
    }, 0);
    console.log(2);
  });
  
  promise.then((res) => {
    console.log(res);
  });
  
  console.log(4);

//   Promise Initialization:

// A new Promise is created with a resolver function that takes resolve and reject as parameters.
// Inside the resolver function:
// console.log(1) is a synchronous statement that prints '1' to the console.
// setTimeout is used to schedule a callback to be executed after a minimum of 0 milliseconds (effectively in the next iteration of the event loop).
// console.log(2) is another synchronous statement that prints '2' to the console.
// Promise Resolution:

// The setTimeout callback is added to the task queue and will be executed after the current synchronous code completes.
// So, the order of execution at this point is: 1, 2, (enqueue setTimeout callback).
// Microtask Queue:

// The promise.then((res) => { console.log(res); }); attaches a then callback to the promise.
// console.log(4) is a synchronous statement that prints '4' to the console.
// Event Loop Execution:

// The event loop begins a new iteration:
// The microtask queue is checked, and the then callback is executed. This logs the resolved value 'success'.
// Next, the task queue is checked, and the setTimeout callback is executed. This logs "timerStart," resolves the promise with "success," and logs "timerEnd."
  


const promisee = new Promise((resolve, reject) => {

  console.log(1);

  setTimeout(() => {

    console.log("timerStart");

    resolve("success");

    console.log("timerEnd");

  }, 0);

  console.log(2);

});

promisee.then((res) => {

  console.log(res);

});

console.log(4);
// const promisee = new Promise((resolve, reject) => {...});: A new promise is created. The executor function is immediately invoked, which takes two parameters, resolve and reject. This function logs 1 to the console, sets up a setTimeout with a callback to log "timerStart," resolves the promise with "success," and logs "timerEnd." Finally, 2 is logged to the console.

// promise.then((res) => { console.log(res); });: A .then handler is attached to the promise. This handler will be executed when the promise is resolved. It logs the resolved value ("success") to the console.

// console.log(4);: 4 is logged to the console.

// Now let's look at the timing:

// The synchronous code inside the promise executor is executed first. So, you see 1 logged to the console.
// The setTimeout is set to 0 milliseconds, but it doesn't mean it will execute immediately. It schedules the callback in the macrotask queue, and the rest of the synchronous code continues. So, you see 2 logged to the console.
// The console.log(4) is executed, logging 4 to the console.
// The macrotask queue is processed. The setTimeout callback is executed, logging "timerStart" to the console, resolving the promise with "success," and logging "timerEnd."
// The promise is resolved, triggering the .then handler, which logs the resolved value ("success") to the console.
// The final output will be:

// Copy code
// 1
// 2
// 4
// timerStart
// timerEnd
// success


const timer1 = setTimeout(() => {
  console.log('timer1');
  
  const promise1 = Promise.resolve().then(() => {
    console.log('promise1')
  })
}, 0);

const timer2 = setTimeout(() => {
  console.log('timer2')
}, 0);


// const timer1 = setTimeout(() => {...}, 0);: The first setTimeout is scheduled with a timeout of 0 milliseconds. The provided callback will be executed in a later iteration of the event loop.

// Inside the first setTimeout callback:

// console.log('timer1');: Prints "timer1" to the console.
// const promise1 = Promise.resolve().then(() => { console.log('promise1') });: A promise (promise1) is created using Promise.resolve(). The then callback logs "promise1" to the console. Note that the promise resolution is a microtask and will be executed before the next macrotask.
// const timer2 = setTimeout(() => { console.log('timer2') }, 0);: The second setTimeout is scheduled with a timeout of 0 milliseconds. The provided callback will also be executed in a later iteration of the event loop.

// Now, let's analyze the output:

// timer1 is logged to the console from the first setTimeout callback.
// promise1 is logged to the console from the microtask inside the first setTimeout callback.
// timer2 is logged to the console from the second setTimeout callback.
// The output might look like this:

// Copy code
// timer1
// promise1
// timer2
// The key point to understand is that even though the timeout for both setTimeout calls is 0 milliseconds, the callbacks are scheduled in different queues. The first setTimeout callback includes a microtask (promise1), which is executed before the next macrotask (timer2). This is why you see "promise1" logged before "timer2".







console.log('start');



const promise1 = Promise.resolve().then(() => {

  console.log('promise1');

  const timer2 = setTimeout(() => {

    console.log('timer2')

  }, 0)

});



const timer12 = setTimeout(() => {

  console.log('timer1')

  const promise2 = Promise.resolve().then(() => {

    console.log('promise2')

  })

}, 0)



console.log('end');

// console.log('start');: This line prints "start" to the console.

// const promise1 = Promise.resolve().then(() => {...});: A promise (promise1) is created and resolved immediately using Promise.resolve(). The then callback logs "promise1" to the console. Note that the setTimeout inside this then callback will be scheduled in the microtask queue.

// const timer12 = setTimeout(() => {...}, 0);: The first setTimeout is scheduled with a timeout of 0 milliseconds. The provided callback will be executed in a later iteration of the event loop.

// Inside the first setTimeout callback:

// console.log('timer1'): Prints "timer1" to the console.
// const promise2 = Promise.resolve().then(() => {...});: A promise (promise2) is created and resolved immediately. The then callback logs "promise2" to the console. Note that the setTimeout inside this then callback will be scheduled in the microtask queue.
// console.log('end');: This line prints "end" to the console.

// Now, let's analyze the output:

// The first line is "start."
// The second line is "promise1" from the microtask queue.
// The third line is "timer1" from the macrotask queue.
// The fourth line is "promise2" from the microtask queue.
// The last line is "end."
// The output might look like this:

// sql
// Copy code
// start
// promise1
// end
// timer1
// promise2