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

//冒泡排序
function bubbleSort(element) {
    console.time();
    var len = element.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (element[j] > element[j + 1]) {
                var temp = element[j];
                element[j] = element[j + 1];
                element[j + 1] = temp;
            }
        }
    }
    console.log(element); 
    console.log('冒泡排序花费时间:')
    console.timeEnd();
}

//插入排序，将tmp作为暂存单元或者监视哨兵
function insertSort(element) {
    console.time()
    var len = element.length;
    for (var i = 1; i < len; i++) {
        var tmp = element[i];
        for (var j = i - 1; tmp < element[j]; j--){
            element[j + 1] = element[j];
        }
        element[j + 1] = tmp;
    }
    console.log(element);
    console.log('插入排序花费时间:')
    console.timeEnd();
}

//希尔排序
function shellSort(element) {
    console.time();
    var n = element.length;
    var tmp;
    for (var d = n / 2; d >= 1; d = d / 2) {
        d = parseInt(d);
        for (var i = d; i < n; i++) {
            tmp = element[i];
            for (var j = i - d; j >= 0 && tmp < element[j]; j = j - d){
                element[j + d] = element[j];
            }
            element[j + d] = tmp;
        }
    }
    console.log(element);
    console.log('希尔排序花费时间:')
    console.timeEnd();
}

//起泡排序
function blisterSort(element) {
    console.time();
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
    console.log('起泡排序花费时间:')
    console.timeEnd();
}

//简单选择排序
function selectSort(element) {
    console.time();
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
    console.log('选择排序花费时间:')
    console.timeEnd();
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
}

//快速排序
function quickSortHandle(arr) {
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSortHandle(left).concat([pivot], quickSortHandle(right));
};

function quickSort(element){
    console.time();
    console.log(quickSortHandle(element));
    console.log('快速排序花费时间:')
    console.timeEnd();
}