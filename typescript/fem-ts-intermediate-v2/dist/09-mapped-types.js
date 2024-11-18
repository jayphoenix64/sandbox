"use strict";
//* Recall: index signature
Object.defineProperty(exports, "__esModule", { value: true });
const fruitCatalog = {};
fruitCatalog.apple;
function printFruitCatalog(fruitCatalog) {
    fruitCatalog.cherry;
    fruitCatalog.apple;
    //fruitCatalog.pineapple //! Error
}
function load(dataSDK) {
    dataSDK.setDigits([14]);
    dataSDK.setFlags({ darkMode: true, mobile: false });
}
// //? Extracting string literal types
const courseWebsite = 'Frontend Masters';
let fe = 'Frontend';
function load2(doc) {
    doc.querySelector('input'); //! a lot of nevers!
}
// type ValueFilteredDoc = Pick<Document, RelevantDocumentKeys>;
/**
 * Dictionaries have arbitrary keys, Records have specific keys
 */
console.log('all done.');
exports.default = {};
