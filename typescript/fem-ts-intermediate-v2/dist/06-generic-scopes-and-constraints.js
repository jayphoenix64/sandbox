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
var _a, _Payment_next_id_counter, _b, _Invoice_next_id_counter;
Object.defineProperty(exports, "__esModule", { value: true });
//* Generic Constraints - A motivating use case
const phoneList = [
    { customerId: '0001', areaCode: '321', num: '123-4566' },
    { customerId: '0002', areaCode: '174', num: '142-3626' },
    { customerId: '0003', areaCode: '192', num: '012-7190' },
    { customerId: '0005', areaCode: '402', num: '652-5782' },
    { customerId: '0004', areaCode: '301', num: '184-8501' },
];
const phoneDict = {
    '0001': {
        customerId: '0001',
        areaCode: '321',
        num: '123-4566',
    },
    '0002': {
        customerId: '0002',
        areaCode: '174',
        num: '142-3626',
    },
    /*... and so on */
};
function listToDict1(list, // array as input
idGen // fn for obtaining item's id
) {
    // create dict to fill
    const dict = {};
    for (let item of list) {
        // for each item
        dict[idGen(item)] = item; // make a key store in dict
    }
    return dict; // result
}
function listToDict(list) {
    const dict = {};
    list.forEach((item) => {
        dict[item.id] = item;
    });
    return dict;
}
const myColors = { id: 'a', color: 'blue' }; // similar to casting
const myColors2 = { id: 'a', color: 'blue' };
myColors.color.substring(0, 3);
myColors2.color.substring(0, 3);
//* Scopes and Type Parameters
function eatApple(bowl, eater) { }
function receiveFruitBasket(bowl) {
    console.log('Thanks for the fruit basket!');
    // only `bowl` can be accessed here
    eatApple(bowl, (apple) => {
        // both `bowl` and `apple` can be accessed here
    });
}
// outer function
function tupleCreator(first) {
    // inner function
    return function finish(last) {
        return [first, last];
    };
}
const finishTuple = tupleCreator(3);
const t1 = finishTuple(null);
const t2 = finishTuple([4, 8, 15, 16, 23, 42]);
//* Best practices
// interface HasId {
//   id: string
// }
// interface Dict<T> {
//   [k: string]: T
// }
function example1(list) {
    return list.pop();
    //      ^ HasId | undefined
}
function example2(list) {
    return list.pop();
    //      ^T | undefined
}
class Payment {
    constructor() {
        var _c, _d, _e;
        this.id = `pmnt_${__classPrivateFieldSet(_c = _a, _a, (_e = __classPrivateFieldGet(_c, _a, "f", _Payment_next_id_counter), _d = _e++, _e), "f", _Payment_next_id_counter), _d}`;
    }
}
_a = Payment;
_Payment_next_id_counter = { value: 1 };
class Invoice {
    constructor() {
        var _c, _d, _e;
        this.id = `invc_${__classPrivateFieldSet(_c = _b, _b, (_e = __classPrivateFieldGet(_c, _b, "f", _Invoice_next_id_counter), _d = _e++, _e), "f", _Invoice_next_id_counter), _d}`;
    }
}
_b = Invoice;
_Invoice_next_id_counter = { value: 1 };
const result1 = example1([
    //   ^?
    new Payment(),
    new Invoice(),
    new Payment()
]);
const result2 = example2([
    //   ^?
    new Payment(),
    new Invoice(),
    new Payment()
]);
/**/
console.log('all done.');
exports.default = {};
