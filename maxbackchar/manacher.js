/**
 * 求最长回文子串 manacher算法
 */
var str = 'cbcaba';

function longestPalindrome_manacher(s) {
    s = '#' + s.split('').join('#') + '#'; //在间隔中插入'#'字符
    var len = s.length,
    	array = [],
    	longestLen = 0; //回文串最长长度

    for (var i = 1; i < len - 1; i++) {
        var splicStr = '',
            maxRadius = Math.max(i, len - i - 1), //当前轴心最长半径
            curLen = 0;

        //当前轴心最长回文子串
        while (++curLen <= maxRadius) {
            splicStr = s.substring(i - curLen, i + curLen + 1);
            if (!isPalindrome(splicStr)) {
                break;
            }
        }

        //更新最长回文子串
        var curStr = s.substring(i - --curLen, i + ++curLen).split('#').join('');
        longestLen = longestLen < curStr.length?curStr.length:longestLen;
        array[i] =curStr;
    }

    //过滤最长且重复的回文串
    var res = array.filter(function(value,index,arr){
    	if(value.length == longestLen){
    		return arr[index];
    	}
    })

    return res;

    //判断回文子串
    function isPalindrome(str) {
        if (str.split('').reverse().join('') == str) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(longestPalindrome_manacher(str))
