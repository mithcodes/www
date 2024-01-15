const person={
    name:"mithlesh",
    age:23,
    address:"india",
}
//to get keys
for(let key in person){
    console.log(key);
}
//to get key and value nboth
for(let key in person){
    console.log(key,person[key])
    //nichawala error dega
  // console.log(key,person.key);
}
const person2={name:"mith",age:23,address:"govindpur"}
console.log(person2);
for(let key in person2){
    console.log(key);
}
for(let key in person2){
    console.log(key,person2[key])
}
console.log(person2.age);
console.log(person2["age"])
console.log(person2["age"])
//agar ham key value pair jodna chahta haan to
person2.gender="male";
person2["study"]="bca";
console.log(person2);
for(let key in person2){
    console.log(key,person2[key])
}