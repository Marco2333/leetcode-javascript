/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 调用内部函数
var strStr = function(haystack, needle) {
	return haystack.indexOf(needle);
};

var strStr = function(haystack, needle) {
	let res = haystack.match(needle);

	if(res == null) {
		return -1;
	}

	return res.index;
};

// 暴力搜索，时间复杂度O(mn)
var strStr = function(haystack, needle) {
	let i, j,
		l1 = haystack.length,
		l2 = needle.length;
	
	if(l2 === 0) {
		return 0;
	}

	for(i = 0;i <= l1 - l2;i++) {
		for(j = 0;j < l2 && haystack[i + j] === needle[j];j++) {
			if(j == l2 - 1) {
				return i;
			}
		}
	}

	return -1;
};