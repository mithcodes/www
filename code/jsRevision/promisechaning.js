function mypromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })
}
mypromise()
.then((value)=>{
    console.log(value);
    return value;
})
.then((value)=>{
    console.log(value);
    value+="mithlesh";
    return value;
})
.then((value)=>{
    console.log(value);
    return value;
})



// Promise Creation (mypromise function):

// The mypromise function returns a Promise.
// Inside the Promise, it immediately resolves with the value "foo".
// Promise Execution (`mypromise()):

// // The mypromise() is called, initiating the execution of the Promise.
// // Chained then Blocks:

// // The then method is used to attach callbacks to the Promise. Each then block executes after the previous one.

// // The first then block receives the resolved value "foo", logs it to the console, and returns the same value.

// The second then block receives "foo" as its input value (returned by the first then), logs it to the console, appends "mithlesh" to it, and returns the updated value.

// The third then block receives the updated value ("foomithlesh"), logs it to the console, and returns the same value.

// In simpler terms, each then block performs some operation with the value it receives and passes the modified value to the next then block in the chain. The console.log statements are there to show the intermediate values in the process.