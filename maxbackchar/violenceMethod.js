var str = 'abbcbbasdf';

/**
 * @param  {string}
 * @return {number}
 * 暴力查找，使用两层循环，外两层循环查找所有子串，再判断回文串
 */
function violenceMethod(params) {
    var first = 0,
        array = params.split(''),
        len = params.length,
        maxLenght = 0;
    while (len - 1 - first > 0) {
        for (var last = len; last > first + 1; last--) {
            var str = params.substring(first, last);
            if (str == str.split('').reverse().join('')) {
            	console.log(str)
                maxLenght = Math.max(maxLenght, str.length);
            }
        }
        first++;
    }
    return maxLenght;
}

console.log(violenceMethod(str))

