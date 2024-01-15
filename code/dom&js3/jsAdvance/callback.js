function myFunc(callback){
    console.log("function is doing task");
    callback();
}
myFunc(()=>{
    console.log("hello i am callback");
})


function getTwoNumbersAndAdd(number1,number2,callback){
    console.log(number1,number2);
    callback(number1,number2);
}
function addTwoNumbers(num1,num2){
    console.log(num1+num2);

}

getTwoNumbersAndAdd(4,5,addTwoNumbers);