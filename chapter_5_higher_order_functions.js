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

// const testNestedArray = [[1536, 1541], [1542, 1548], [1549, 1563], [1564, 1565]];
// console.log(flatten(testNestedArray))