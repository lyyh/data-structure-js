/**
 * Created by liuyanhao on 7/5/16.
 */
/**
 * 链表节点
 * @param data
 */
function listNode(data) {
    this.data = data;
    this.next = null;
}
/**
 * 单链表
 */
function linkedList() {
    this.head = null;
    this.tail = null;
}
/**
 * 创建单链表
 */
linkedList.prototype.create = function (element) {
    var p = null, n = null, head = null, tail = null;
    if (this.head != null) {
        console.log("单链表已经创建!");
        return;
    }
    //将数组element放入链表中
    element.forEach(function (item, index, element) {
        if (index == 0) {
            p = new listNode(item);
            head = p;
        } else {
            n = new listNode(item);
            p.next = n;
            p = n
        }
        tail = p;
    });
    this.head = head;
    this.tail = tail;
}
/**
 * 显示单链表
 */
linkedList.prototype.show = function () {
    var res = [], p = this.head;
    // console.log("单链表结构:");
    while (p != null) {
        res[res.length] = p.data;
        p = p.next;
    }
    console.log(res.toString());
}
/**
 * 单链表查找
 * @param element
 * @returns {null}
 */
linkedList.prototype.find = function (element) {
    var p = this.head;
    while (p != null && p.data != element) {
        p = p.next;
    }
    return p;
}
/**
 * 在某节点之后插入新的节点
 * @param element
 * @param node
 */
linkedList.prototype.insertAfterNode = function (element, node) {
    if (node == null)return;
    var n = new listNode(element);
    n.next = node.next;
    node.next = n;
    //设置单链表尾节点
    if (node == this.tail) {
        this.tail = n;
    }
}

/**
 * 查找节点,并在之后插入新的节点
 * @param element
 * @param node
 */
linkedList.prototype.insertAfter = function (element, data) {
    this.insertAfterNode(element, this.find(data));
}
/**
 * 返回上一节点和当前节点
 * @param element
 * @returns {*[]}
 */
linkedList.prototype.findPrevious = function (element) {
    var pre = null;
    var cur = this.head;
    while (cur != null && cur.data != element) {
        pre = cur;
        cur = cur.next;
    }
    return [pre, cur];
}
/**
 * 添加节点到单链表的头部
 * @param element
 */
linkedList.prototype.addFirst = function (element) {
    var h = new listNode(element);
    h.next = this.head;
    if (this.head == null) {
        this.tail = h;
    }
    this.head = h;
}
/**
 * 在指定节点前插入新节点
 * @param element
 */
linkedList.prototype.insertBefore = function (element, data) {
    if (this.head == null)return;
    if (this.head.data = data) {
        this.addFirst(element);
        return;
    }
    var p = this.findPrevious(element);
    var prev = p[0];
    var cur = p[1];
    if (cur != null) {
        var n = new listNode(element);
        prev.next = n;
        n.next = cur;
    }
}
/**
 * 删除指定节点
 * @param element
 */
linkedList.prototype.delete = function (element) {
    if (this.head.data = element) {
        this.head = this.head.next;
    }
    var res = this.findPrevious(element);
    var prev = res[0];
    var cur = res[1];
    if (prev != null && cur != null) {
        prev.next = cur.next;
    }
}