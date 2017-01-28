var str = 'aaabaaaabba';

/**
 * @param  {string}
 * @return {number}
 * 暴力查找，使用两层循环，外两层循环查找所有子串，再判断回文串
 */
function violenceMethod(params) {
    var len = params.length,
        longest = '',
        maxLenght = 0;
        
    for (var first = 0; len - 1 - first > 0; first++) {
        for (var last = len; last > first + 1; last--) {
            var str = params.substring(first, last);
            if (str == str.split('').reverse().join('')) {
                if (str.length > maxLenght) {
                    maxLenght = str.length;
                    longest = str;
                }
            }
        }
    }

    return longest;
}

console.log('最长回文子串 ' + violenceMethod(str));
