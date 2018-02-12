/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let i = 1;

	for(;i < nums.length;i++) {
		if(nums[i] === nums[i - 1]) {
			nums.splice(i, 1);
			i--;
		}
	}

	return nums.length;
};