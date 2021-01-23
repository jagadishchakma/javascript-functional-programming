var arr = [1,2,3,4,5];

var result = arr.map(function(element,index) {
   return element + 2;
});
result;

// exampl two
function loop(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i]+2);
    }
    return newArr;
}

var result = loop(arr);
result;

//example three

function myMap(arr,callback){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(callback(arr[i]));
    }
    return newArr;
}

var result = myMap(arr, function(element){
    return element * 2;
});
result