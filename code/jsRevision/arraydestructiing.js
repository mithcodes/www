const nums=[12,34,54];
const [a,b,c]=nums
console.log(a);
console.log(b);
console.log(c);

//object destructiing

const obj={
    name:"mithlesh",
    age:23,

}

//array destructing

// Example object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  };
  
  // Object destructuring
  const { firstName, lastName, age } = person;
  
  // Using the extracted variables
  console.log(firstName); // Output: John
  console.log(lastName);  // Output: Doe
  console.log(age);       // Output: 30
  