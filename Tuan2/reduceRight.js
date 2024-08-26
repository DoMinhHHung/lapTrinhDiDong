Array.prototype.myReduceRight = function(callback, initialValue) {
    let accumulator = initialValue;
    for (let index = this.length - 1; index >= 0; index--) {
        accumulator = callback(accumulator, this[index], index, this);
    }
    return accumulator;
};

var d = [1, 2, 3, 4];
console.log(
    d.myReduceRight((acc, curr) => {
        return acc + curr;
    }, 0)
); // 10