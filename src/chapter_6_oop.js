class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get distance() {
        return Math.sqrt(this.x**2 + this.y**2);
    }
}


// let vec3 = new Vec(3, 4);
// console.log(vec3.distance);