/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 时间复杂度O(n)
var searchRange = function(nums, target) {
	let i, j,
		res = [-1, -1];

	for(i = 0, j = nums.length - 1;i <= j;) {
		if(nums[i] === target && res[0] === -1) {
			res[0] = i;
		}
		if(nums[j] === target && res[1] === -1) {
			res[1] = j;
		}

		if(res[0] !== -1 && res[1] !== -1) {
			break;
		}

		if(res[0] === -1) {
			i++;
		}
		if(res[1] === -1) {
			j--;
		}
	}

	if(res[0] === -1) {
		res[0] = res[1];
	}
	if(res[1] === -1) {
		res[1] = res[0];
	}

	return res;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 时间复杂度O(log n)
var searchRange = function(nums, target) {
	let res = [-1, -1],
		start = firstGreaterEqual(nums, target);

	if(nums[start] !== target || start === nums.length) {
		return res;
	}

	res[0] = start;
	res[1] = firstGreaterEqual(nums, target + 1) - 1;

	return res;
};

var firstGreaterEqual = function(nums, target) {
	let mid, low = 0,
		high = nums.length;
	
	while(low < high) {
		mid = low + ((high - low) >> 1)

		if(nums[mid] < target) {
			low = mid + 1;
		}
		else {
			high = mid;
		}
	}

	return low;
};