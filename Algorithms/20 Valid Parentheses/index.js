/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	var i, char,
		stack = [],
		len = s.length,
		map = {')': '(', ']': '[', '}': '{'};

	for(i = 0;i < len;i++) {
		char = s[i];

		if(char === '(' || char === '{' || char === '[') {
			stack.push(char);
		}
		else {
			if(stack.pop() !== map[char]) {
				return false;
			}
		}
	}

	if(stack.length !== 0) {
		return false;
	}
	
	return true;
};

console.log(isValid("()"));