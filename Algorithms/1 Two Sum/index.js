/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//时间复杂度为o(n*n)
var twoSum = function(nums, target) {
	for (var i = 0, len = nums.length; i < len - 1; i++) {
		for (var j = i + 1; j < len; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j]
			}
		}
	}
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//时间复杂度为o(n)
var twoSum = function(nums, target) {
	var map = [];

	for (var i = 0, len = nums.length; i < len; i++) {
		if (map[target - nums[i] + ''] != null) {
			return [map[target - nums[i] + ''], i];
		}
		map[nums[i] + ''] = i;
	}
};