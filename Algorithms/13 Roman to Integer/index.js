/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	var romanDict = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000
	};

	var sum = 0, max = 'I', 
		i = s.length - 1;
	
	for(;i >= 0;i--) {
		if(romanDict[s[i]] >= romanDict[max]) {
			max = s[i];
			sum += romanDict[s[i]];
		}
		else {
			sum -= romanDict[s[i]];
		}
	}

	return sum;
};