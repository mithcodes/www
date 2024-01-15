// In JavaScript, "TypeError," "SyntaxError," and "ReferenceError" are three distinct types of errors, each representing a different kind of problem in your code. Here's an explanation of each along with examples:

// TypeError:

// Definition: A TypeError occurs when an operation is performed on a value of the wrong type, or when an otherwise valid operation cannot be performed on an object.
// Example 1 - Wrong Type:
// javascript
// Copy code
// var x = "5";
// var y = 2;
// var result = x + y; // TypeError: Cannot convert string to number
// In this example, you are trying to add a string to a number, which is not a valid operation.
// Example 2 - Invalid Object Property:
// javascript
// Copy code
// var obj = null;
// var prop = obj.property; // TypeError: Cannot read property 'property' of null
// In this case, you are trying to access a property of a null object, which is not allowed.
// SyntaxError:

// Definition: A SyntaxError occurs when the code you've written does not follow the correct syntax of the JavaScript language.
// Example 1 - Missing Closing Parenthesis:
// javascript
// Copy code
// console.log("Hello, World" // Missing closing parenthesis
// In this example, the syntax error occurs because there's a missing closing parenthesis for the console.log statement.
// Example 2 - Mismatched Brackets:
// javascript
// Copy code
// if (true {
//   console.log("This will result in a SyntaxError");
// }
// Here, the error is caused by the mismatched curly braces in the if statement.
// ReferenceError:

// Definition: A ReferenceError occurs when you try to access a variable or function that is not declared or is out of scope.
// Example 1 - Undeclared Variable:
// javascript
// Copy code
// console.log(x); // ReferenceError: x is not defined
// In this example, x has not been declared before you try to use it.
// Example 2 - Out of Scope:
// javascript
// Copy code
// function foo() {
//   console.log(y); // ReferenceError: y is not defined
// }
// foo();
// In this case, y is not declared within the scope of the foo function.
// In summary, here's a quick overview:

// TypeError is related to operations involving incompatible types or invalid object operations.
// SyntaxError relates to code that doesn't follow the proper syntax of the JavaScript language.
// ReferenceError occurs when you try to reference a variable or function that is not declared or is out of scope.