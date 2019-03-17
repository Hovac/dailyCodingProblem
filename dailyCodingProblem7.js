function checkWays(c, n) {
    if (c[0] == 0 || n <=1) {
        return 1;
    }
    var counter = 0;
    
    if (c[n-1] > 0) counter = checkWays(c, n-1);
    if (c[n-2] == 1 || (c[n-2] == 2 && c[n-1] < 7)) counter += checkWays(c, n-2);

    return counter
}

var code = "1111";
var codeArray = code.split('');
var cCount = codeArray.length;
console.log(checkWays(codeArray,cCount));