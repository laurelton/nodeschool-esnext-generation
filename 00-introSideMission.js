module.exports = function makeCounter(someObj, maxNum=10) {
    let value = 0;
    let done = false;

    someObj.next = function() {
        if (value < maxNum) {
            value += 1;
        } else {
            value = undefined;
            done = true;
        }

        return {value, done};
    };

    return someObj;
};
