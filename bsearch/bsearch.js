//二分法查找

//递归方式实现(首先必须要先排好序)
var bsearchRec = function(arr, low, high, target) {
    if (low > high) {
        throw new Error('not find ' + target);
    }
    var mid = Math.floor((low + high) / 2);
    if (arr[mid] > target) {
        return argument.callee(arr, low, mid, target);
    } else if (arr[mid] < target) {
        return argument.callee(arr, mid, high, target);
    } else {
        return mid;
    }
}

try {
    var array = [1, 2, 4, 5, 6];
    console.log(bsearchRec(array, 0, 5, 4));
} catch (e) {
    console.log(e);
}


//使用循环实现(因为递归是尾递归)
let bsearchCir = (array, low, high, target) => {
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (array[mid] > target) {
            high = mid - 1;
        } else if (array[mid] < target) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

try {
    var array = [1, 3, 2, 5, 4, 0];
    console.log(bsearchCir(array.sort((a, b) => a - b), 0, 5, 4));
} catch (e) {
    console.log(e);
}


//二分法找上界
let bsearchUpperBound = (array, low, high, target) => {
    if (low > high || target >= array[high]) return -1;
    let mid = (low + high) / 2;
    while (low < high) {
        if (array[mid] > target) {
            high = mid;
        }else{
            mid++;
        }
        mid = (low+high)/2;
    }
}

var set = new Set([2,3,4,5,6])
for([key,value] of set.entries()){
    console.log(key)
}
