//* Classes

//? Field types
class Car {
  static #nextSerialNumber = 100;
  static #generateSerialNumber() {
    return this.#nextSerialNumber++;
  }
  static isReady: boolean;

  //? static blocks
  // static {
  //   // `this` is the static scope
  //   fetch('https://api.example.com/vin_number_data')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.nextSerialNumber = data.mostRecentInvoiceId + 1;
  //       this.isReady = true;
  //     });
  // }

  //* readonly
  readonly #serialNumber = Car.#generateSerialNumber();

  protected get serialNumber() {
    return this.#serialNumber;
  }

  constructor(public make: string, public model: string, public year: number) {}

  honk(duration: number): string {
    return `h${'o'.repeat(duration)}nk`;
  }
  getLabel() {
    return `${this.make} ${this.model} ${this.year} - #${this.serialNumber}`;
  }
  equals(other: unknown) {
    if (other && typeof other === 'object' && #serialNumber in other) {
      other;
      //       ^?
      return other.#serialNumber === this.#serialNumber;
    }
    return false;
  }
  // changeSerialNumber(num: number) {
  //   this.#serialNumber = num;
  // }
}

let sedan = new Car('Honda', 'Accord', 2017);
// sedan.activateTurnSignal("left") //! not safe!
// new Car(2017, "Honda", "Accord") //! not safe!

//? method types

const c = new Car('Honda', 'Accord', 2017);
c.honk(5); // "hooooonk"

//? static member fields

console.log(new Car('Honda', 'Accord', 2017));
// > "Honda Accord 2017 - #100
console.log(new Car('Toyota', 'Camry', 2022));
// > "Toyota Camry 2022 - #101

//* Access modifier keywords

const s = new Car('Nissan', 'Altima', 2020);
// s.serialNumber;

//* JS private #fields

//? member fields
// #serialNumber = Car.generateSerialNumber() // this is js private
// c.#serialNumber

//? static fields
// static #nextSerialNumber: number
// static #generateSerialNumber() { return this.#nextSerialNumber++ }
// #serialNumber = Car.#generateSerialNumber()

//* Private field presence checks

const c2 = c;
c2.equals(c);

//* Parameter properties

class Base {}

class Car2 extends Base {
  foo = console.log('class field initializer');
  constructor(public make: string) {
    super();
    console.log('custom constructor stuff');
  }
}

//* Overrides

class Truck extends Car {
  override honk() {
    // OOPS!
    return 'BEEP';
  }
}

const t = new Truck('Ford', 'F-150', 2020);
t.honk(); // "beep"

//? override keyword
// override hoonk() { // OOPS!

//? noImplicitOverride
// "noImplicitOverride": true

/**/

console.log('all done.')

export default {};
