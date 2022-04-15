function range(start, end, step=1) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        throw new Error('Please pass numbers as arguments');
    }
    let fullRange = [];
    for (let j = start; j <= end; j+=step) {
        fullRange.push(j);
    }
    //console.log(fullRange);
    return fullRange;
}

function addAll(fullRange) {
    if (!Array.isArray(fullRange)) throw new Error ('Please pass an array as argument');
    return fullRange.reduce((eachVal, acc) =>  eachVal + acc);
}

console.log(addAll(range(1,10, 1)));