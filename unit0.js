/* The code in your repo should:
Include commented pseudocode to break down the logic for what you are trying to accomplish in each example.
Use console logs to test your outputs and ensure your code works as expected.
Follow all of the syntax rules and conventions you have learned about in Unit 0.
Include comments to identify where the skill from each module is represented in the code.
You’ll have comments to explain 6 total skills. One from each of the following modules:
Values, Data Types, and Operations
Stringing Characters Together
Control Structures and Logic
Building Arrays
Using Arrays
Working With Loops
Keep in mind that you may use multiple skills on one line of code–just make sure you explain each skill in the comment.
*/


//Values, Data Types, and Operations

let correctAnswers = 8; 
let totalQuestions = 10;

console.log(typeof correctAnswers); // number
console.log(typeof totalQuestions); // number

let percentage = (correctAnswers / totalQuestions) * 100; // Skill: Operations (division and multiplication)
let hasPassed = percentage >= 70; // Skill: Data Types (boolean created with a comparison)
console.log(percentage); // 80
console.log(hasPassed); // true
console.log(typeof hasPassed); // boolean


// Stringing Characters Together

let correctAnswer = "A new array";//string
let userAnswer = "  a NEW array ";
let cleanedAnswer = userAnswer.trim().toLowerCase(); // Skill: String methods (trim and toLowerCase)
console.log(typeof cleanedAnswer); // string

let characters = cleanedAnswer.split(""); // Skill: split('') makes an array of characters
console.log(characters);


 
//Control Structures and Logic 

let score = 85;
let answeredAll = true;

if (score >= 90) { // Skill: if / else if / else
  console.log("Excellent!");
} else if (score >= 70) {
  console.log("Good job!"); // Good job!
} else {
  console.log("Keep practicing.");
}

// Skill: logical operator && (both conditions must be true)
if (score >= 70 && answeredAll) {
  console.log("Deck completed!"); // Deck completed!
}
 
//Building Arrays

let decks = ["apple", "banana", "cherry"]; // Skill: Building Arrays (creating an array with [])
console.log(decks); // [ 'apple', 'banana', 'cherry' ]
let deck = [10, 20, 30]; // Skill: Building Arrays (creating an array with [])
console.log(deck); // [ 10, 20, 30 ]

 
//Using Arrays

let scores = [90, 40, 75, 100, 55];
let needsPractice = scores.filter(score => score < 60); // Skill: Using Arrays (filter)
let total = scores.reduce((sum, score) => sum + score, 0); // Skill: Using Arrays (reduce)
let average = total / scores.length;
console.log(needsPractice); // [ 40, 55 ]
console.log(average); // 72
 
//Working With Loops
let numbers = [1, 2, 3, 4, 5, 6];

for (const num of numbers) {
    if (num % 2 === 0) {
        console.log(num);
    }
}
// expected output: 2, 4, 6


let fruits = ["apple", "banana", "orange"];
let i = 0;

do {
    console.log(fruits[i]);
    i++;
} while (i < fruits.length);
// expected output: apple, banana, orange