class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get distance() {
        return Math.sqrt(this.x**2 + this.y**2);
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
}

//let groupie = new Group;
//groupie.add = 5;
// groupie.add = 5;
// console.log(groupie.add=5)
// groupie.delete = 5
// console.log(groupie.has=5)


let fd = "dkdmd dkd"
let groupie2 = Group.from(fd);
console.log(groupie2)
console.log(groupie2.has='a')
console.log(groupie2.has='d')


// let vec3 = new Vec(3, 4);
// console.log(vec3.distance);