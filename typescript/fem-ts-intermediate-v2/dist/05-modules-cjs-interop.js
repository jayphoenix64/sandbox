/**
 * import * as berries from "berries" can also be export * as berries from "berries"
 *
 * as soon as an import is used as a value, the file is actually imported in js using require
 * therefore type import do not actually get a file import, at tree shaking it will be eliminated because it is only there for type checks
 * use @typescript-eslint/consistent-type-imports for this problem
 *
 * module.exports is commonjs
 * esModuleInterop requires every user of the module to activate this flag and ignore type checking to an extend
 * rather user import Berries = require('./berries')
 *
 * d.ts files are declaration files that are modules that hold imports without code
 */
console.log('all done.');
