"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldIn = (this && this.__classPrivateFieldIn) || function(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
};
var _a, _Car_nextSerialNumber, _Car_generateSerialNumber, _Car_serialNumber;
Object.defineProperty(exports, "__esModule", { value: true });
//* Built-in type guards
let value;
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
}
else {
    value;
    // ^ never
}
let maybeCar;
// the not working guard
if (maybeCar &&
    typeof maybeCar === 'object' &&
    'make' in maybeCar &&
    typeof maybeCar['make'] === 'string' &&
    'model' in maybeCar &&
    typeof maybeCar['model'] === 'string' &&
    'year' in maybeCar &&
    typeof maybeCar['year'] === 'number') {
    maybeCar;
    // ^ any
}
// the working guard
// returns boolean and tells compiler what to return
function isCarLike(valueToTest) {
    return (valueToTest &&
        typeof valueToTest === 'object' &&
        'make' in valueToTest &&
        typeof valueToTest['make'] === 'string' &&
        'model' in valueToTest &&
        typeof valueToTest['model'] === 'string' &&
        'year' in valueToTest &&
        typeof valueToTest['year'] === 'number');
}
// using the guard
if (isCarLike(maybeCar)) {
    maybeCar;
    // ^ CarLike
}
//* value is foo
//function isCarLike(valueToTest: any): valueToTest is CarLike {
//* asserts value is foo
function assertsIsCarLike(valueToTest) {
    if (!(valueToTest &&
        typeof valueToTest === 'object' &&
        'make' in valueToTest &&
        typeof valueToTest['make'] === 'string' &&
        'model' in valueToTest &&
        typeof valueToTest['model'] === 'string' &&
        'year' in valueToTest &&
        typeof valueToTest['year'] === 'number'))
        console.log(`Value does not appear to be a CarLike: ${valueToTest}`);
}
assertsIsCarLike(maybeCar); // <- any
maybeCar; // <- CarLike
//* Use with private #field presence checks
class Car {
    constructor() {
        _Car_serialNumber.set(this, __classPrivateFieldGet(_a, _a, "m", _Car_generateSerialNumber).call(_a));
    }
    static isCar(other) {
        if (other && // is it truthy
            typeof other === 'object' && // and an object
         __classPrivateFieldIn(_Car_serialNumber, other)) {
            // and we can find a private field that we can access from here
            // then it *must* be a car
            other;
            // ^ Car
            return true;
        }
        return false;
    }
}
_a = Car, _Car_serialNumber = new WeakMap(), _Car_generateSerialNumber = function _Car_generateSerialNumber() {
    var _b, _c;
    return __classPrivateFieldSet(this, _a, (_c = __classPrivateFieldGet(this, _a, "f", _Car_nextSerialNumber), _b = _c++, _c), "f", _Car_nextSerialNumber), _b;
};
_Car_nextSerialNumber = { value: 100 };
let val;
if (Car.isCar(val)) {
    val;
    // ^ Care
}
//* Narrowing with switch(true)
class Fish {
    swim() { }
}
class Bird {
    fly() { }
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
function isNull(val) {
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
exports.default = {};
