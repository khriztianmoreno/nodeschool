module.exports = function average(...args) {
    var sum = args.reduce((prev, current) => prev + current);
    return (sum / (args.length));
};