class MultiplicatorUnitFailure extends Error {};


let aPool = [5, 6, 7, 8, 9, 10, 3, 4, null, 0];

function primitiveMultiply() {
    let returnValue = 3*aPool[Math.floor(Math.random() * 10)];
    console.log('SECOND MULTIPLIEERRRRR', returnValue, 'RETURNN VVALLLUEEEE')
    if(returnValue === 0) {
        throw new MultiplicatorUnitFailure("Bad multiplicator input");
    } else {
        console.log(returnValue, 'RETURN VALLUEEEE BEFORE RETURN!!!!!')
        return returnValue;
    }
}

// console.log(primitiveMultiply())
/**For some reason, this works but returns undefined when retrying after throwing an error.  Gotta figure that out */
function keepTrying () {
    try {
        return primitiveMultiply();
    } catch(e) {
        console.log(e, 'THE ERROR ITSELFFFFF')
        console.log('ENTERED CATCH??????')
        if (e instanceof MultiplicatorUnitFailure) {
            console.log('ENTERED IFF?????')
            keepTrying()
        }
    }
}

console.log(keepTrying())