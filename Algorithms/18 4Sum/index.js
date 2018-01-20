/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 类似于3SUM，夹逼
var fourSum = function(nums, target) {
	var i, j, k, l,
		res = [],
		len = nums.length,
		nums = nums.sort(function(a, b) {
			return a - b;
		})
	
	for(i = 0;i < len;i++) {
		if(nums[i] === nums[i - 1]) {
			continue;
		}

		for(j = i + 1;j < len;j++) {
			if(nums[j] === nums[j - 1] && j != i + 1) {
				continue;
			}

			for(k = j + 1, l = len - 1;k < l;) {
				if(nums[i] + nums[j] + nums[k] + nums[l] === target) {
					res.push([nums[i], nums[j], nums[k], nums[l]]);

					do {
						k++;
					} while(nums[k] === nums[k - 1] && k < l);
				}

				else if(nums[i] + nums[j] + nums[k] + nums[l] < target) {
					do {
						k++;
					} while(nums[k] === nums[k - 1] && k < l);
				}

				else {
					do {
						l--;
					} while(nums[l] === nums[l + 1] && k < l);
				}
			}
		}
	}

	return res;
};