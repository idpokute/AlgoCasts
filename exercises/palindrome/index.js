// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome (str) {
  // solution 1
  // if (str === str.split('').reverse().join('')) {
  //   return true
  // }
  // return false

  // solution 1'
  // return (str === str.split('').reverse().join('')) ? true : false;

  // solution 1''
  //return str === str.split('').reverse().join('')

  // solution 2
  // for (let i = 0, j = str.length-1; i < str.length / 2; i++, j--) {
  //   if (str[i] !== str[j]) {
  //     return false
  //   }
  // }
  // return true

  // solution 3
  return str.split('').every((char, index) => {
    return char === str[str.length - 1 - index]
  })

  // solution 4
}

module.exports = palindrome;
