
//  *********Find the index value of summation of two number for getting the target value**********

var  nums = [5, 2, 7, 3];

var target = 8;

var twoSum = function (nums, target){

    for(var i=0; i<nums.length; i++){
        for(var j=1; j<nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j];
            }
        }
    }
}

console.log( twoSum(nums, target));