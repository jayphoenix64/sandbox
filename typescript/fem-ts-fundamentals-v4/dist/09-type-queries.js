"use strict";
//* keyof
Object.defineProperty(exports, "__esModule", { value: true });
const contact = {
    name: 'Ashley',
    email: 'ashley@example.com',
};
//* typeof
async function main() {
    const apiResponse = await Promise.all([fetch('https://example.com'), Promise.resolve('Titanium White')]);
}
//?^ note: type alias within a function scope!
const MyRule = CSSRule; // here we get the constructor itself
// CSSRule.STYLE_RULE;
const foo = new MyRule();
let carColor; //✔️ Reaching for something that exists
// let carSomething: Car['not-something-on-car']; //! Reaching for something invalid
let carColorRedComponent; //✔️ Reaching for something nested
let carProperty; // ✔️ Passing a union type through the index
//* Use case: the type registry pattern
/*
// See:
import("./09-type-registry/")

/*
  * keyof gives a key from an object
  * typeof extracts type fo value
*/
console.log('all done.');
exports.default = {};
