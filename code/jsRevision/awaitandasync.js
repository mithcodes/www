// async Function:

// The async keyword is used to declare a function as asynchronous. It allows the function to use the await keyword inside it.
// An asynchronous function always returns a Promise. If a value is explicitly returned from the function, the Promise will be resolved with that value. If an error is thrown inside the function, the Promise will be rejected with the thrown error.

// a

console.log("this is tutorial")
async function harry(){ //function ko async bana k lia aync likhna padta h phir function promise return karta haan
    console.log("inside harry function")
    const response=await fetch('https://api.github.com/users')//wait karega jak tak sara code run na ho jayaga or jab then sa calling hoga tak print hoga   
    console.log("before response")
    const users=await response.json();
    return users;
}

console.log('before calling harry')
let a=harry();
console.log("after calling harry")
console.log(a)
a.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error)
})
console.log("last line")
 