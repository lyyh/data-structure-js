/**
 * 递归 后序遍历完全二叉树
 */
function Tree(left, label, right) {
    this.left = left;
    this.label = label;
    this.right = right;
}

function inorder(t) {
    if (t) {
        inorder(t.left);
        inorder(t.right);
        resultArray.push(t.label);
    }
}

function make(array) {
    if (array.length == 1) return new Tree(null, array[0], null);
    else return new Tree(make(array[0]), array[1], make(array[2]));
}

var tree = make([
    [
        ['a'], 'b', ['c']
    ], 'd', [
        ['e'], 'f', ['g']
    ]
]);

var resultArray = [];
inorder(tree);
console.log(resultArray)

/**
 * 使用yield* 实现后序遍历完全二叉树
 */
function Tree(left, label, right) {
    this.left = left;
    this.label = label;
    this.right = right;
}

function* inorder(t) {
    if (t) {
        yield * inorder(t.left);
        yield * inorder(t.right);
        yield t.label;
    }
}

function make(array) {
    if (array.length == 1) return new Tree(null, array[0], null);
    else return new Tree(make(array[0]), array[1], make(array[2]));
}

var tree = make([
    [
        ['a'], 'b', ['c']
    ], 'd', [
        ['e'], 'f', ['g']
    ]
]);

var array = [];
for (let node of inorder(tree)) {
    array.push(node);
}
console.log(array)


/**
 * 非递归算法实现后序遍历
 */
function Tree(left, label, right) {
    this.left = left;
    this.label = label;
    this.right = right;
}

function inorder(t) {
    if (t) {
        var stack = [],
            p = null;
        stack.push(t);
        p = t;
        array.push(p.label);

        while (stack.length) {
        	//遍历完右节点
            while (p.right) {
                p = p.right;
                stack.push(p);
                array.push(p.label);
            }
            p = stack.pop();
            //下一个左节点
            if (p.left) {
                p = p.left;
                stack.push(p);
                array.push(p.label);
            }
        }
        //颠倒数组中元素的顺序
        array = array.reverse();
    }
}

function make(array) {
    if (array.length == 1) return new Tree(null, array[0], null);
    else return new Tree(make(array[0]), array[1], make(array[2]));
}

var tree = make([
    [
        ['a'], 'b', ['c']
    ], 'd', [
        ['e'], 'f', ['g']
    ]
]);

var array = [];
inorder(tree)
console.log(array)
