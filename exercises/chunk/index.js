// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

  // #1 solution
  // let i = 0
  // let total = 0
  // let temp = []
  // let resultArray = []

  // for (let item in array) {    
  //   temp.push(array[item])

  //   i++
  //   total++
  //   if (i === size || total === array.length) {         
  //     resultArray.push(temp)
  //     temp = []
  //     i = 0
  //   }
  // }
  // return resultArray
  
  // #2 solution
  // let resultArray = new Array(Math.ceil(array.length / size))
  // for (let i = 0; i < resultArray.length; i++) {
  //   resultArray[i] = []
  // }

  // let i = 0
  // let total = 0
  // array.forEach((val) => {
  //   resultArray[i].push(val)
  //   total++
  //   if (total % size === 0 || array.length === total) {
  //     i++
  //   }
  // })
  // return resultArray

  // #3 slice
  let results = []
  let index = 0
  while (index < array.length) {
    results.push(array.slice(index, index + size))
    index += size
  }
  return results
}

module.exports = chunk;
