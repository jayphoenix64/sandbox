//* Nominal vs Structural

class Car {
  make: string;
  model: string;
  year: number;
  isElectric: boolean;
}

class Truck {
  make: string;
  model: string;
  year: number;
  towingCapacity: number;
}

const vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: 2017,
};

function printCar(car: { make: string; model: string; year: number }) {
  console.log(`${car.make} ${car.model} (${car.year})`);
}

printCar(new Car()) //✔️ Fine
printCar(new Truck()) //✔️ Fine
printCar(vehicle) //✔️ Fine

/*
  structual vs nominal
  * structual typing means if variable is instance of that class, so where does it come from, like instanceof
  * nominal typing means that a variable meets requirements of type that it wants, like typeof
*/

console.log('all done.');

export default {};
