/*
Run-length encoding is a fast and simple method of encoding strings. 
The basic idea is to represent repeated successive characters as a single count and character. 
For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
Implement run-length encoding and decoding. 
You can assume the string to be encoded have no digits and consists solely of alphabetic characters. 
You can assume the string to be decoded is valid.
*/

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