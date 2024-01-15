const bucket=['coffe','chipes','vegetables'];

const fried =new Promise((resolve,reject)=>{
    // here we wil get error donot use as thisif(bucket===coffe){
        if (bucket.includes('coffee')) {
        resolve("present");
    }else{
        reject("errror")
    }
})

fried.then((resolve)=>{
console,log(resolve);
})
.catch((error)=>{
    console.log(error)
})


function promises(){
    return new Promise((resolve,reject)=>{
        let sc=34;
        if(sc%2==0){
            resolve("solve");
        }else{
            reject("reject")
        }
    })
}

promises()
.then((resolve)=>{
    console.log(resolve)
})
.catch((error)=>{
    console.log(error)
})


//promise browser k features haan

//promise is micro task ueue and settimeout in callback queue promise always runs before setTimeout


setTimeout(()=>{
    console.log("promise k bad run hoga")
},0)

function myPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const value=true;
            if(value){
                resolve("resolve")
            }else{
                reject("rejected")
            }
        })
    },2000)
}

myPromise()
.then((resolve)=>{
    console.log(resolve)
})
.catch((reject)=>{
    console.log(reject);
})


//promise resolve
const myPromise2=Promise.resolve(5);
Promise.resolve(5).then(value=>{
    console.log(value)
})



//poromise chaining
//then method hmsa promise return karta han jisa help sa hm promise k chaining kar sakta han
function Promise3(){
    return new Promise(()=>{
        resolve("foo")
    })
}

promise3().then((value)=>{
console.log(value)
value+="bar";
return value;//aha promise return ho raha han agar aha return nai likhenga to undefined return hoga

})
.then((value)=>{
    console.log(value);
    value+="mithlesh";
    return value
})
.then((chaninghotarahega)=>{
    console.log(chaninghotarahega)
    value+="chaininghotarehagajabtakkarnachaha"

})
.then(value=>{
console.log(value);//undefined dega 
})



//async await =>bar bar resolve or reject nai likhna padega async new function haaan
//always use async function

// async function test(){
//     return "hello"// promise return ho raha han
// }

// test()
// .then((result)=>{
//     console.log(result);
// })


 let test=async function(){
    return "hello"// promise return ho raha han
}

test()
.then((result)=>{
    console.log(result);
})


async function time(){
    console.log("a")
   await console.log("b") //b print hoga pr uska bad jitkna code hoga sab wait karenga

    console.log("c")//sabsa last mai print hoga
}

time(); 
console.log("d")
console.log("e");

// async and await are keywords in programming languages that support asynchronous programming, such as JavaScript (Node.js) or Python. They are used to work with asynchronous code and make it more readable and manageable.

// async Function:

// When a function is declared with the async keyword, it becomes an asynchronous function.
// An asynchronous function returns a promise implicitly. This promise will resolve to the value returned by the function or be rejected with an exception thrown from the function.