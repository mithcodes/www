let p1=new Promise((resolve,reject)=>{
   setTimeout(()=>{
   console.log("the first promise has resolved");
   resolve(10);
   },1000) 
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("the first promise has resolved");
    resolve(20);
    },1000) 
 })
 let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("the first promise has resolved");
    resolve(30);
    //reject ek hoga to sara hogyaga
    //console.log("this will conjkskb");
    //reject("failed")  reject hoga
    },3000) 
 })
//.then k jagah hm asyns await bhi use kr sakta han
 Promise.all([p1,p2,p3]).then((result)=>{
  console.log(`result" ${result}`)  
 }).catch((error)=>{
    console.log(`error: ${error}`);
 });



 let promisecall=function(returnData,message){
    return function(resolve,reject){
        setTimeout(()=>{
            console.log(` the ${message} promise has resolved`)
            resolve(returnData);
            reject(error);
        },returnData*100);
    }
 }

 let pp1=new Promise(promisecall(10,"first"));
 let pp2=new Promise(promisecall(20,'second'));
 let pp3=new Promise(promisecall(30,"third"));

 Promise.all([pp1,pp2,pp3]).then((result)=>{
    console.log(`result : ${result}`);
 }).catch((error)=>{
    console.log(`error : ${error}`);
 })



 const myPromise = new Promise((resolve, reject) => {
   // Asynchronous operation or code here
   // If successful, call resolve(value)
   // If an error occurs, call reject(reason)
 });
 
 myPromise.then((value) => {
   // Handle the fulfillment
 }).catch((reason) => {
   // Handle the rejection
 });
 

 const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
const promise3 = Promise.reject('Error: Something went wrong');

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // This will not be reached due to the rejection of promise3
  })
  .catch((reason) => {
    console.error(reason); // Output: Error: Something went wrong
  });
