//* keyof

const contact = {
  name: 'Ashley',
  email: 'ashley@example.com',
};
type WhatIWant = 'name' | 'email';
type Try1 = keyof typeof contact
// keyof = Object.keys() for types
// typeof = type of the value

type DatePropertyNames = keyof Date;

type DateStringPropertyNames = DatePropertyNames & string;
type DateSymbolPropertyNames = DatePropertyNames & symbol;

//* typeof

async function main() {
  const apiResponse = await Promise.all([fetch('https://example.com'), Promise.resolve('Titanium White')]);
  type ApiResponseType = typeof apiResponse; // can return higher resolution of type then typeof apiResponse by itself
}

//?^ note: type alias within a function scope!
const MyRule = CSSRule; // here we get the constructor itself
// CSSRule.STYLE_RULE;
const foo = new MyRule();

type MyRuleType = typeof MyRule;

//* Indexed Access Types

interface Car {
  make: string;
  model: string;
  year: number;
  color: {
    red: string;
    green: string;
    blue: string;
  };
}

let carColor: Car['color']; //✔️ Reaching for something that exists
// let carSomething: Car['not-something-on-car']; //! Reaching for something invalid
let carColorRedComponent: Car['color']['red']; //✔️ Reaching for something nested
let carProperty: Car['color' | 'year']; // ✔️ Passing a union type through the index

//* Use case: the type registry pattern
/*
// See: 
import("./09-type-registry/")

/*
  * keyof gives a key from an object
  * typeof extracts type fo value
*/

console.log('all done.');

export default {};
