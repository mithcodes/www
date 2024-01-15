const bucket = ["coffee", "chips", "vegetables", "rice"]; // Corrected the spelling of "coffee"
const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("coffee") &&
    bucket.includes("chips") &&
    bucket.includes("vegetables") &&
    bucket.includes("rice")
  ) {
    resolve("fried rice"); // Use parentheses () instead of square brackets [] for resolve and reject
  } else {
    reject("couldn't do it"); // Use parentheses () instead of square brackets [] for resolve and reject
  }
});

friedRicePromise
  .then((myFriedRice) => {
    console.log("let's eat", myFriedRice); // Corrected the spelling of "let's"
  })
  .catch((error) => {
    console.log(error);
  }); // Use .catch() to handle errors in the promise chain

  //const we will create promise
  const promise=new Promise(function(resolve,reject){
    setTimeout(function(){
     console.log("async tak is complete");
     //yaha hm resolve k help sa then ko connect karenga
     resolve()
     reject();
    },1000)
  })
//we will consume promise
//then k sath hmsa function use hota haan
  promise.then(function(){
  console.log("promise is consumed");
  })

//bina variables k store kia hua bana sakta han
new Promise(function(){
setTimeout(function(){
  console.log("async is completed")
  resolve()
},1000)
}).then(function(){
  console.log("async 2 review")
})

//otherway
const promiseThree=new Promise(function(resolve,reject){
 setTimeout(function(){
 resolve({userName:"chai",email:"singhmithlesh"})
 },1000)
})
promiseThree.then(function(user){
  console.log(user);
})


const promisefour=new Promise(function(){
  setTimeout(function(){
    let error=true;
    if(!error){
      resolve({userName:"hitesh",password: 825312})
    }else{
      reject("error:something went wrong")
    }
  },1000)
})

promisefour.then((user)=>{
  console.log(user);
  return user.userName;
})