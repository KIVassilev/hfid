# Overview
A library for generating and error-correcting alpha-numerical IDs.
Common errors when reading IDs off printed documents or sharing them verbally are ambigous character that can be misread or misheard.

# Features
## For ID being printed and read
Does not use characters that can be misread as numbers
Letter | Number
--- | ---
T|7
O|0
B|8
I|1

## For ID being shared verbally
Does not use Q or W, since they are easy to be misheard

## Error-correction
Fix function will replace not used chars with their probable origins
Char | Replaced with
--- | ---
T|7
O|0
B|8
I|1
Q|0

# Usage

```javascript
const hfid = requide('hfid');

// Generate a random ID
var id = hfid.random(6);

// Fixing user input
var fixedId = hfid.fix('ARTBI'); // returns 'AR781'
```
