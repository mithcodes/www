//jadatr hm promise ko consume karta hn
//now we wpll create promise
const promise=new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("async is completed")
    resolve()//then ksath connect hoga 
  },3000)
})

promise.then(function(){
  console.log("promise is consumed")
})



//resolve k conction .then k sath hn .then ko function mita h
  //then mai value return hota h
//other way to write code
new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("pronise is important")
   resolve();
  },1000)
}).then(function(){
  console.log("async 2 is complete")
})

//____________other way
//resolve k andr mai hm genrly object dalenga
const promise3=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve({usernmae:"chai",emai:"mih@123"})

  },1000)
})
promise3.then((user)=>{
  console.log(user);
})

///______other way

const promise4=new Promise((resolve,reject)=>{
  setTimeout(()=>{
// let error=true;
let error=false;
if(!error){
  resolve({username:"hitesh",password:"123"})
}else{
  reject("error:something went wrong")
}
  })
})
//hm bht saraa then or catch use kr sakta h
promise4.then((user)=>{
console.log(user);
return user.username;
//ya return hokr agla then mai print hoga
}).then((username)=>{
console.log(username);
}).catch((error)=>{
 console.log(error) 
}).finally(()=>{
  console.log("finally bs kch likhna k lia kam mai atta h");
})

 //ab aha hm async await k use karenga
 const promiseFive=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=true;
    if(!error){
        resolve({username:"js",password:"123"})
    }else{
      reject('error js went wrong');
    }
  },1000)
 })
//aha hm then catch k jagqh sync await k use kar sakta han response mai hama y to resole milega y phir reject 
//tan tak aga nhi badhega jab tak data nhi mil jata han

 async function promisedFive(){
  const response=await promiseFive
  console.log(response);
 }
 promiseFive();

// async function getAlluser(){
//   const response=await fetch('https://jsonplaceholder.typicode.com/');
//   const data=response.json()
//   console.log(data);
// }
// getAlluser();

//aha data nhi a rah h to try catch k use kar sakta han
async function getAlluser(){
  try{
  const response=await fetch('https://jsonplaceholder.typicode.com/');
  const data=response.json()
  console.log(data);
  }catch(error){
    console.log("error")
  }
}

//jab hm async await k use nai karta han tab

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
    }, 2000);
  });
}

function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Processed: ${data}`);
    }, 2000);
  });
}

fetchData()
  .then(data => {
    console.log(data);
    return processData(data);
  })
  .then(processedData => {
    console.log(processedData);
  })
  .catch(error => {
    console.error('Error:', error);
  });

//   Data fetched successfully
// Processed: Data fetched successfully
//tjis will output

  //jab karta han tab
  async function fetchDataAsync() {
    try {
      const data = await fetchData();
      console.log(data);
  
      const processedData = await processData(data);
      console.log(processedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Calling the async function
  fetchDataAsync();

  

  //async and await


