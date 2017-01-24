//二分法查找

//递归方式实现(首先必须要先排好序)
var bsearchRec = function(arr, low, high, target) {
    if (low > high) {
        throw new Error('not find ' + target);
    }
    var mid = Math.floor((low + high) / 2);
    if(arr[mid]>target){
    	return bsearchRec(arr,low,mid,target);
    }else if(arr[mid]<target){
    	return bsearchRec(arr,mid,high,target);
    }else{
    	return mid;
    }
}

try{
	var array = [1,2,4,5,6];
	console.log(bsearchRec(array,0,5,4));
}catch(e){
	console.log(e);
}