"use strict";
//* Covariance, Contravarience, and Bivariance
Object.defineProperty(exports, "__esModule", { value: true });
class Snack {
    constructor(petFriendly) {
        this.petFriendly = petFriendly;
    }
}
class Pretzel extends Snack {
    constructor(salted = true) {
        super(!salted);
        this.salted = salted;
    }
}
class Cookie extends Snack {
    constructor(chocolateType) {
        super(false);
        this.chocolateType = chocolateType;
        this.petFriendly = false;
    }
}
let cookieProducer = {
    produce: () => new Cookie('dark'),
};
let snackProducer = {
    produce: () => (Math.random() > 0.5 ? new Cookie('milk') : new Pretzel(true)),
};
//? Type equivalence check
snackProducer = cookieProducer; //✔️ OK
let cookiePackager = {
    package(item) { },
};
let snackPackager = {
    package(item) {
        if (item instanceof Cookie) {
            // Package cookie
        }
        else if (item instanceof Pretzel) {
            // Package pretzel
        }
        else {
            // Package other snacks?
        }
    },
};
// //? Type equivalence check
cookiePackager = snackPackager; //✔️ OK
let cookieProducerPackager = {
    produce() {
        return new Cookie('dark');
    },
    package(arg) { },
};
let snackProducerPackager = {
    produce() {
        return Math.random() > 0.5 ? new Cookie('milk') : new Pretzel(true);
    },
    package(item) {
        if (item instanceof Cookie) {
            /* Package cookie */
        }
        else if (item instanceof Pretzel) {
            /* Package pretzel */
        }
        else {
            /* Package other snacks? */
        }
    },
};
// //? Type equivalence check
// cookieProducerPackager = snackProducerPackager
// snackProducerPackager = cookieProducerPackager //! Nope
// | Cookie                    | direction     | Snack                 |
// |---------------------------|---------------|-----------------------|
// | `Cookie`                  | --- is a ---> | `Snack`               |
// | `ProducerPackager<Cookie>`|  x x x x x x  | `ProducerPackager<Snack>` |
//* Bivariance
function cookieQualityCheck(cookie) {
    return Math.random() > 0.1;
}
function snackQualityCheck(snack) {
    if (snack instanceof Cookie)
        return cookieQualityCheck(snack);
    else
        return Math.random() > 0.16; // pretzel case
}
// Prepare a bunch of snacks for shipment
let prepareSnacks = (uncheckedItems, callback) => uncheckedItems.filter(callback);
// Prepare a bunch of cookies for shipment
let prepareCookies = (uncheckedItems, callback) => uncheckedItems.filter(callback);
const cookies = [new Cookie('dark'), new Cookie('milk'), new Cookie('white')];
const snacks = [new Pretzel(true), new Cookie('milk'), new Cookie('white')];
prepareSnacks(cookies, cookieQualityCheck);
prepareSnacks(snacks, cookieQualityCheck);
prepareCookies(cookies, snackQualityCheck);
/**
 * strictFunctionTypes ts-config on true does not allow bivariance only covariance
*/
console.log('all done.');
exports.default = {};
