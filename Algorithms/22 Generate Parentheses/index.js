/**
 * @param {number} n
 * @return {string[]}
 */
// 左半括号数量永远大于等于右半括号数量
var addBrackets = function(left, right, s, result) {
	if(left === 0 && right === 0) {
		result.push(s);
	}

	if(left === right) {
		addBrackets(left - 1, right, s + '(', result);
	}
	else {
		if(left > 0) {
			addBrackets(left - 1, right, s + '(', result);
		}
		if(right > 0) {
			addBrackets(left, right - 1, s + ')', result);
		}
	}
}

var generateParenthesis = function(n) {
	var result = [];

	if(n <= 0) {
		return [];
	}

	addBrackets(n, n, '', result);

	return result;
};