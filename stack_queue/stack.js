/**
 * Created by liuyanhao on 7/5/16.
 */
function testStack() {
    var colors = new Array();
    console.log("push red white")
    var count = colors.push("red","white");
    count = colors.push("black");
    console.log("count:"+count);

    var iterm = colors.pop();
    console.log("pop:"+count);

    console.log("push blue")
    count = colors.push("blue");
    console.log("count:"+count);
}
function testQueue() {
    var ids = new Array();
    var count = ids.push("123","123");
    console.log("count:"+count);

    count = ids.push("111");
    console.log("count:"+count);

    var item = ids.shift();
    console.log("item:"+item)

}
function test() {
    var numbers = [1,2,3,4,5,4,3,2,1];

    var everyRes = numbers.every(function (item,index,array) {
        return (item>2)
    });
    console.log(everyRes);
}
test()
testQueue();