// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let begin = (n < 0) ? 1 : 0;    
  let num = n.toString().substr(begin).split('').reverse().join('');    
  return parseInt( ((begin == 1) ? '-' : '') + num);

  // solution 2
  // return Math.sign(n) * parseInt(n.toString().substr(Math.sign(n) < 0 ? 1 : 0).split('').reverse().join(''));

  // #3
  // return parseInt((n * Math.sign(n)).toString().split('').reverse().join('')) * Math.sign(n);

  // $4
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);

  ''
}

reverseInt(-5);

module.exports = reverseInt;
