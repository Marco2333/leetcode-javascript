/**
 * @param {string}
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	var dict = {},
		sentry = 0,
		maxLength = 0,
		currentLength = 0;

	for(var i = 0, len = s.length;i < len;i++) {
		if(dict[s[i]] != null && dict[s[i]] >= sentry) {
			if(maxLength < currentLength) {
				maxLength = currentLength;
			}
			
			currentLength = i - dict[s[i]];
			
			sentry = dict[s[i]] + 1;
			dict[s[i]] = i;
		}
		else {
			currentLength += 1;
			dict[s[i]] = i;
		}
	}

	if(currentLength > maxLength) {
		maxLength = currentLength;
	}

	return maxLength;
};