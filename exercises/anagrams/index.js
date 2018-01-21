// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    let strMap = [
        [],
        []
    ];
    let idx = 0;

    for (str of [stringA, stringB]) {
        for (char of str) {

            str.replace(/[^\w]/g,"")

            if (char === ' ') continue;
            else if (char == '')

            

            if (strMap[idx][char] === undefined) {
                strMap[idx][char] = 1;
            } else {
                strMap[idx][char]++;
            }
        }
        idx++;
    }    



    console.log(strMap)
}

anagrams("hello", "world");

module.exports = anagrams;
