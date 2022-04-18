function throwError (type) {
    throw new Error(`Invalid type. Please pass ${type}(s) as argument(s).`);
}

module.exports = {
    checkArrayValidity: function (arrayToCheck) {
        if (!Array.isArray(arrayToCheck)) throwError('array');
    },
    checkNumberValidity: function (numberToCheck) {
        if (typeof numberToCheck !== 'number') throwError('number');
    },
    checkStringValidity: function (stringToCheck) {
        if (typeof stringToCheck !== 'string') throwError('string');
    },
    checkObjectValidity: function (objectToCheck) {
        if (objectToCheck.toString() !== '[object Object]') throwError('object');
    }
}