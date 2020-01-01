const hfid = require('.');
const assert = require('assert');

// Are we replacing B O and I
assert.equal(hfid.fix('b8io'), '8810');
// Are we uppercasing all
assert.equal(hfid.fix('acdefghjklmnpqrstuvwxyz'), 'ACDEFGHJKLMNPQRSTUVWXYZ');

// Are we generating ids of required length
assert.equal(hfid.random(6).length, 6);
assert.equal(hfid.random(11).length, 11);
