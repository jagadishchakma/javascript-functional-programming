var number = [1,33,56,3,78,34,7,9,0,6];

var prime = [];

for(var i = 0; i < number.length; i++){
    if(number[i] % 2 == 1){
        prime.push(number[i]);
    }
}

console.log(prime);

// example 3

var prime = number.filter(function(element){
    return element % 2 == 1;
});
console.log(prime)

// example 4

function filter(arr, callback){
    var newarr = [];

    for(var i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

var result = filter(number, function(element){
    return element % 2 == 1;
});
console.log(result);