"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RANDOM_WAIT_TIME = void 0;
//* Variable Declarations & Inference
let temperature = 6; //! inference
// temperature = "warm"  //! type-checking
const humidity = 79; //! literal type
//* A type as a set of allowed values
temperature = 23; //✔️ (1)  - re-assignability of a let
temperature = humidity; //! (2) - type-checking
// humidity = temperature; //! (3) - number is not of type `79`
// humidity = 79; //✔️ (4) - 79 is of type `79` but not reassignable
// humidity = 78; //! (5) - 78 is not of type `79`
let temp2 = 19; //! temp2's type is { all numbers }
let humid2 = 79; //! humidity's type is { 79 } and treat it like a const, i know what i'm doing
temp2 = 23; //! Is each member in { 23 } also in { all numbers }?
temp2 = humid2; //! Is each member in { 79 } also in { all numbers }?
// humid2 = temp2; //! Is each member in { all numbers } also in { 79 }?
humid2 = 79; //! Is each member in { 79 } also in { 79 }
// humid2 = 78; //! Is each member in { 78 } also in { 79 }
//* Implicit `any` and type annotations
// between 500 and 1000
exports.RANDOM_WAIT_TIME = Math.round(Math.random() * 500) + 500;
let startTime = new Date();
let endTime; //implicit any
setTimeout(() => {
    // endTime = 0 // doesn't work when not implicitly any
    endTime = new Date();
}, exports.RANDOM_WAIT_TIME);
//* Type Casting
let frontEndMastersFounding = new Date('Jan 1, 2012');
let date1 = frontEndMastersFounding;
let date2 = frontEndMastersFounding;
const humid3 = 79; //✔️ is 79 a number? If so, this is safe!
let date3 = 'oops'; //! TypeScript thinks this is a Date now, but it's really a string
//date3.toISOString(); //! what do we think will happen when we run this? 💥will be caught at runtime
// let date4 = "oops" as Date // doesn't work
//! Function arguments and return values
function add(a, b) {
    return a + b; // strings? numbers? a mix? without types
}
const result = add(3, 4);
// const p = new Promise(result); // not assignable, Promise takes callback function
/**/
console.log('all done');
exports.default = {};
