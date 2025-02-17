//Question 1: How do you create an empty array in JavaScript?
// Using array literal syntax
let arr = [];

// Using the Array() constructor
let arra = new Array();

//Question 2: How do you access the first and last elements of an array?
let arr2 = [1, 2, 3, 4];
let firstElement = arr[0]; // 1
let lastElement = arr[arr.length - 1]; // 4

//Question 3: How do you add an element to the end of an array?
let arr3 = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

//Question 4: How do you remove the last element from an array?
let arr4 = [1, 2, 3, 4];
arr.pop();
console.log(arr); // [1, 2, 3]

//Question 5: How do you loop through an array in JavaScript?
let arr5 = [1, 2, 3];

// Using for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Using forEach method
arr.forEach(element => console.log(element));

//Question 6: How do you check if an element exists in an array?
let arr6 = [1, 2, 3];
if (arr.indexOf(2) !== -1) {
    console.log('Element found');
} else {
    console.log('Element not found');
}

//Question 7: How do you remove an element from an array at a specific index?
let arr7 = [1, 2, 3];
arr.splice(2, 1);
console.log(arr); // [1, 2]

//Question 8: How do you concatenate two arrays in JavaScript?
let arr1 = [1, 2];
let arr2_2 = [3, 4];
let newArr = arr1.concat(arr2_2);
console.log(newArr); // [1, 2, 3, 4]

//Flatten Array JavaScript Interview
//Question 1: Write a function to flatten a nested array in JavaScript
function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) =>
        flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}

//Question 2: What does the reduce() method do in the flattenArray() function above?
//Answer: The reduce() method iterates through the array, accumulating a single value by flattening nested arrays recursively.

//Question 3: Can you give an example of a nested array that the flattenArray() function would be able to flatten?
var nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray));

//Question 4: Can you explain how the flat() method can be used to flatten an array in JavaScript?
var nestedArray = [1, [2, [3, 4], 5], 6];
console.log(nestedArray.flat(2));

//Question 5: What are some potential issues to watch out for when flattening arrays in JavaScript?
//Possible issues include excessive memory usage for very large arrays and infinite recursion due to circular references.

//JavaScript Array Manipulation Interview Questions
//Question 1: What is the difference between .map() and .forEach()?
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

numbers.forEach(num => console.log(num * 2));

//Question 2: How do you remove an element from an array?
const fruits = ['apple', 'banana', 'orange', 'mango'];
fruits.splice(2, 1);
console.log(fruits); // ['apple', 'banana', 'mango']

//Question 3: What is the difference between .filter() and .find()?
const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

const firstEvenNumber = numbers1.find(num => num % 2 === 0);
console.log(firstEvenNumber); // 2

//Question 4: How do you sort an array in JavaScript?
const fruits1 = ['banana', 'apple', 'orange', 'mango'];
fruits.sort();
console.log(fruits1);

//Question 5: How do you flatten a nested array in JavaScript?
const numbers3 = [1, 2, [3, 4], [5, [6, 7]]];
const flattenedNumbers = numbers3.flat(2);
console.log(flattenedNumbers); // [1, 2, 3, 4,

// Question 6: What is Array[-1] in JavaScript?
//Answer: Negative indices are not supported in JavaScript arrays. Instead, you can use
let lastElement1 = arr[arr.length - 1];

//How to get the first three elements of an array?
let firstThreeNumbers = numbers.slice(0, 3);