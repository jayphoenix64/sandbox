"use strict";
//* Union types in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
const humidity = 79; //? Recall literal types
let lowNumber = 3; //✔️ Valid
let evenNumber = 2; //✔️ Valid
// evenNumber = 5; //! 5 is not in the set
//? A set of numbers from 1 to 5 OR a set of even numbers from 1 to 9
let evenOrLowNumber = 5;
//? Control flow sometimes results in union types
function flipCoin() {
    if (Math.random() > 0.5)
        return 'heads';
    return 'tails'; // as const; means the string 'tails'
}
const outcome = flipCoin();
//     ^? "heads" | "tails"
//? A more complicated example
const success = ['success', { name: 'Mike North', email: 'mike@example.com' }];
const fail = ['error', new Error('Something went wrong!')];
function maybeGetUserInfo() {
    if (flipCoin() === 'heads') {
        return success;
    }
    else {
        return fail;
    }
}
const outcome2 = maybeGetUserInfo();
// outcome2 only has property 'name' as common denominator
//* Working with union types
//? Think critically: "AND" vs "OR", as it pertains to the contents of the set,
//? vs the assumptions we can make about the value
function printEven(even) { }
function printLowNumber(lowNum) { }
function printEvenNumberUnder5(num) { }
function printNumber(num) { }
let x = 5;
//? What does Evens | OneThroughFive accept as values?
// let evenOrLowNumber: Evens | OneThroughFive;
evenOrLowNumber = 6; //✔️ An even
evenOrLowNumber = 3; //✔️ A low number
evenOrLowNumber = 4; //✔️ A even low number
//? What requirements can `Evens | OneThroughFive` meet?
// printEven(x) //! Not guaranteed to be even
// printLowNumber(x) //! Not guaranteed to be in {1, 2, 3, 4, 5}
// printEvenNumberUnder5(x) //! Not guaranteed to be in {2, 4}
printNumber(x); //✔️ Guaranteed to be a number
//* Narrowing with type guards
const [first, second] = outcome2;
if (second instanceof Error) {
    // In this branch of your code, second is an Error
    second;
}
else {
    // In this branch of your code, second is the user info
    second;
}
//* Discriminated unions
if (first === "error") {
    // In this branch of your code, second is an Error
    second;
}
else {
    // In this branch of your code, second is the user info
    second;
}
//* Intersection Types
// //? What does Evens & OneThroughFive accept as values?
let evenAndLowNumber;
// evenAndLowNumber = 6 //! Not in OneThroughFive
// evenAndLowNumber = 3 //! Not in Evens
evenAndLowNumber = 4; //✔️ In both sets
//? What requirements can `Evens & OneThroughFive` meet?
let y = 4;
printEven(y); //✔️ Guaranteed to be even
printLowNumber(y); //✔️ Guaranteed to be in {1, 2, 3, 4, 5}
printEvenNumberUnder5(y); //✔️ Guaranteed to be in {2, 4}
printNumber(y); //✔️ Guaranteed to be a number
/*
  cardinality = number of members in a set
  Discriminated unions = often literal type that serves as indication of larger value or object

  union types do allow all values in two sets but only a small amout meets the reaquirements of all members, while
  intersection types only allow those that meet requirements into its set but all meet the requirements
  difference between what values can a type hold vs what guarantees do the members have
*/
console.log('all done.');
exports.default = {};
