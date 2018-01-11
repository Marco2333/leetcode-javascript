/**
 * @param {string} s
 * @return {string}
 */
// 时间复杂度O(n^2)
var longestPalindrome = function(s) {
	if(s == null || s.length == 0) {
		return;
	}
	
	var i, j, k, 
		res = s[0],
		strTemp = '#';
		len = s.length;

	for(i = 0;i < len;i++) {
		strTemp += s[i] + '#';
	}
	
	s = strTemp;
	len = s.length;

	for(i = 0;i < len;i++) {
		j = i - 1;
		k = i + 1;

		while(j >= 0 && k <= len - 1) {
			if(s[j] !== s[k]) {
				strTemp = s.substring(j + 1, k);
				if(res.length < strTemp.length) {
					res = strTemp;
				}
				break;
			}
			else {
				strTemp = s.substring(j, k + 1);
				if(res.length < strTemp.length) {
					res = strTemp;
				}
			}

			j -= 1;
			k += 1;
		}
	}

	return res.replace(/#/g, '');
};