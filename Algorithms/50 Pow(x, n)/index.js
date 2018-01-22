/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 使用内置函数
var myPow = function(x, n) {
	return Math.pow(x, n);
};

// 时间复杂度O(n)，超时
var myPow = function(x, n) {
	var res = 1, 
		count = Math.abs(n);

	if(x === 0 && n <= 0) {
		return Infinity;
	}

	if(n === 0) {
		return 1;
	}

	while(count > 0) {
		res *= x;
		count -= 1;
	}

	return n > 0 ? res : 1 / res;
}

// 时间复杂度O(logn)
var myPow = function(x, n) {
	if(n === 0) {
		return 1;
	}

	if(n === 1) {
		return x;
	}

	var res, t = ~~(n / 2);

	if(n < 0) {
		t = -t;
		x = 1 / x;
	}

	res = myPow(x, t)

	if(n % 2 === 0) {
		return res * res;
	}

	return res * res * x;
}