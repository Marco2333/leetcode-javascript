/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 使用原生正则对象
var isMatch = function(s, p) {
	return RegExp("^" + p + "$", 'g').test(s);
};

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 不使用原生正则对象
var isMatch = function(s, p) {
	var i, j = 0,
		len1 = s.length,
		len2 = p.length;
	
	if(len2 === 0) {
		return len1 === 0;
	}

	if(len2 === 1) {
		if(len1 !== 1) {
			return false;
		}

		if(p === s || p === '.') {
			return true;
		}

		return false;
	}

	// case 1: when the second char of p is not '*'
	if(p[1] !== '*') {
		if(len1 < 1) {
			return false;
		}

		if(p[0] !== s[0] && p[0] !== '.') {
			return false;
		} else {
			return isMatch(s.substring(1), p.substring(1));
		}
	}

	// case 2: when the second char of p is '*', complex case.
	else {
		//case 2.1: a char & '*' can stand for 0 element
		if(isMatch(s, p.substring(2))) {
			return true;
		}

		//case 2.2: a char & '*' can stand for 1 or more preceding element,   
		//so try every sub string  
		var i = 0;
		while(i < len1 && (s[i] === p[0] || p[0] === '.')) {
			if(isMatch(s.substring(i + 1), p.substring(2))) {
				return true;
			}
			i++;
		}

		return false;
	}
};