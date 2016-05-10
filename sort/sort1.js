/**
 * Created by liuyanhao on 7/5/16.
 */
var element = [5, 2, 1, 4, 0];
var n = element.length;
//冒泡排序
function bubbleSort(element, n) {
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (element[j] > element[j + 1]) {
                var temp = element[j];
                element[j] = element[j + 1];
                element[j + 1] = temp;
            }
        }
    }
    console.log(element);

}
//起泡排序
function blisterSort(element) {
    var bound;
    exchange = n;
    while (exchange != 0) {
        bound = exchange;
        exchange = 0;
        for (var i = 0; i < bound - 1; i++) {
            if (element[i] > element[i + 1]) {
                var tmp = element[i];
                element[i] = element[i + 1];
                element[i + 1] = tmp;
            }
        }
        exchange = i;
    }
    console.log(element);
}
//插入排序
function insertSort(element) {
    var tmp;
    for (var i = 1; i < n; i++) {
        tmp = element[i]
        for (var j = i - 1; j >= 0 && tmp < element[j]; j--) {
            element[j + 1] = element[j];
        }
        element[j + 1] = tmp;
    }
    console.log(element);
}
//希尔排序
function shellSort(element) {
    var tmp;
    for (var d = n / 2; d >= 1; d = d / 2) {
        d = parseInt(d);
        for (var i = d; i < n; i++) {
            tmp = element[i];
            for (var j = i - d; j >= 0 && tmp < element[j]; j = j - d) {
                element[j + d] = element[j];
            }
            element[j + d] = tmp;
        }
    }
    console.log(element);
}
// shellSort(element)