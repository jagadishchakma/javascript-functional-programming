function host() {
    console.log('I am host function..');
    return function(){
        console.log('I am a child function..');
    }
}

 host()();
 
// two example
function greetings(msg){
     function  hello(name) {
        console.log('Hello ' + name + msg);
    }
    return hello;
}

var one = greetings('Good morning.')('Jagadish chakma, ');