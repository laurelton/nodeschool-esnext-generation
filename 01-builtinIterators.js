module.exports = function filterForNumbers(iterable) {
    const numbers = [];
    const isNumeric = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    for (const val of iterable) {
        if (isNumeric(val)) {
            numbers.push(val);
        }
    }

    return numbers;
};
