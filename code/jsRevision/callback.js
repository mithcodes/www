function calbk(){
    console.log("this is call fiunction");
}
function calbkk(callback){
    console.log("dekh bhai oadh la")
    callback();
}
calbkk(calbk);

// jab argument mai function pass karta han or us argument function ko cal karta ha uska callback function kahta han

//when function is passed as argument to another function and called the argument 
//function it is called callback

function getTwoAdd(number1,number2,callback){
    console.log(number1,number2);
    if(typeof number1==="number" && typeof number2==="number"){
        callback(number1,number2);
    }else{
        console.log("wrong datatypes")
    }
    }
   
function add(num1,num2){
    console.log(num1+num2);
}
getTwoAdd(12,12,add);
getTwoAdd("12","12", add);


//callback in asynchronus js
