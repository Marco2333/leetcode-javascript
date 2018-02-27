/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    var index = s.lastIndexOf(' ');
    return s.substring(index + 1).length;
};