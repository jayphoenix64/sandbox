"use strict";
//* Null
Object.defineProperty(exports, "__esModule", { value: true });
const userInfo = {
    name: 'Mike',
    email: 'mike@example.com',
    secondaryEmail: null, // user has no secondary email
};
const formInProgress = {
    createdAt: new Date(),
    completedAt: new Date(),
    data: new FormData(),
};
function submitForm() {
    //const myDate: Date = formInProgress.completedAt
    formInProgress.completedAt = new Date();
}
//* void
console.log(`console.log returns nothing.`);
const cart = {};
// cart.fruits.push({ name: 'kumkuat', qty: 1 })
// cart.fruits!.push({ name: 'kumkuat', qty: 1 }) //unsafe, fine in tests because it will throw
// instead use type guards:
const { fruits } = cart;
if (fruits) {
    fruits.push({ name: 'kumkuat', qty: 1 });
}
else {
    // what if it's not there?
}
//* Definite assignment assertion
// in ts-config: strictPropertyInitialization: true
class ThingWithAsyncSetup {
    constructor() {
        this.setupPromise = new Promise((resolve) => {
            this.isSetup = false;
            return this.doSetup(resolve);
        }).then(() => {
            this.isSetup = true;
        });
    }
    async doSetup(resolve) {
        // some async stuff
    }
}
function getLastPayment(data) {
    const { customer } = data;
    if (!customer)
        return;
    const { lastInvoice } = customer;
    if (!lastInvoice)
        return;
    const { lastPayment } = lastInvoice;
    if (!lastPayment)
        return;
    return lastPayment.amount;
}
// use optional chaining
function getLastPayment2(data) {
    var _a, _b, _c;
    return (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.customer) === null || _a === void 0 ? void 0 : _a.lastInvoice) === null || _b === void 0 ? void 0 : _b.lastPayment) === null || _c === void 0 ? void 0 : _c.amount; // evals to undefined if one is undefined
}
//* Nullish Coalescing
function setVolume(v) { }
function initializePlayer(config) {
    var _a;
    //const vol = typeof config.volume === 'undefined' ? 50 : config.volume;
    //const vol = config.volume || 50; // volume cannot be undefined anymore because this is a truthy falsy check now
    const vol = (_a = config.volume) !== null && _a !== void 0 ? _a : 50; // volume can be undefined again, it can be null or undefined
    setVolume(vol);
}
/**/
console.log('all done.');
exports.default = {};
