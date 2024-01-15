async function test(){
 return "hello"; 
//async always return promise it come in 2017
//resolve or reject likhna k jarurt nai hota direct hm then sa call kar sakta han
//async await wait ksrta ha kam karna k uska bad hi badtha han

}

test().then((result)=>{
console.log(result);
})

//await use karna sa wawait k code k bad k code ruk jata h or baki code run hota han
async function test2(){
    console.log("one");
    await console.log("two");
    console.log("three");

}
console.log("four");

test2();
console.log("five");