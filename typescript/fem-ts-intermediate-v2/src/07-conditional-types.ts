//* Ternary operator with values
const x = 16;
const isXNegative = x >= 0 ? 'no' : 'yes';

class Grill {
  startGas() {}
  stopGas() {}
}
class Oven {
  setTemperature(degrees: number) {}
}

type CookingDevice<T> = T extends 'grill' ? Grill : Oven;

let device1: CookingDevice<'grill'>;
//   ^Grill
let device2: CookingDevice<'oven'>;
//   ^Oven

//* Expressing Conditions

const one = 1;
const two = 2;
const ten = 10;

type IsLowNumber<T> = T extends 1 | 2 ? true : false;
type TestOne = IsLowNumber<1>; // = true
type TestTwo = IsLowNumber<2>; // = true
type TestTen = IsLowNumber<10>; // = false
type TestTenWithTwo = IsLowNumber<10 | 2>; // = boolean <false | true>

//* Extract<T, U>

type FavoriteColors =
  | 'dark sienna'
  | 'van dyke brown'
  | 'yellow ochre'
  | 'sap green'
  | 'titanium white'
  | 'phthalo green'
  | 'prussian blue'
  | 'cadium yellow'
  | [number, number, number]
  | { red: number; green: number; blue: number };

type StringColors = Extract<FavoriteColors, string>;
//    ^only strings
type ObjectColors = Extract<FavoriteColors, { red: number }>;
//    ^only the one object
type TupleColors = Extract<FavoriteColors, [number, number, number]>;
//    ^only the tuple

//* Exclude<T, U>

type NonStringColors = Exclude<FavoriteColors, string>;
//    ^only tuple and object

//* How do these work?

type _Exclude<T, U> = T extends U ? never : T;
type _Extract<T, U> = T extends U ? T : never;

type OneNever = 1 | never;

/**/

console.log('all done.');

export default {};
