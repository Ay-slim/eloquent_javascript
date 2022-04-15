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

reverseArray('bruhh');
//console.log(addAll(range(1,10, 1)));