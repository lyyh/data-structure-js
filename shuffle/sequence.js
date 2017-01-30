var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var bool = -1;
var cur_line = 0;
var n;

rl.on('line', function(line) {
    if (bool < 0) {
        bool = parseInt(line.trim());
    } else {

        n = parseInt(line.trim());
        cur_line++;
        var arr = [];

        for (var i = n; i > 0; i--) {
            console.log(i)
            arr.unshift(i);
            console.log(arr)
            var x = arr.pop();
            console.log(arr)
            arr.unshift(x);
        }

        console.log(arr.join(' '));
    }

    if (bool == cur_line) {
        bool = -1;
        cur_line = 0;
    }

});
