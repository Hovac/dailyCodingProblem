/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/


var nums = [11, 10, 2, 5, 6, 50, 1, 60];
var target = 16;

//this is first attempt at bruteforcing the problem. O(n^2) time complexity, since we have nested for loop traversing the whole array in worst case

var flag;
for (i = 0; i < nums.length; i++) {
    for (j = 0; j< nums.length; j++) {
        if(nums[i] + nums[j] == target) flag = true;
    }
}
console.log(flag);

//this function is using only one for loop, and it goes down from the end of the array if sumation is larger than target number, or goes up from the start
//if sumation is lesser than target number, and returns false if there is no number found that matches the target

function checkPair(a, n) {
    a.sort(function(a, b){return a-b});
    console.log(a);
    for (i = 0, j = a.length-1; i < j;) {
        var sumation = a[i] + a[j];
        console.log(a[i], a[j], sumation);
        if (sumation < n) i++;
        else if (sumation > n) j--;
        else return true;
    }
    return false;
}

var flag = checkPair(nums, target);
console.log(flag);




