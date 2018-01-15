/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//  时间错杂度O(m+n)，尴尬呀
var findMedianSortedArrays = function(nums1, nums2) {
	var i = 0, j = 0,
		len1 = nums1.length,
		len2 = nums2.length,
		medium = ~~((len1 + len2) / 2);
	
	var arr = [];
	var before, current;

	while ((i < len1 || j < len2) && i + j <= medium) {
		if(i === len1) {
			before = current;
			current = nums2[j];

			j++;
			continue;
		}
		if(j === len2) {
			before = current;
			current = nums1[i];

			i++;
			continue;
		}
		if(nums1[i] <= nums2[j]) {
			before = current;
			current = nums1[i];
			i++;
		}
		else {
			before = current;
			current = nums2[j];
			j++;
		}
	}

	return (len1 + len2) === 0 ? undefined 
		: (len1 + len2) % 2 !== 0 ? current 
		: (before + current) / 2;
};