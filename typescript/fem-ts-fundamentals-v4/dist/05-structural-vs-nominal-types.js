"use strict";
//* Nominal vs Structural
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
}
class Truck {
}
const vehicle = {
    make: 'Honda',
    model: 'Accord',
    year: 2017,
};
function printCar(car) {
    console.log(`${car.make} ${car.model} (${car.year})`);
}
printCar(new Car()); //✔️ Fine
printCar(new Truck()); //✔️ Fine
printCar(vehicle); //✔️ Fine
/*
  structual vs nominal
  * structual typing means if variable is instance of that class, so where does it come from, like instanceof
  * nominal typing means that a variable meets requirements of type that it wants, like typeof
*/
console.log('all done.');
exports.default = {};
