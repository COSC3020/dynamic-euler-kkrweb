// Kane Kriz
// UWYO COSC 3020 Algorithms
// Dynamic Euler Exercise - test js code
// 21 April 2025
//
//




//original provided code___________
const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert(factorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);




//added code___________
assert.strictEqual(e(0), 1);
//
assert.strictEqual(factorial(0), 1);
assert.strictEqual(factorial(1), 1);
assert.strictEqual(factorial(2), 2);
assert.strictEqual(factorial(3), 6);
assert.strictEqual(factorial(4), 24);
assert.strictEqual(factorial(5), 120);
assert.strictEqual(factorial(9), 362880);
assert.strictEqual(factorial(11), 39916800);
assert.strictEqual(factorial(15), 1307674368000);
