var element = [1, 3, 2, 5, 4, 0];
var n = element.length;
//自带排序方法
function compare(value1, value2) {
    return value1 - value2;
}
function ownSort(element) {
    element.sort(compare);
    console.log(element)
}
// ownSort();

// 冒泡排序
function bubbleSort(element) {
    var tmp;
    for (var i = 0; i < element.length - 1; i++) {
        for (var j = 0; j < element.length - i - 1; j++) {
            if (element[j] > element[j + 1]) {
                tmp = element[j];
                element[j] = element[j + 1];
                element[j + 1] = tmp;
            }
        }
    }
    console.log(element);
}

//插入排序，将tmp作为暂存单元或者监视哨兵
function insertSort(element) {
    var tmp;
    for (var i = 1; i < element.length; i++) {
        tmp = element[i];
        for (var j = i - 1; tmp < element[j]; j--)
            element[j + 1] = element[j];
        element[j + 1] = tmp;
    }
    console.log(element);
}

//希尔排序
function shellSort(element) {
    var n = element.length;
    var tmp;
    for (var d = n / 2; d >= 1; d = d / 2) {
        d = parseInt(d);
        for (var i = d; i < n; i++) {
            tmp = element[i];
            for (var j = i - d; j >= 0 && tmp < element[j]; j = j - d)
                element[j + d] = element[j];
            element[j + d] = tmp;
        }
    }
    console.log(element);
}

//起泡排序
function blisterSort(element) {
    var bound, tmp, exchange = element.length;
    while (exchange != 0) {
        bound = exchange;
        exchange = 0;
        for (var i = 0; i < bound; i++) {
            if (element[i] > element[i + 1]) {
                tmp = element[i];
                element[i] = element[i + 1];
                element[i + 1] = tmp;
                exchange = i;
            }
        }
    }
    console.log(element)
}

//简单选择排序
function selectSort(element) {
    var index;
    for (var i = 0; i < n; i++) {
        index = i;
        for (var j = i + 1; j < n; j++) {
            if (element[index] > element[j]) {
                index = j;
            }
        }
        if (index != i) {
            var tmp = element[i];
            element[i] = element[index];
            element[index] = tmp;
        }
    }
    console.log(element)
}
//快速排序(划分)
function partition(element, first, end) {
    var i = first, j = end;
    var tmp;
    while (i < j) {
        while (i < j && element[i] <= element[j])j--;
        if (i < j) {
            tmp = element[i];
            element[i] = element[j];
            element[j] = tmp;
            i++;
        }
        while (i < j && element[i] <= element[j])i++;
        if (i < j) {
            tmp = element[i];
            element[i] = element[j];
            element[j] = tmp;
            j--;
        }
    }
    return i;
}
//快速排序
function quickSort(element,first,end) {
    var pivot;
    if(first<end){
        pivot = partition(element,first,end);
        quickSort(element,pivot + 1,end);
        quickSort(element,first,pivot -1);
    }
    console.log(element)
}
