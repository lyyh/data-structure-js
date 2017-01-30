var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});


var bool = -1; // 初始状态为负数，表示还没开始读取,洗牌次数
var ans = 0;
var sequence;
var result = [];
console.log('请输入洗牌的次数:');
rl.on('line', function(line) {
    if (bool < 0) {
        bool = parseInt(line.trim());
        console.log('请输入纸牌序列，用空格分割');
    } else {
        sequence = line.split(' ').map(function(index) {
            return parseInt(index)
        });
        ans = sequence.length;
        while (bool != 0) {
            if (result.length > 0) {
                result = [];
            }
            var LeftList = sequence.slice(0, ans / 2).reverse();
            var RightList = sequence.slice(ans / 2, ans).reverse();
            for (var i = 0; i < LeftList.length; i++) {
                result.push(RightList[i]);
                result.push(LeftList[i]);
            }
            result = result.reverse();
            bool--;
            sequence = result.slice(0);

            if (bool == 0) {
                console.log('洗牌后:');
                console.log(result.join(' '));
            }
        }
    }
    if (bool == 0) {
        bool = -1;
        ans = 0;
    }
})
