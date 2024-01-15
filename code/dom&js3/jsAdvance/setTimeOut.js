console.log("script start");
setTimeout(()=>{
    console.log("print after all")
},4000)
console.log("script end")

//to clear settimeout
console.log("script start");
const clear=setTimeout(()=>{
    console.log("print nai hoga")
},4000)               
console.log("script end");
clearTimeout(clear);
console.log("script end");

setTimeout(()=>{
    console.log("mithlesh");
},3000);
