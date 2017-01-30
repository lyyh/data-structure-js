/**
 * 求最长连续序列的长度
 */

var array = [1, 2, 3, 4,10];

function longestConsecutive(nums) {
    var set = new Set(nums),
        longest = 0;
    for (var num of set) {
        var length = 1;
        for (var i = num - 1; set.has(i); i--) {
            length++;
            set.delete(i);
        }
        for (var j = num + 1; set.has(j); j++) {
            length++;
            set.delete(j);
        }

        longest = Math.max(length,longest);
    }
    return longest;
}

console.log(longestConsecutive(array))