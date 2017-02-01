/**
 * 真实栈、虚拟栈
 * 实现push、top、pop、getMin方法
 */

function minStack(arr) {
    var minStack = [],
        s = [];

    //push进辅助栈
    function push(x) {
        s.push(x);
        var minValue = minStack.length == 0 ? x : Math.min(x, top())
        minStack.push(minValue);
    }

    //栈顶
    function top() {
        return minStack[minStack.length - 1];
    }

    //pop
    function pop(element) {
        s.pop();
        minStack.pop();
    }

    //得到最小值
    function getMin() {
        return Math.min(...minStack)
    }
    for (var i = 0; i < arr.length; i++) {
        push(arr[i]);
    }

    return minStack;
}

var array = [3, 1, 10, 4, 5];
minStack(array);
