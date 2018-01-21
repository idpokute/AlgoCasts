// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1 (str) {
  // solution 1
  // return str.split('').reverse().join('')

  // solution 2
  // let ret = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   ret += str[i];
  // }
  // return ret;

  // solution 3
  // let ret = '';
  // for (let char of str) {
  //   ret = char + ret
  // }
  // return ret;

  // solution 4
  // return str.split('').reduce((reversed, char) => char + reversed, '')

}

function reverse(str) {
  return str.split('').reverse().join('');
}

module.exports = reverse;
