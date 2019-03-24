//The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.
//Hint: The basic equation of a circle is x2 + y2 = r2.

var dotStart = document.getElementById('dotStart');
var dotStop = document.getElementById('dotStop');
var dotOut = document.getElementById('dotResult');
var w;
var h;
var flag = false;
var cIn = 0;
var cOut = 0;
var r;
var result = 1.0;

function setup() {
    w = windowWidth;
    h = windowHeight;
    createCanvas(w, h);
    r = h / (2 * 1.5);
    reset();
}

function reset() {
    background('#20639B');
    fill('#F6D55C');
    noStroke();
    ellipse(w / 2, h / 2, 2 * r + 5);
    cIn = 0;
    cOut = 0;
    dotOut.innerHTML = 0;
}

function mouseWheel() {
    reset();
}


function draw() {
    if (flag) {
        let tx = random(0, w);
        let ty = random(0, h);
        var d = dist(w / 2, h / 2, tx, ty);
        if (d < r + 2.5) {
            fill('rgba(237,85,59,1)')
            cIn++;
        }
        else if (d > r + 2.5) {
            fill('rgba(223,231,36,0.7)')
            cOut++;
        }
        ellipse(tx, ty, 5);
    }
    if (cIn > 0 && cOut > 0) {
        result = (cIn / (cIn + cOut)) * 9 * (w / h);
        result = Number.parseFloat(result).toFixed(6);
        dotOut.innerHTML = result;
    }
}

function startDots() {
    flag = true;
}
function stopDots() {
    flag = false;
}