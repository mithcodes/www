//abi tak jitna programing hua ha sab synchronus h qki jab tak ek line k program complete nai hoga to dusra wait karega complete karna k islia blocking code hota h jisa hm synchronus programing bolta haan
//js is synchronus programing and single threaded
//below are exapmle of synchronus
console.log("synchrounus program");
for(let i=1;i<1000;i++){
    console.log("jab tk loop complete nai ho jata tab tak agla code wait karega");

}
console.log("script end");

//advance js mai hm almost asynchronus js padahenga
//advance js use hota h qki jab backend sa data fetch ho tab tk bacha hua code run hota rha
