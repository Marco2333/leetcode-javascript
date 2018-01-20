/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 暴力搜索，时间复杂度O(n^3)
var threeSumClosest = function(nums, target) {
	var i, j, k, res,
		close = Infinity,
		len = nums.length;

	for(i = 0;i < len;i++) {
		for(j = i + 1;j < len;j++) {
			for(k = j + 1;k < len;k++) {
				if(Math.abs(nums[i] + nums[j] + nums[k] - target) < close) {
					res = nums[i] + nums[j] + nums[k];
					close = Math.abs(res - target);
				}
			}
		}
	}

	return res;
};

// 夹逼，时间复杂度O(n^2)
var threeSumClosest = function(nums, target) {
	var i, j, k, res,
		close = Infinity,
		len = nums.length;

		nums = nums.sort(function(a, b) {
			return a - b;
		});

	for(i = 0;i < len;i++) {
		if(nums[i] === nums[i - 1]) {
			continue;
		}

		for(j = i + 1, k = len - 1;j < len && k > j;) {
			if(nums[i] + nums[j] + nums[k] === target) {
				return target;
			}

			else if(nums[i] + nums[j] + nums[k] < target) {
				if(Math.abs(nums[i] + nums[j] + nums[k] - target) < close) {
					res = nums[i] + nums[j] + nums[k];
					close = Math.abs(res - target);
				}

				j++;

				while(nums[j] === nums[j - 1]) {
					j++;
				}
			}

			else {
				if(Math.abs(nums[i] + nums[j] + nums[k] - target) < close) {
					res = nums[i] + nums[j] + nums[k];
					close = Math.abs(res - target);
				}

				k--;

				while(nums[k] === nums[k + 1]) {
					k--;
				}
			}
		}
	}

	return res;
};