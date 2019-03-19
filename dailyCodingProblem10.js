//Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

//feels like cheating :)

function f() {
    console.log("Event has started. " + n/1000 + " seconds have passed!");
}
var nSec = 3000;
setTimeout(f, n);