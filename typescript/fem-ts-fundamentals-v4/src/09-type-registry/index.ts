import { fetchRecord } from './lib/registry';

const book = fetchRecord('book', 'bk_123');
const magazine = fetchRecord('magazine', 'bk_123');

console.log(book)
console.log(magazine)
console.log('all done.')