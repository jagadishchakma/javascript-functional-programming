var name = "Jagadish Chakma";
function sayName() {
    return "Hello " + name;
}

console.dir(sayName());

// two example

function greetings(msg) {
    return function(name) {
        return "Hello " + name + msg
    }
}

var one = greetings("Goood Morning");
var two = one("Jagadish Chakma")
console.log(two)