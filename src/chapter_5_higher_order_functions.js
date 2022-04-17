function flatten (nestedArray) {
    return nestedArray.reduce((finalUnnestedArray, element) => finalUnnestedArray.concat(element))
}

function loop (argList) {
    const {start, end, step, value, testFunc, bodyFunc, updateFunc} = argList;
    for (let j = start; j<=end; j = j+step) {
        if(!testFunc(value)) break;
        bodyFunc(value);
        return updateFunc(value);
    }
}

function every (arrayToTest, func) {
    for(el of arrayToTest) {
        if(!func(el)) return false
    }
    return true
}

const testTestFunction = p => p > 5;
console.log(every([6,7,8,9], testTestFunction)) 

// const testNestedArray = [[1536, 1541], [1542, 1548], [1549, 1563], [1564, 1565]];
// console.log(flatten(testNestedArray))