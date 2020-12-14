const hfid = require('.');
const assert = require('assert');

// Are we replacing B,O, T and I
assert.equal(hfid.fix('b8i1o0t7'), '88110077');
// Are we uppercasing all
assert.equal(hfid.fix('acdefghjklmnpqrsuvwxyz'), 'ACDEFGHJKLMNPQRSUVWXYZ');

// Are we generating ids of required length
assert.equal(hfid.random(6).length, 6);
assert.equal(hfid.random(11).length, 11);
