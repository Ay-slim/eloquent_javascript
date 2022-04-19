class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get distance() {
        return Math.sqrt(this.x**2 + this.y**2);
    }
}
class GroupIterator {
    constructor(group) {
        this.ix=0
        this.group = group
    }
    next() {
        if(this.ix === this.group.store.length) {
            return {done: true}
        }
        let value = {
            index: this.ix,
            value: this.group.store[this.ix],
        }
        this.ix++
        return {value, done: false}
    }
}
class Group {
    constructor(store=[]) {
        this.store = store;
    }
    set add(value) {
        if (this.store.includes(value)) return "Value already exists";
        this.store.push(value);
    }
    set delete(value) {
        if(!this.store.includes(value)) return "Value doesn't exist";
        const ix = this.store.indexOf(value);
        this.store.splice(ix, 1);
    }
    set has(value) {
        return this.store.includes(value)
    }
    static from(iterableObject) {
        let tempStore = []
        for (let ix in iterableObject) {
            tempStore.push(iterableObject[ix]);
        }
        return new Group(tempStore);
    }
    // To make a class iterable (using for/of), add a Symbol.iterator method that calls another iterator class which accepts an instance of the original class as an arg and defines the next method
    [Symbol.iterator] () {
        return new GroupIterator(this);
    }
    hasOwnProperty () {
        return "New random hasOwnProperty method"
    }
}



// Group.prototype[Symbol.iterator] = function() {
//     return new GroupIterator(this);
// };



//let groupie = new Group;
//groupie.add = 5;
// groupie.add = 5;
// console.log(groupie.add=5)
// groupie.delete = 5
// console.log(groupie.has=5)


let fd = "dkdmd dkd"
let groupie2 = Group.from(fd);
//console.log(groupie2,'GROUPIEEE 2')
// console.log(groupie2.has='a')
// console.log(groupie2.has='d')

// for (let {index, value} of groupie2) {
//     console.log(index, value)
// }


// let vec3 = new Vec(3, 4);
// console.log(vec3.distance);


/**To use the original hasOwnProperty method on an instance of a class 
 that has redefined it, use the call method on the hasOwnProperty from 
 the native object prototype as shown below
 **/
console.log(groupie2.hasOwnProperty()) //Calling the redefined hasOwnProperty method fromthe group class
console.log(Object.prototype.hasOwnProperty.call(groupie2.store, 3)) //Calling the regular hasOwnProperty method from the Object prototype