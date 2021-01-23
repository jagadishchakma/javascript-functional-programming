var arr = [4,9,23,56,35443,2,6,1,8,4,6,8,4,8];
console.log(arr.sort());
console.log(arr.sort(function(a,b){
    return a-b;
}));
console.log(arr.sort(function(a,b){
    return b-a;
}));
// two example

var arr = [
    {name: 'Jagadish', age : 23},
    {name: 'Surjo', age : 24},
    {name: 'Anupom', age : 12},
    {name: 'Indrro', age : 25},
    {name: 'Nikkon', age : 22},
];

console.log(arr.sort(function(a,b){
    return a.age - b.age;
}));

console.log(arr.sort(function(a,b){
    return b.age - a.age;
}));