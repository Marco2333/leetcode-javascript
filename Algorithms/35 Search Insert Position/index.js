/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	var i, res = len = nums.length;
	
	for(i = 0;i < len;i++) {
		if(nums[i] >= target) {
			return i;
		}
	}

	return res;
};