"use strict";
function calculateAverage(arr) {
    if (arr.length === 0)
        return undefined;
    const sum = arr.reduce((acc, current) => {
        return acc + current;
    }, 0);
    const average = sum / arr.length;
    return average;
}
//# sourceMappingURL=script.js.map