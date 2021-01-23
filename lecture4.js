var num = [1,2,3,4,5,6,7,8,9];
 
num.forEach(function(element, index, arr){
    console.log('Element is: ' + element + " Index: " + index + ' arr: ' + arr);
})

// second example
var number = [1,2,3,4,5,6,7,8,9];

function count(arr,callback) {
    for(var i = 0; i < arr.length; i++){
        callback(arr[i],i,arr);
    }
}
count(number, function(element, i, arr){
    console.log("Element : " + element + "Index: " + i + " Array: " + arr);
});