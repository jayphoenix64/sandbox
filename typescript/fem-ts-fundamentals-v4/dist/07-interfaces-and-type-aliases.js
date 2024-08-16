"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maybeGetUserInfo = void 0;
function printAmount(amt) {
    console.log(amt);
    const { currency, value } = amt;
    console.log(`${currency} ${value}`);
}
const donation = {
    currency: 'USD',
    value: 30.0,
    description: 'Donation to food bank',
};
printAmount(donation); //✔️ Valid
//? Let's look at a familiar example from the last chapter
function flipCoin() {
    if (Math.random() > 0.5)
        return 'heads';
    return 'tails';
}
const success = ['success', { name: 'Mike North', email: 'mike@example.com' }];
const fail = ['error', new Error('Something went wrong!')];
function maybeGetUserInfo() {
    // implementation is the same in both examples
    if (flipCoin() === 'heads') {
        return success;
    }
    else {
        return fail;
    }
}
exports.maybeGetUserInfo = maybeGetUserInfo;
const newYearsEve = 
//                    ^?
Object.assign(new Date(), { getDescription: () => 'Last day of the year' });
function printAmount2(amt) {
    return amt;
}
//* Inheritance in interfaces
//? `extends` keyword
function consumeFood(arg) { }
class AnimalThatEats {
    eat(food) {
        consumeFood(food);
    }
}
class Cat extends AnimalThatEats {
    meow() {
        return 'meow';
    }
}
const c = new Cat();
c.eat('cat food');
c.meow();
function careForHamster(h) {
    h.getFurOrHairColor();
    h.squeak();
    //   ^|
}
class Dog {
    eat(food) {
        consumeFood(food);
    }
    isAlive() {
        return true;
    }
    bark() {
        return 'woof';
    }
}
class LivingOrganism {
    //? A base class
    isAlive() {
        return true;
    }
}
class Dog2 extends LivingOrganism {
    bark() {
        return 'woof';
    }
    eat(food) {
        consumeFood(food);
    }
}
class Dog3 {
    jumpToHeight() {
        return 1.7;
    }
    eat(food) {
        consumeFood(food);
    }
}
//* Open interfaces
function feed(animal) {
    if (animal.isAlive()) {
        animal.eat('food');
    }
}
const val = [3, 4, [5, 6, [7], 59], 221];
if (typeof val !== 'number') {
    val.push(41);
    val.push([[41, 32], 23]);
    val.push([[]]);
    // val.push('this will not work'); //! No strings allowed
}
/**/
console.log('all done.');
exports.default = {};
