// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // solution 1
    // let arr = str.split('');
    // let dic = [];

    // arr.forEach((val) => {
        
    //     if (val in dic) {
    //         dic[val]++;
    //     } else {
    //         dic[val] = 1;
    //     }

    // });

    // let highkey;
    
    // for (highkey in dic) break;

    // dic.forEach((val, idx) => {
    //     if (val >= dic[highkey]) {
    //         highkey = idx;
    //     }
    // });

    // return highkey.toString();

  // #2    
  let chars = {};
  for (let char of str) {        
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }
  
  let high = 0;
  let key = '';
  for (let char in chars) {

    if (chars[char] >= high) {    
      high = chars[char];
      key = char;
    }
  }

  return key;
}

module.exports = maxChar;
