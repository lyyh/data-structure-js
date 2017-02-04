/**
 * 使用yield* 中序遍历完全二叉树
 */
function Tree(left, label, right) {
    this.left = left;
    this.label = label;
    this.right = right;
}

function* inorder(t) {
    if (t) {
        yield * inorder(t.left);
        yield t.label;
        yield * inorder(t.right);
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
var array = []
for (var node of inorder(tree)) {
    array.push(node);
}
console.log(array)

/**
 * 使用递归遍历 中序遍历完全二叉树
 */
function Tree(left, label, right) {
    this.left = left;
    this.label = label;
    this.right = right;
}

function inorder(t) {
    if (t) {
        inorder(t.left);
        resultArray.push(t.label);
        inorder(t.right);
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