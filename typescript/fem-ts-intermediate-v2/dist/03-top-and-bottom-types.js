"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* any
let flexible = 4;
flexible = 'Download some more ram';
// flexible = window.document
flexible = setTimeout;
// flexible.it.is.possible.to.access.any.deep.property // ts 5.4.3 catches this
// console.log(window, Promise, setTimeout, 'foo') // ts 5.4.3 catches this
//* unknown
let flexible2 = 4;
flexible2 = 'Download some more ram';
// flexible2 = window.document
flexible2 = setTimeout;
let myUnknown = 14;
// myUnknown.it.is.possible.to.access.any.deep.property //✔️ Fails as it should
// This code runs for myUnknown = { all possible values }
if (typeof myUnknown === 'string') {
    // This code runs for myUnknown = { all strings }
    myUnknown;
    //     ^ string
}
else if (typeof myUnknown === 'number') {
    // This code runs for myUnknown = { all numbers }
    myUnknown;
    //     ^ number
}
else {
    myUnknown;
    // ^ unknown
    // this would run for "the leftovers"
    //       myUnknown = { anything except string or numbers }
}
//* Practical use of top types
function doSomethingRisky() {
    if (Math.random() > 0.5)
        return 'ok';
    else if (Math.random() > 0.5)
        throw new Error('Bad luck!');
    else
        throw 'Really bad luck';
}
try {
    doSomethingRisky();
}
catch (e) {
    // tsconfig option useUknownInCatchVariables
    if (e instanceof Error) {
        e;
        //^ Error
    }
    else if (typeof e === 'string') {
        e;
        //^ string
    }
    else {
        // Last resort
        console.error(e);
        //            ^ unknown
    }
}
//* Almost top type: object, does not allow primitive type values
let val = { status: 'ok' };
// val = 'foo' //! string is not an object
// val = null //! null is not an object
val = () => 'ok'; //✔️ functions are objects
// The type of this value cannot be modeled by an interface
let response = { success: 'ok', data: [] };
//     ^ object
val = response;
//* Almost top type: {} empty object type, accepts everything execpt null and undefined
const stringOrNumber = 4;
let nullableString = null;
const myObj = { b: 'foo' };
let val2 = 4;
val2 = 'abc';
val2 = new Date();
val2 = stringOrNumber;
// val2 = nullableString
// val2 = myObj.a
//? Adding in null and undefined, and we're back to a top type
let withoutUndefined = 37;
let withUndefined = 38;
let anUnknown = '42';
// withoutUndefined = anUnknown //! unknown is not assignable to {}
withUndefined = anUnknown; //✔️ OK
//* Bottom type: never
function obtainRandomVehicle() {
    return {};
}
class Car {
    drive() {
        console.log('vroom');
    }
}
class Truck {
    tow() {
        console.log('dragging something');
    }
}
//? Add Boat
class Boat {
    isFloating() {
        return true;
    }
}
let myVehicle = obtainRandomVehicle();
//? Unreachable Error
class UnreachableError extends Error {
    constructor(_nvr, message) {
        super(message);
    }
}
// The exhaustive conditional
if (myVehicle instanceof Truck) {
    myVehicle.tow(); // Truck
}
else if (myVehicle instanceof Car) {
    myVehicle.drive(); // Car
}
else if (myVehicle instanceof Boat) {
    //do nothing
}
else {
    // NEITHER!
    const neverValue = myVehicle;
    //throw new UnreachableError(myVehicle, `Unexpected vehicle type: ${myVehicle}`);
}
//* Unit Types
//? null and undefined
let myNull = null;
let myUndefined = undefined;
// myNull = undefined;
// myUndefined = null;
//? void
let myVoid = (function () { })(); // invoking a void-returning IIFE
myVoid = undefined;
// myVoid = null;
// myUndefined = myVoid;
// myNull = myVoid;
/**
 * interfaces represent object types
 * but type object is different from that
 *
 * null is valid as object only if strictNullChecks in tsconfig is false
 */
console.log('all done.');
exports.default = {};
