function print(){
    console.log('happy birthday');
}
print();
//ab hm arrow fuction mai change karenga
let printt=()=>{
    console.log("arrow functionmai change hogya");

}
printt();
//ab hm ek line mai change karenga
let printtt=()=>("hi am one line code");
printtt();
//ab hm argument pass karenga or function parameter lega
function add(a,b){
    return a+b;
}
//argument agar extra pass karengs to dikat nai haan
console.log(add(12,3,4))
//arrow function likenha
let addd=(a,v)=>{
    return a+b;
}
console.log(add(12,34))
//arrow functioninone line code
let adddd=(a,v)=>a+b;
console.log(adddd(3,54))
//call back function 
function performTask(callback){
    setTimeout(function(){
        console.log("task is completed");
        callback();
    },1000);
}
function oncomplete(){
    console.log("callback function is executed")
}
performTask(oncomplete);
//function returning function
function myfunc(func){
    return function heelo(){
        console.log("function return fuunction")
    }
}
console.log(myfunc());
//filter hmsa true or false dekhta or true jo rehta ha hmsa wahi deta haan
let number=[1,2,3,4,5,6,7];
let isodd=(number)=>number%2!==0;
let odd=number.filter(isodd);
console.log(odd);
//map hma mapping karka deta han jo hma chahia
const user=[
    {firstName:"harshit",age:23},
{firstName:"mohit",age:21},
{firstName:"nitish",age:32},
{firstName:"garima",age:20}, 
 ]
const userName=user.map((user)=>{
    return user.firstName;
});
console.log(userName);
//reduce method is used when we have to add

