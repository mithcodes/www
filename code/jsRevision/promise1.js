const bucket=['coffe','chips','vegetabkes','rice'];
const fried=new Promise((resolve,reject)=>{
if(bucket.includes('cofffe') && bucket.includes('chips')){
    resolve("you can make ")
}else{
    reject("you canot make")
}
})

fried.then((kuchvi)=>{
    console.log(kuchvi);
}).catch((error)=>{
console.log(error);
})

setTimeout(()=>{
    console.log("promise micro task queue mai hot a han or promise callback queue mai islia phla promise chalega phir settimeout chalega");

},1000)

//ab hm promise return karenga
function promisecalled(){
    const bucket=['coffe','chips','vegetabkes','rice']; 
    return new Promise((resolve,reject)=>{
        if(bucket.includes('cofffe') && bucket.includes('chips')){
            resolve("you can make ")
        }else{
            reject("you canot make")
        }
        })
}

promisecalled().then((resolved)=>{
console.log(resolved);
})
.catch((reject)=>{
    console.log(reject);
})



//promise or settimeout saath mai
 function mypromise(){
    return new Promise((resolve,reject)=>{
        const value=false;
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        },3000)
    })
 }
 mypromise()
 .then(()=>{
    console.log('reseolve');
 })
 .catch(()=>{
    console.log('reject');
 })

//  mypromise is a function that returns a Promise.
//Inside the Promise constructor, there is a setTimeout function. This simulates an asynchronous operation that takes 3 seconds (3000 milliseconds) to complete.
//The Promise will either resolve or reject based on the value of the value variable.

//mypromise() is called, initiating the asynchronous operation.
//If the asynchronous operation is successful (in this case, if value is true), the then block will be executed, logging 'resolve' to the console.
//If the asynchronous operation encounters an error (in this case, if value is false), the catch block will be executed, logging 'reject' to the console.
//In your example, since the value is set to false, the setTimeout function will cause the Promise to be rejected after 3 seconds. Therefore, the catch block will be executed, and 'reject' will be logged to the console. If the value were true, the then block would be executed, and 'resolve' would be logged to the console after 3 seconds.


function myPromise2(){
    return new Promise((resolve,reject)=>{
        resolve("mith");
    })
}

myPromise2()
.then((value)=>{
    console.log(value);
    value+="lesh";
    return value;
    //upar mai promise return ho raha h jo bad ami use hoga
    //return Promise.resolve(value); is trha sa value retutn ho raha han

})
,then((value)=>{
    console.log(value);
    value+="singh";
    //upar mai jaisa hmreutn value k jagah y likh sakt ahaan
    return Promise.resolve(value);
    //aga then k chaining karta rahenga
    
})