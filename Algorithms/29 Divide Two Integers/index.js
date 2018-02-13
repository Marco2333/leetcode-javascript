/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
	var max = ~(1 << 31);
	var min = (1 << 31);

	res = parseInt(dividend / divisor);

	if(res > max) {
		return max;
	}
	if(res < min) {
		return min;
	}
	
	return res;
};


/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// 通过循环左移解决
var divide = function(dividend, divisor) {
	var temp, count,
		flag = 1, 
		result = 0,
		min = (1 << 31),
		max = ~(1 << 31),
		num1 = Math.abs(dividend),
		num2 = Math.abs(divisor);

	if(dividend < 0) {
		flag = -flag;
	}
	if(divisor < 0) {
		flag = -flag;
	}

	if(num1 < num2) {
		return 0;
	}

	if(divisor === 0) {
		return max;
	}
		
	while(num1 >= num2) {
		temp = num2;
		count = 0;

		while(temp <= num1) {
			count++;
			temp = temp << 1;

			if(temp <= 0) {
				break;
			}
		}
		
		if(count === 1) {
			num1 -= num2;
		}
		else {
			num1 -= num2 << (count - 1);
		}

		result += 1 << (count - 1);
	}

	if(result > max && flag > 0) {
		return max;
	}
	if(result > Math.abs(min) && falg < 0) {
		return min;
	}

	return result * flag;
};