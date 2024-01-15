// //how code works without usin async await 
// console.log("peraon1: show ticket");
// console.log("person2: show ticket");

// const promiseWifeBringsTicket=new Promise((resolve ,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// })

// const getPopcorn=promiseWifeBringsTicket.then((t)=>{
//    console.log("husband we should go in");
//    console.log("wife no i am hungry");
//    return new Promise((resolve,reject)=>resolve(`${t} popcorn`)) 
// });
// const getButter=getPopcorn.then((t)=>{
//     console.log("husband : we should go in");
//     console.log("wife: i need butter in my popcorn");

// })
// getButter.then((t)=>console.log(t))
// console.log("person 4:shows ticket");
// console.log("person5: show ticket");


//we cqn also write this code as
console.log("person 1: show ticket");
console.log("person 2: show ticket");

const promiseWifeBringsTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000);
});

const getPopcorn = async () => {
    const t = await promiseWifeBringsTicket;
    console.log("husband: we should go in");
    console.log("wife: no, I am hungry");
    return `${t} popcorn`;
};

const getButter = async () => {
    const t = await getPopcorn();
    console.log("husband: we should go in");
    console.log("wife: I need butter in my popcorn");
    return `${t} butter`;
};

const coldDrink = async () => {
    const t = await getPopcorn();
    console.log("husband: we should go in");
    console.log("wife: I need butter in my popcorn");
    return `${t} coldDrink`;
};


(async () => {
    const result = await Promise.all([getButter(), getButter(),coldDrink()]);
    console.log("person 4: shows ticket");
    console.log("person 5: show ticket");
    console.log(result);
})();
