//cons(a,b) constructs a pair, and car(pair) and cdr(pair) 
//returns the first and last element of that pair. 
//For example, car(cons(3,4)) returns 3, and cdr(cons(3,4)) returns 4

function cons(a, b) {
    function pair (f) {
        return f(a,b);
    }
    return pair;
}

function car(f) {
    function frst(a,b) {
        return a;
    }
    return f(frst);
}

function cdr(f) {
    function scnd(a,b) {
        return b;
    }
    return f(scnd);
}

console.log(car(cons(3,4)));
console.log(cdr(cons(3,4)));

