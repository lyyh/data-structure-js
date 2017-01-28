var it = makeIterator(['a', 'b', 'c']);
console.log([...it])

function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function() {
        	var tmp = nextIndex++;
            return tmp < array.length ? { value: array[tmp], done: false } : { value: undefined, done: true }
        },
        [Symbol.iterator](){return this} //部署Iterator接口(在Symbol.iterator属性上部署遍历器生成方法)
    }
}

