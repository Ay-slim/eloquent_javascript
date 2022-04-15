function checkArrayValidity (arrayToCheck) {
    if (!Array.isArray(arrayToCheck)) throw new Error ('Please pass an array as argument');
}

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
    checkArrayValidity (fullRange);
    return fullRange.reduce((eachVal, acc) =>  eachVal + acc);
}

function reverseArray(arrayToReverse) {
    checkArrayValidity(arrayToReverse);
    let reversedArray = [];
    for (let j of arrayToReverse) {
        reversedArray.unshift(j);
    }
    //console.log(reversedArray);
    return reversedArray;
}

reverseArray(['a', 'b', 100, 39, 'err']);
//console.log(addAll(range(1,10, 1)));