module.exports = {
    checkArrayValidity: function (arrayToCheck) {
        if (!Array.isArray(arrayToCheck)) throw new Error('Invalid type. Please pass array(s) as argument(s).');
    },
    checkNumberValidity: function (numberToCheck) {
        if (typeof numberToCheck !== 'number') throw new Error('Invalid type. Please pass number(s) as argument(s)');
    },
    checkStringValidity: function (stringToCheck) {
        if (typeof stringToCheck !== 'string') throw new Error('Invalid type. Please pass string(s) as argument(s)')
    }
}