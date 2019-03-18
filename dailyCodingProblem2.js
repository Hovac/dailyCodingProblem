//Given an array of integers, return a new array 
//such that each element at index i of the new array 
//is the product of all the numbers in the original array 
//except the one at i.

//For example, if our input was [1, 2, 3, 4, 5], 
//the expected output would be [120, 60, 40, 30, 24]. 
//If our input was [3, 2, 1], the expected output would be [2, 3, 6].


//old solution which works in O(N^2)
    var nums = [1,2,3,4,5];
    var newNums = [];
    var product;

    for (var i = 0; i< nums.length; i++) {
        product = nums[i];
        for (var j = 0; j < nums.length; j++) {
            product = product * nums[j];
        }
        product = product / Math.pow(nums[i], 2);
        newNums.push(product);
    }

    console.log(newNums);

 //new solution
 //works in O(n) time
newNums = [];
 var product = 1;

 for (i = 0; i<nums.length; i++) {
     product *= nums[i];
 }

 for (i = 0; i<nums.length; i++) {
     var newProduct = product/nums[i];
     newNums.push(newProduct);
 }

 console.log(newNums);