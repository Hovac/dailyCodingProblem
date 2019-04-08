var message = "AAAABBBFCC";
console.log(message);

function encode(s) {
    var arr = s.split('');
    let temp = arr[0];
    let counter = 0;
    let eS = '';
    for (let i = 0; i < arr.length; i++) {
        if (temp == arr[i]) {
            counter++;
        } else {
            eS = eS + counter + temp;
            temp = arr[i];
            counter = 1;
        }
    }
    eS = eS + counter + temp;
    return eS;
}

console.log(encode(message));

function decode(s) {
    var arr = s.split('');
    let cS = '';
    for (let i = 0; i < arr.length; i++) {
        let num = parseInt(arr[i]);
        for (let j = 0; j < num; j++) {
            cS = cS + arr[i + 1];
        }
    }
    return cS;
}


console.log(decode(encode(message)));