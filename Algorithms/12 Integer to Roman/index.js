/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
	var i, j, res = '',
		n1 = [1000, 100, 10, 1],
		r1 = ['M', 'C', 'X', 'I'],
		r2 = ['', 'D', 'L', 'V'];

	for(i = 0;i < 4;i++) {
		var temp = ~~(num / n1[i]);

		if(temp === 9) {
			res += r1[i] + r1[i - 1];
		}
		else if(temp >= 5) {
			res += r2[i];

			for(j = 0;j < temp - 5;j++) {
				res += r1[i];
			}
		}
		else if(temp === 4) {
			res += r1[i] + r2[i];
		}
		else {
			for(j = 0;j < temp;j++) {
				res += r1[i];
			}
		}

		num = num % n1[i];
	}

	return res;
};