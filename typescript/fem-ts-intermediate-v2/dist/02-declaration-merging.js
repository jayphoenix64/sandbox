"use strict";
//* Declaration merging
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fruit2 = exports.banana = void 0;
exports.Fruit = Fruit;
const banana = {
    //    ^ identifiers
    name: 'banana',
    color: 'yellow',
    mass: 183,
};
exports.banana = banana;
//? Value
function Fruit(kind) {
    switch (kind) {
        case 'banana':
            return banana;
        default:
            throw new Error(`fruit type ${kind} not supported`);
    }
}
//? Namespace
(function (Fruit) {
    //         ^ identifier
    function createBanana() {
        //                       ^ identifier
        return Fruit('banana');
        //        ^ identifier
    }
})(Fruit || (exports.Fruit = Fruit = {}));
//* How to tell what's on an indentifier
const is_a_value = 4;
var is_a_namespace;
(function (is_a_namespace) {
    const foo = 17;
})(is_a_namespace || (is_a_namespace = {}));
// how to test for a (value | namespace)
const x = is_a_value; // the value position (RHS of =).
//           ^?
// how to test for a type
const z = {}; // the type position (LHS of =).
//         ^?
// how to test for a namespace (hover over is_a_namespace symbol)
is_a_namespace;
// const x_2 = is_a_type //! Wrong position for type
const x_3 = is_a_namespace; //✔️ Namespace can be used as a value
// how to test for a type
// const y: is_a_value = {} //! Wrong position for value
// const yy: is_a_namespace = {} // ✔️ Namespace can't be used as a type
//* namespace example
//* What's the point of `namespace`?
// // a `fetch` kind of function
// $.ajax({
//   url: '/api/getWeather',
//   data: {
//     zipcode: 97201,
//   },
//   success: function (result) {
//     // @ts-ignore
//     $('#weather-temp')[0].innerHTML =
//       '<strong>' + result + '</strong> degrees'
//   },
// })
// // a `document.querySelectorAll` kind of function
// $('h1.title').forEach((node) => {
//   node.tagName // "h1"
//   //    ^?
// })
// function $(selector: string): NodeListOf<Element> {
//   return document.querySelectorAll(selector)
// }
// namespace $ {
//   export function ajax(arg: {
//     url: string
//     data: any
//     success: (response: any) => void
//   }): Promise<any> {
//     return Promise.resolve()
//   }
// }
//* A look back on classes
class Fruit2 {
    static createBanana() {
        return { name: 'banana', color: 'yellow', mass: 123 };
    }
}
exports.Fruit2 = Fruit2;
// how to test for a value
const valueTest = Fruit2; // Fruit2 is a value!
valueTest.createBanana;
// how to test for a type
let typeTest = {}; // Fruit2 is a type!
typeTest.color;
const fruitConstructor = Fruit2;
/**
 * Object.freeze() makes object Readonly of a type
 */
console.log('all done.');
