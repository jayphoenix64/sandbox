"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Foo_bar;
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumbers = void 0;
/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */
function timeout(n) {
    return new Promise((res) => setTimeout(res, n));
}
/**
 * Add two numbers
 * @param a first number
 * @param b second
 */
async function addNumbers(a, b) {
    await timeout(500);
    return a + b;
}
exports.addNumbers = addNumbers;
class Foo {
    static getValue() {
        return __classPrivateFieldGet(_a, _a, "f", _Foo_bar);
    }
}
_a = Foo;
_Foo_bar = { value: 3 };
//== Run the program ==//
(async () => {
    console.log(await addNumbers(Foo.getValue(), 4));
})();
