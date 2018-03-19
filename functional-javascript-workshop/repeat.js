function repeat(operation, num) {
  for (let index = 0; index < num; index++) {
    operation();
  }
}

// Do not remove the line below
module.exports = repeat


/**
 * Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    function repeat(operation, num) {
      if (num <= 0) return
      operation()
      return repeat(operation, --num)
    }

    module.exports = repeat
 */
