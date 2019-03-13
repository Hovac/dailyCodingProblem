//Given an array of integers, find the first missing positive integer 
//in linear time and constant space. In other words, find the lowest 
//positive integer that does not exist in the array. 
//The array can contain duplicates and negative numbers as well.

//For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

//For loop is linear and if has only one statement that is O(1) in complexity, so overall time complexity should be O(N)
var numbers = [-1,-2,-3];
var target = numbers[0];

for (i=1; i<numbers.length; i++) {
    if (numbers[i] > numbers[i-1]) {
        target = numbers[i];
    }
}
 target +=1;

console.log(target);