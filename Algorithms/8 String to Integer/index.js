/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	var i = parseInt(str),
		min = 1 << 31,
		max = (1 << 30) * 2 - 1;

	if(i !== i) {
		return 0;
	}

	if(i > max) {
		return max;
	}
	if(i < min) {
		return min;
	}
	
	return i;
};