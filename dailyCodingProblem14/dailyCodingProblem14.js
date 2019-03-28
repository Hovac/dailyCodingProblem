//The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.
//Hint: The basic equation of a circle is x2 + y2 = r2.

var dotStart = document.getElementById('dotStart');
var dotStop = document.getElementById('dotStop');
var dotOut = document.getElementById('dotResult');
var speedSlider = document.getElementById('speedSlider');
var speed = speedSlider.value;
var w;
var h;
var flag = false;
var cIn = 0;
var cOut = 0;
var r;
var usingHeight = false;
var result = 1.0;

var closePi = 0;

function setup() {
    w = windowWidth;
    h = windowHeight;
    createCanvas(w, h);
    r = w / 4;
    if (2*r > h) {
        r = h/3;
        usingHeight = true;
    }
    reset();
}

function reset() {
    background('#20639B');
    fill('#F6D55C');
    noStroke();
    ellipse(w / 2, h / 2, 2 * r + 5);
    cIn = 0;
    cOut = 0;
    dotOut.innerHTML = " ";
    closeDiff = 0;
    closePi = 0;
    diff = 0;
}

function mouseWheel() {
    reset();
}


function draw() {
    if (flag) {
        for (let i = 0; i < speed; i++) {
            let tx = random(0, w);
            let ty = random(0, h);
            let d = dist(w / 2, h / 2, tx, ty);
            if (d < r + 1.5) {
                fill('rgba(237,85,59,1)')
                if (d < r) cIn++;
            }
            else if (d > r + 1.5) {
                fill('rgba(223,231,36,0.7)')
                if (d > r) cOut++;
            }
            ellipse(tx, ty, 2);

            if (cIn > 0 && cOut > 0) {
                if(usingHeight) {
                    result = (3*w*cIn) / (r * (cOut+cIn));
                }
                else {
                    result = (4 * h * cIn) / (r * (cOut+cIn));
                }
            }
            let closeDiff = Math.abs(Math.PI - closePi);
            let diff = Math.abs(Math.PI - result)
            if (diff < closeDiff) {
                closeDiff = diff;
                closePi = result;
            }
            dotOut.innerHTML = result + "<br />" + closePi;

        }
    }
}

dotStart.addEventListener('click', function () {
    flag = true;
});

dotStop.addEventListener('click', function () {
    flag = false;
});

speedSlider.addEventListener('input', function () {
    speed = speedSlider.value;
});
