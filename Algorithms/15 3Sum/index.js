/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 时间复杂度 O(n^3)，暴力搜索。。。超时
var threeSum = function(nums) {
	var i, j, k,
		res = new Set(),
		len = nums.length;
		nums = nums.sort();

	for(i = 0;i < len;i++) {
		for(j = i + 1;j < len;j++) {
			for(k = j + 1;k < len;k++) {
				if(nums[i] + nums[j] + nums[k] === 0) {
					res.add(nums[i] + "," + nums[j] + "," + nums[k]);
				}
			}
		}
	}

	return [...res].map(function (item) {
		return item.split(",").map((value) => +value);
	})
};


// 时间复杂度 O(n^2)，夹逼
var threeSum = function(nums) {
	var i, j, k,
		res = [],
		len = nums.length;
		nums = nums.sort(function(a, b) {
			return a - b;
		});

	for(i = 0;i < len;i++) {
		if(nums[i] === nums[i - 1]) {
			continue;
		}

		for(j = i + 1, k = len - 1;j < len && k > j;) {
			if(nums[i] + nums[j] + nums[k] === 0) {
				res.push([nums[i], nums[j], nums[k]]);
				
				j++;
				
				while(nums[j] === nums[j - 1]) {
					j++;
				}
			}
			else if(nums[i] + nums[j] + nums[k] < 0) {
				j++;

				while(nums[j] === nums[j - 1]) {
					j++;
				}
			}
			else {
				k--;

				while(nums[k] === nums[k + 1]) {
					k--;
				}
			}
		}
	}

	return res;
};