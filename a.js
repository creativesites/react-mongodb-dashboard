let a = 'John'
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', a));

let bb = 'Great this is your new code XX9XY please send this code to your friends via WhatsApp. You can also send them this link: Link to Chatbot'

const split = require('split-string');
console.log(split(bb, { separator: 'code' })); //=> ['a.b', 'c']