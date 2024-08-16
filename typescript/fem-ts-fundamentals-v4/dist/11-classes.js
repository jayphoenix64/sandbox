"use strict";
//* Classes
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
//? Field types
class Car {
    get serialNumber() {
        return __classPrivateFieldGet(this, _Car_serialNumber, "f");
    }
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        //? static blocks
        // static {
        //   // `this` is the static scope
        //   fetch('https://api.example.com/vin_number_data')
        //     .then((response) => response.json())
        //     .then((data) => {
        //       this.nextSerialNumber = data.mostRecentInvoiceId + 1;
        //       this.isReady = true;
        //     });
        // }
        //* readonly
        _Car_serialNumber.set(this, __classPrivateFieldGet(_a, _a, "m", _Car_generateSerialNumber).call(_a));
    }
    honk(duration) {
        return `h${'o'.repeat(duration)}nk`;
    }
    getLabel() {
        return `${this.make} ${this.model} ${this.year} - #${this.serialNumber}`;
    }
    equals(other) {
        if (other && typeof other === 'object' && __classPrivateFieldIn(_Car_serialNumber, other)) {
            other;
            //       ^?
            return __classPrivateFieldGet(other, _Car_serialNumber, "f") === __classPrivateFieldGet(this, _Car_serialNumber, "f");
        }
        return false;
    }
}
_a = Car, _Car_serialNumber = new WeakMap(), _Car_generateSerialNumber = function _Car_generateSerialNumber() {
    var _b, _c;
    return __classPrivateFieldSet(this, _a, (_c = __classPrivateFieldGet(this, _a, "f", _Car_nextSerialNumber), _b = _c++, _c), "f", _Car_nextSerialNumber), _b;
};
_Car_nextSerialNumber = { value: 100 };
let sedan = new Car('Honda', 'Accord', 2017);
// sedan.activateTurnSignal("left") //! not safe!
// new Car(2017, "Honda", "Accord") //! not safe!
//? method types
const c = new Car('Honda', 'Accord', 2017);
c.honk(5); // "hooooonk"
//? static member fields
console.log(new Car('Honda', 'Accord', 2017));
// > "Honda Accord 2017 - #100
console.log(new Car('Toyota', 'Camry', 2022));
// > "Toyota Camry 2022 - #101
//* Access modifier keywords
const s = new Car('Nissan', 'Altima', 2020);
// s.serialNumber;
//* JS private #fields
//? member fields
// #serialNumber = Car.generateSerialNumber() // this is js private
// c.#serialNumber
//? static fields
// static #nextSerialNumber: number
// static #generateSerialNumber() { return this.#nextSerialNumber++ }
// #serialNumber = Car.#generateSerialNumber()
//* Private field presence checks
const c2 = c;
c2.equals(c);
//* Parameter properties
class Base {
}
class Car2 extends Base {
    constructor(make) {
        super();
        this.make = make;
        this.foo = console.log('class field initializer');
        console.log('custom constructor stuff');
    }
}
//* Overrides
class Truck extends Car {
    honk() {
        // OOPS!
        return 'BEEP';
    }
}
const t = new Truck('Ford', 'F-150', 2020);
t.honk(); // "beep"
//? override keyword
// override hoonk() { // OOPS!
//? noImplicitOverride
// "noImplicitOverride": true
/**/
console.log('all done.');
exports.default = {};
