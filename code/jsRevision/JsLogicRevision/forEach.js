var arr=[1,2,3,5]
var newArr=arr.forEach((item,i)=>{
    console.log(item, i);//phla variables value deta hn or dusra index
    return item+i;
})

console.log(newArr);

var arrr=[12,3,4,5,6];
var arrr=arrr.map((item,i)=>{
    console.log(item ,i);
    return item+i;
    //arrr eknaya array bana rahanh han
})
console.log(arrr);

//The forEach and map functions in JavaScript are both used to iterate over arrays and perform operations on their elements, but they have key differences in their behavior and use cases.

// forEach Function:

// Purpose: The forEach function is primarily used for iterating over the elements of an array and executing a provided callback function on each element. It doesn't return a new array.

// Return Value: It doesn't return anything (undefined).

// Modifies Original Array: It does not modify the original array.

// map Function:

// Purpose: The map function is used for iterating over the elements of an array, executing a provided callback function on each element, and returning a new array with the results of the callback function applied to each element.

// Return Value: It returns a new array containing the results of the callback function for each element.

// Modifies Original Array: It does not modify the original array; it creates a new array.

// Example using map:

// In summary, the main difference between forEach and map is that forEach is used for iterating and performing actions on array elements without creating a new array, while map is used for iterating, transforming elements, and creating a new array with the transformed values. Use forEach when you want to perform actions on each element without altering the array, and use map when you want to create a new array with modified elements.