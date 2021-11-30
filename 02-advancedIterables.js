module.exports = (isEven) => {
    let value = isEven ? 0 : -1;
    const iter = {
        next: (swap) => {
            if (swap) {
                value += 1;
            } else {
                value += 2;
            }

            return {value};
        }
    };

    return iter;
};
