const { checkArrayValidity,
        checkNumberValidity
    } = require('./utils');

function range(start, end, step=1) {
    [start, end].map(checkNumberValidity);

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

function reverseArrayInPlace (arrayToReverseInPlace) {
    checkArrayValidity(arrayToReverseInPlace);
    const arrayLength = arrayToReverseInPlace.length;
    let startIndex = 0, endIndex = arrayLength - 1;
    const stopIndex = Math.floor((arrayLength/2)-1);
    return recursiveReversal(startIndex, endIndex, stopIndex, arrayToReverseInPlace);
}

function recursiveReversal (startIndex, endIndex, stopIndex, arrayToReverse) {
    if (startIndex>stopIndex) return arrayToReverse;
    [arrayToReverse[startIndex], arrayToReverse[endIndex]] = [arrayToReverse[endIndex], arrayToReverse[startIndex]];
    return recursiveReversal(startIndex+1, endIndex-1, stopIndex, arrayToReverse);
}

function arrayToList (arrayToConvert) {
    const lastIndex = arrayToConvert.length-1;
    return spawnObjRecursively(0, lastIndex, arrayToConvert)
}

function spawnObjRecursively (presentIndex, lastIndex, arrayToConvert) {
    if (presentIndex === lastIndex) {
        return {
            value: arrayToConvert[lastIndex],
            rest: null
        }
    }
    return {
        value: arrayToConvert[presentIndex],
        rest: spawnObjRecursively(presentIndex+1, lastIndex, arrayToConvert)
    }
}

function listToArray (listToConvert) {
    let values = []
    return recursivelyCombList(listToConvert, values)
}

function recursivelyCombList (listToConvert, values) {
    if(!listToConvert) return values;
    values.push(listToConvert.value);
    return recursivelyCombList(listToConvert.rest, values)
}

const testArray = ['brih', 'brah', 'breh', 'bruh', 'broh', 'bryh'];

//console.log(addAll(range(1,10, 1)));
// console.log(reverseArray(testArray));
// console.log(reverseArrayInPlace(testArray));
//console.log(arrayToList(testArray))
console.log(listToArray({ value: '3', rest: { value: '4', rest: { value: '8', rest: null } } }));