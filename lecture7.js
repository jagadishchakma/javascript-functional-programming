var array = [1,2,3,4,5,6,7];

var slice = array.slice(2,5);
slice;

// real example with for loop
var newArr = [];
for(var i = 2; i < 6 ; i++){
    newArr.push(array[i]);
}

newArr