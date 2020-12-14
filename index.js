const alphabet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'U', 'V', 'X', 'Y', 'Z']
const subst = { O: '0', I: '1', B: '8', T: 7, Q: 0 };

exports.fix = function(s) {
  let res = '';
  s = s.toUpperCase();
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    ch = subst[ch] || ch;
    res += ch;
  }
  return res;
}

exports.random = function(len) {
  let res = '';
  for(let i = 0; i < len; i++) {
    res += alphabet[(Math.random()*alphabet.length)|0];
  }
  return res;
}
