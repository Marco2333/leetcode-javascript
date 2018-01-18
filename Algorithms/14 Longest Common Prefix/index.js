/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if(strs == null || strs.length == 0) {
		return "";
	}

	var i, j, flag, strTemp,
		len = strs.length,
		strLen = strs[0].length;
	
	for(i = strLen;i >= 0;i--) {
		flag = true;
		strTemp = strs[0].substring(0, i);
		
		for(j = 1;j < len;j++) {
			if(i > strs[j].length || strs[j].substring(0, i) !== strTemp) {
				flag = false;
				break;
			}
		}

		if(flag) {
			return strTemp;
		}
	}

	return "";
};