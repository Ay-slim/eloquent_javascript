function minimum(a, b) {
    a = Number(a);
    b = Number(b);
    if (!a || !b) {
        throw new Error('Cannot compare non numbers');
    }
    if(a === b) {
        return null;
    }
    if(a < b) {
        return a;
    } else if (b<a) {
        return b;
    }
}

function isEven(n) {
    if (n < 0 || typeof n !== 'number') throw new Error('Only pass in a positive whole number');
    if (n===0) return true;
    if (n===1) return false;
    return isEven(n-2);
}

function countChars(mainString, charToCheck) {
    if (typeof mainString !== 'string' || typeof charToCheck !== 'string') throw new Error('Function only takes a string');
    let numberOfOccurrences = 0;
    for (let j=0; j < mainString.length; j++) {
        if (mainString[j] === charToCheck) numberOfOccurrences++;
    }
    return numberOfOccurrences
}

//console.log(minimum(6,6));
//console.log(isEven(2));
console.log(countChars('adabacebecebe', 4));