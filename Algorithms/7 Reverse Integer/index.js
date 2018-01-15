/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	var min = 1 << 31,
		max = (1 << 30) * 2 - 1;
	
	var res = x < 0 
	? -(x + '').substring(1).split('').reverse().join('')
	: +(x + '').split('').reverse().join('');

	return (res > max || res < min)
	? 0
	: res
}