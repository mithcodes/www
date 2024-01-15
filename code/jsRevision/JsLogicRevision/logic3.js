var a=2;
var c=2;
function b(){
    var x=2;
    var c=4;
    console.log(c);
}
console.log(a);//2
console.log(this.a);//2
console.log(this.c);//2
console.log(this.x);//This line attempts to access the local variable x from within the b function using this.x. However, x is a local variable and is not accessible using this in this context. Therefore, it outputs undefined
console.log(window.a);//This line directly accesses the global variable a using window.a. In a browser environment, global variables are attached to the window object, so it also outputs 2.
console.log(window.x);
console.log(b());

///differnce between refernce error and undefined
// In JavaScript, "ReferenceError" and "undefined" are related but distinct concepts.

// ReferenceError:

// Definition: A ReferenceError occurs when you try to access a variable or function that has not been declared or is out of scope. It indicates that the JavaScript engine cannot find a reference to the variable or function you are trying to use.

// Example 1 - Undeclared Variable:

// javascript
// Copy code
// console.log(x); // ReferenceError: x is not defined
// In this example, x is not declared anywhere in the code, so attempting to use it results in a ReferenceError.

// Example 2 - Out of Scope:

// javascript
// Copy code
// function foo() {
//   console.log(y); // ReferenceError: y is not defined
// }
// foo();
// In this example, y is not declared within the foo function's scope, so trying to access it results in a ReferenceError.

// Undefined:

// Definition: Undefined is a special value in JavaScript that represents the absence of a value for a variable or property. It is assigned to variables that have been declared but have not been assigned a value or to properties that do not exist in an object.

// Example 1 - Undefined Variable:

// javascript
// Copy code
// var z;
// console.log(z); // Outputs: undefined
// Here, z has been declared but has not been assigned a value, so it holds the value undefined.

// Example 2 - Undefined Property:

// javascript
// Copy code
// var obj = {};
// console.log(obj.age); // Outputs: undefined
// In this example, obj has no age property, so accessing it results in undefined.

// In summary, ReferenceError occurs when you try to use a variable or function that is not declared or is out of scope, while "undefined" is a value used to represent the absence of a value for variables or object properties. It's important to handle both ReferenceErrors and undefined values appropriately in your JavaScript code to prevent unexpected behavior.
