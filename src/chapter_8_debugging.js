class MultiplicatorUnitFailure extends Error {};


let aPool = [5, 6, 7, 8, 9, 10, 3, 4, null, 0];

function primitiveMultiply() {
    let returnValue = 3*aPool[Math.floor(Math.random() * 10)];
    //console.log('SECOND MULTIPLIEERRRRR', returnValue, 'RETURNN VVALLLUEEEE')
    if(returnValue === 0) {
        throw new MultiplicatorUnitFailure("Bad multiplicator input");
    } else {
        //console.log(returnValue, 'RETURN VALLUEEEE BEFORE RETURN!!!!!')
        return returnValue;
    }
}

// console.log(primitiveMultiply())
/**
 * BLOCKER: For some reason, this works but returns undefined when retrying after throwing an error.  Gotta figure that out 
 * SOLUTION: Figured it out. Wasn't returning keepTrying() from the catch block
*/
function keepTrying () {
    try {
        return primitiveMultiply();
    } catch(e) {
        // console.log(e, 'THE ERROR ITSELFFFFF')
        // console.log('ENTERED CATCH??????')
        if (e instanceof MultiplicatorUnitFailure) {
            console.log('ENTERED IFF?????')
            return keepTrying()
        }
    }
}

//console.log(keepTrying())

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
    if (this.locked) throw new Error("Locked!");
      return this._content;
    }
 };

function withBoxUnclocked(functionValue) {
    box.unlock();
    //console.log(box.locked, 'LOCK STATE START')
    try {
        functionValue()
    } finally {
        box.lock()
        //console.log(box.locked, 'LOCK STATE END')
        return "Done"
    }
}

console.log(withBoxUnclocked(primitiveMultiply))