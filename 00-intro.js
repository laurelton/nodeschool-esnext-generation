module.exports = function makeCounter(someObj) {
    let value = 0;
    someObj.next = function() {
        return value < 10 ?
            {value: ++value, done: false} :
            {value: undefined, done: true};
    };

    return someObj;
};
