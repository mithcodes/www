// const a=50;
//let b=30;
// {
//     var a=30;
//     let b=20;
//     let c=30;
// }
// console.log(a);
//code mai ek bar const k sath variables assign hogya tab pura code mai kabhi us variables k dubara nai likh sakta
//let and const k varibles ek bar hi define hote reuse nai ho sakta han



// var a = 50;



// function fun(){

// var a =30;

// let b = 20;

// let c = 30;

// }

// fun();

// console.log(a)//50 qki global variables dominate karengaconst a = 10;


// const a=10;
// {

//     var a = 100;
    
//     }
    
//     console.log(a)  error dega qki a const k sath h islia var a k sath redeclare nai ho sakta han const a k value bar bar reassign hosakta han



// console.log(a)
//  const bar bar  value reassign ho sakta pr dubra declare nai ho sakt ha
// Explain what did you understand by lexical scope in your own words?

// function when it goes outside of theirs scope to find variables .

// let a = 10;

// function y(){

// console.log(a);

// }

// return y;

// }



// const z = x()

// console.log(z()); y call karenga jo z mai h
//yha z=fn y mil raha h phir hm y call karenga but there is no return in y so we get 10 or undefined

function x(){

    let a = 10;
    
    function y(){
    
    console.log(a);
    
    }
    
    a= 50;
    
    return y;
    
    }
    
    
    
    const z = x()
    
    console.log(z());
//This way, it will log the value of a, which is 50, because the y function has access to the updated value of a within the x function's scope.

    
    // y();function y(){



    // for(var i=1;i<6;i++){
    
    // setTimeout(() => console.log(i ), i * 1000)
    
    // }
    
    // console.log('Done Coding')
    
    
    
    // }
// We have a function called y.

// Inside this function, there's a loop that counts from 1 to 5.

// In each step of the loop, we set a timer to do something after a certain amount of time. For example, after 1 second (1000 milliseconds), 2 seconds, and so on.

// While the timers are waiting to execute, the loop finishes counting, and the loop variable (i) becomes 6.

// After the loop finishes, we print "Done Coding" to the console.

// Now, the timers start to execute, but they all see i as 6 because that's the value i has at the end of the loop.

// So, you see "Done Coding" first, and then you see the number 6 printed five times because all the timers use the final value of i, which is 6.