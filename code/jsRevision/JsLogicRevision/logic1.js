var number1=2;
var number2=5;
function add(a,b){
    var answer=a+b;
    return answer;
}

var sum=add(number1+number2);
console.log(sum);
console.log(answer);//it will give refernce error
//This line tries to print the value of the variable answer. However, answer is a local variable declared inside the add function and is not accessible outside of that function's scope. So, this line will result in an error, and nothing will be printed to the console.
//local variable h islia eror dega-refernce error
