let text1 = "Hello";
let text2 = "World";

console.log("Test 11: Is text1 equal to 'Hello'? I predict True.");
console.log(text1 === "Hello"); 

console.log("Test 12: Is text2 not equal to 'Hello'? I predict True.");
console.log(text2 !== "Hello"); 

console.log("Test 13: Is text1 equal to 'World'? I predict False.");
console.log(text1 === "World"); 

console.log("Test 14: Is text2 not equal to 'World'? I predict False.");
console.log(text2 !== "World"); 


let num1 = 10;
let num2 = 5;

console.log("Test 15: Is num1 equal to 10? I predict True.");
console.log(num1 === 10); 

console.log("Test 16: Is num2 not equal to 10? I predict True.");
console.log(num2 !== 10); 

console.log("Test 17: Is num1 greater than num2? I predict True.");
console.log(num1 > num2); 

console.log("Test 18: Is num2 less than num1? I predict True.");
console.log(num2 < num1); 
console.log("Test 19: Is num1 greater than or equal to 10? I predict True.");
console.log(num1 >= 10);

console.log("Test 20: Is num2 less than or equal to 5? I predict True.");
console.log(num2 <= 5); 


let condition1 = true;
let condition2 = false;


console.log("Test 21: Is condition1 true AND condition2 false? I predict True.");
console.log(condition1 && condition2);


console.log("Test 22: Is condition1 true OR condition2 false? I predict True.");
console.log(condition1 || condition2);

console.log("Test 23: Is condition2 true AND condition1 true? I predict False.");
console.log(condition2 && condition1); 

console.log("Test 24: Is condition2 true OR condition2 true? I predict False.");
console.log(condition2 || condition2); 

let fruits = ["apple", "banana", "cherry"];

console.log("Test 25: Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes("apple"));

console.log("Test 26: Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes("grape")); 
