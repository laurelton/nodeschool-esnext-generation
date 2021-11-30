module.exports = function* generate() {
    let value = 0;
    let multiplier = 1;

    while (true) {
        value += 1;
        multiplier = yield value * multiplier;
        if (!multiplier) {
            multiplier = 1;
        }
    }
};
