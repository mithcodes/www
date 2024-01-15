const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");


// setTimeout(()=>{
// heading1.textContent="mithlesh"
// heading1.style.color="red";
// },1000)
// setTimeout(()=>{
//     heading2.textContent="mithlesh"
//     heading2.style.color="red";
//     },3000)

//     setTimeout(()=>{
//         heading3.textContent="mithlesh"
//         heading3.style.color="red";
//         },5000)

//ab ham promise ka use karenga


function changeText(element,text,color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent=text;
                element.style.color=color;
                resolve();
            }else{
                reject("elemnt not found");
            }
        },time)
    })
}

const returnpromise=changeText(heading1,"mithlesh","red",1000);
returnpromise.then(()=>{
    return changeText(heading2,"mithlesh","pink",3000);
    //then bhi promise return karta han
}).then(()=>{
    return changeText(heading13,"mithlesh","yellow",2000);
})
.then(()=>{
    return changeText(heading3,"mithlesh","yellow",2000);
})
.catch((error)=>{
    alert(error)
})
// The then method is used to chain promises.
// After the returnpromise is resolved, it executes the first then block.
// In the first then block, another promise (changeText for heading2) is returned.
// The second then block is chained to the promise returned by the first then.
// In the second then block, another promise (changeText for heading3) is returned.
// Promise Execution Flow:

// returnpromise is the initial promise created by calling changeText for heading1.
// After a delay of 1000 milliseconds, it resolves.
// This triggers the execution of the first then block, where another promise (changeText for heading2) is returned.
// After a delay of 3000 milliseconds, the promise for heading2 resolves.
// This triggers the execution of the second then block, where another promise (changeText for heading3) is returned.
// After a delay of 2000 milliseconds, the promise for heading3 resolves.
// Overall Result:

// The text and color changes for each heading are applied sequentially, with the specified delays, due to the chaining of promises.
// The updates to each heading are dependent on the resolution of the previous promise in the chain.
// In summary, the code demonstrates how promises can be chained to execute asynchronous operations sequentially, and how the changeText function is used to update the text content and color of HTML elements with specified delays.
