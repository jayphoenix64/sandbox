//* Built-in type guards
let value: Date | null | undefined | 'pineapple' | [number] | { dateRange: [Date, Date] };

// instanceof
if (value instanceof Date) {
  value;
  // ^ Date
}
// typeof
else if (typeof value === 'string') {
  value;
  // ^ "pineapple"
}
// Specific value check
else if (value === null) {
  value;
  // ^ null
}
// Truthy/falsy check
else if (!value) {
  value;
  // ^ undefined
}
// Some built-in functions
else if (Array.isArray(value)) {
  value;
  // ^ [number]
}
// Property presence check
else if ('dateRange' in value) {
  value;
  // ^ daterange: [Date, Date]
} else {
  value;
  // ^ never
}
//* User-defined type guards

interface CarLike {
  make: string;
  model: string;
  year: number;
}

let maybeCar: any;

// the not working guard
if (
  maybeCar &&
  typeof maybeCar === 'object' &&
  'make' in maybeCar &&
  typeof maybeCar['make'] === 'string' &&
  'model' in maybeCar &&
  typeof maybeCar['model'] === 'string' &&
  'year' in maybeCar &&
  typeof maybeCar['year'] === 'number'
) {
  maybeCar;
  // ^ any
}

// the working guard
// returns boolean and tells compiler what to return
function isCarLike(valueToTest: any): valueToTest is CarLike {
  return (
    valueToTest &&
    typeof valueToTest === 'object' &&
    'make' in valueToTest &&
    typeof valueToTest['make'] === 'string' &&
    'model' in valueToTest &&
    typeof valueToTest['model'] === 'string' &&
    'year' in valueToTest &&
    typeof valueToTest['year'] === 'number'
  );
}

// using the guard
if (isCarLike(maybeCar)) {
  maybeCar;
  // ^ CarLike
}

//* value is foo
//function isCarLike(valueToTest: any): valueToTest is CarLike {

//* asserts value is foo

function assertsIsCarLike(valueToTest: any): asserts valueToTest is CarLike {
  if (
    !(
      valueToTest &&
      typeof valueToTest === 'object' &&
      'make' in valueToTest &&
      typeof valueToTest['make'] === 'string' &&
      'model' in valueToTest &&
      typeof valueToTest['model'] === 'string' &&
      'year' in valueToTest &&
      typeof valueToTest['year'] === 'number'
    )
  )
    console.log(`Value does not appear to be a CarLike: ${valueToTest}`);
}
assertsIsCarLike(maybeCar); // <- any
maybeCar; // <- CarLike

//* Use with private #field presence checks

class Car {
  static #nextSerialNumber: number = 100;
  static #generateSerialNumber() {
    return this.#nextSerialNumber++;
  }

  #serialNumber = Car.#generateSerialNumber();

  static isCar(other: any): other is Car {
    if (
      other && // is it truthy
      typeof other === 'object' && // and an object
      #serialNumber in other
    ) {
      // and we can find a private field that we can access from here
      // then it *must* be a car
      other;
      // ^ Car
      return true;
    }
    return false;
  }
}

let val: any;

if (Car.isCar(val)) {
  val;
  // ^ Care
}

//* Narrowing with switch(true)

class Fish {
  swim(): void {}
}
class Bird {
  fly(): void {}
}

switch (true) {
  case val instanceof Bird:
    val.fly();
    break;
  case val instanceof Fish:
    val.swim();
    break;
}

//* Writing high-quality type guards

//! EXAMPLE OF A BAD TYPE GUARD
function isNull(val: any): val is null {
  return !val; //! Lies!
}
const empty = '';
const zero = 0;
if (isNull(zero)) {
  console.log(zero); //? is it really impossible to get here?
}
if (isNull(empty)) {
  console.log(empty); //? is it really impossible to get here?
}

/**/

console.log('all done.');

export default {};
