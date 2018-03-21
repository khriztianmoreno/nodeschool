function countWords(inputWords) {
  return inputWords.reduce((total, word) => {
    total[word] = ++total[word] || 1 // increment or initialize to 1
    return total
  }, {}) // second argument to reduce initialises countMap to {}
}

module.exports = countWords


/**
 *  function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }
 */
