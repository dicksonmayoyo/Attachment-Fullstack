// 1. Declare a variable age using let and assign it the value 25.
let age = 25;

// 2. Declare a variable schoolName using const and assign it "Greenwood High"
const schoolName = "Greenwood High";

// 3. Declare an empty array called studentsList.
let studentsList = [];

// 4. What is the difference between let, const, and var when declaring variables?
// let: Can be reassigned, but not re-declared in the same scope. Block-scoped.
// const: Cannot be reassigned or re-declared. Block-scoped.
// var: Can be re-declared and reassigned. Function-scoped (not block-scoped).

// 5. Which of the following variable names is invalid?
// let $price = 100;
// let 1stPlace = "John";
// let _score = 89;
// let userName = "Alice";
// let 1stPlace = "John"; // Invalid: Variable names cannot start with a number.

// 6. Why is the following variable name incorrect?
// const #taxRate = 0.16;
// - A variable cannot start with #

// 7. Rewrite this variable name to follow best practices:
// let MyvariableNAME = "JavaScript";
// let myVariableName= "JavaScript";

// 8. What will be the output of the following?
console.log(typeof "Hello"); //string
console.log(typeof 99);  //number
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined

// 9. Identify the data types in this array:
let data = ["Kenya", 34, false, { country: "USA" }, null];
// Data types:
// "Kenya" -> string
// 34 -> number
// false -> boolean
// { country: "USA" } -> object
// null -> object (special case)


// 9. How do you define a BigInt in JavaScript? Provide an example.
let bigNumber = 12345678901234567890n; // Using 'n' at the end
let anotherBigInt = BigInt(12345678901234567890); // Using BigInt() constructor

// 10. Create an object person with properties name, age, and city.
let person = {
    name: "Alice",
    age: 30,
    city: "Los Angeles"
};

// 11. Add a new property email to the person object
person.email = "alice@example.com";

// 12. Declare an array fruits with three fruit names
let fruits = ["Apple", "Banana", "Cherry"];

// 13. Access the second item in the fruits array.
console.log(fruits[1]); // "Banana"

// 14. What will be the output of the following?
console.log("5" + 2); // "52" (String concatenation)
console.log("5" - 2); // 3 (String "5" is coerced into a number)

// 15. Convert the string "100" into a number
let num = Number("100");

// 16. Convert the number 50 into a string
let str = String(50);

// 17. What will be the result of this operation?
console.log(5 + true); // 6 (true is coerced into 1)