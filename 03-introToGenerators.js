module.exports = function* generate(isEven) {
    let value = isEven ? 0 : -1;

    while (true) {
        value += 2;
        yield value;
    }
};
