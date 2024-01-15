const obj={
    name:"mithlesh singh",
    age:23,
    address:"govindpur",
}
obj.phone=96316612;
console.log(obj);
let copyobj={...obj};

console.log(copyobj)
for(let key in obj){
    console.log(key);
    console.log(obj[key]);
    console.log(key,obj[key]);

}
console.log(obj.age);
//object in array
// let copyobj={...obj};

// console.log(copyobj)

const object=[
    {name:"sujal singh"},
    {address:"govindpur"},
    {age:19},
   {
    about:function(){
       console.log(`${object[0].name} `) 
    },
},

];

console.log(object);