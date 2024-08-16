"use strict";
//* Callables
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const add = (a, b) => a + b;
const subtract = (x, y) => x - y;
//* `void`
function printFormattedJSON(obj) {
    console.log(JSON.stringify(obj, null, '  '));
}
const x = printFormattedJSON(['hello', 'world']);
function invokeInFourSeconds(callback) {
    setTimeout(callback, 4000);
}
function invokeInFiveSeconds(callback) {
    setTimeout(callback, 5000);
}
const values = [];
// invokeInFourSeconds(() => values.push(4)) //! Error: Type 'undefined' is not assignable to type 'number'.
invokeInFiveSeconds(() => values.push(4)); // push returns a number and undefined is not a number but void does not care
let MyDateConstructor = Date;
const d = new MyDateConstructor(1697923072611);
function handleMainEvent(elem, handler) { }
// const myFrame = document.getElementsByTagName('iframe')[0];
// handleMainEvent(myFrame, (val) => {});
//? Form handler has a specific type now!
// const myForm = document.getElementsByTagName('form')[0];
// handleMainEvent(myForm, (val) => {});
//* `this` types
function myClickHandler(event) {
    this.disabled = true;
}
// myClickHandler(new Event('click')); // maybe ok?, not ok
// const myButton = document.getElementsByTagName('button')[0];
// const boundHandler = myClickHandler.bind(myButton);
// boundHandler(new Event('click')); // bound version: ok
// myClickHandler.call(myButton, new Event('click')); // also ok
//* Function best practices
//? Explicit function return types
async function getData(url) {
    const resp = await fetch(url);
    const data = (await resp.json());
    return data;
}
exports.getData = getData;
function loadData() {
    getData('https://example.com').then((result) => {
        console.log(result.properties.join(', '));
        //           ^?
    });
}
/*
 * void means ignore my return value
 * except if it is in a function declaration because there we have a commitment
 */
console.log('all done.');
exports.default = {};
