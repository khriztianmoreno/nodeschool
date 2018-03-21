const doubleAll = numbers => numbers.map((item => item * 2))

module.exports = doubleAll

/**
 * Here's the official solution in case you want to compare notes:
 *  module.exports = function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2
      })
    }
 */
