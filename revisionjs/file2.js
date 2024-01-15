//trim sa hm string mai spaces ko remove karta haam
let name="   harshit   ";
console.log(name.length);
let newName=name.trim();
console.log(newName);
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.toLowerCase());
//slice ko contionous character ko select karna k liya use hota haan k liya hota haan
let newString=newName.slice(1);
console.log(newString);
console.log(newString.slice(0,4));
console.log()