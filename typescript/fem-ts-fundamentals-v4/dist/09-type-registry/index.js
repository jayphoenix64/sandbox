"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registry_1 = require("./lib/registry");
const book = (0, registry_1.fetchRecord)('book', 'bk_123');
const magazine = (0, registry_1.fetchRecord)('magazine', 'bk_123');
console.log(book);
console.log(magazine);
console.log('all done.');
