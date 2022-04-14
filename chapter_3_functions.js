function minimum(a, b) {
    a = Number(a);
    b = Number(b);
    if (!a || !b) {
        throw new Error('Cannot compare non numbers');
    }
    if(a === b) {
        return null;
    }
    if(a < b) {
        return a;
    } else if (b<a) {
        return b;
    }
}

