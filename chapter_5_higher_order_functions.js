function flatten (nestedArray) {
    return nestedArray.reduce((finalUnnestedArray, element) => finalUnnestedArray.concat(element))
}

// const testNestedArray = [[1536, 1541], [1542, 1548], [1549, 1563], [1564, 1565]];
// console.log(flatten(testNestedArray))