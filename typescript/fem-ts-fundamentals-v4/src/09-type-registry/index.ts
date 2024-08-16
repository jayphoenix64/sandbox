import { fetchRecord } from './lib/registry';

const book = fetchRecord('book', 'bk_123');
const magazine = fetchRecord('magazine', 'bk_123');

console.log('all done.');
