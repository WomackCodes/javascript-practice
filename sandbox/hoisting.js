sayHi();
delayedHi();

function sayHi(){
    console.log("where my hoist at?!");
    console.log(add(10, 2));
}

function add(a, b) {
    return a + b;
}

const delayedHi = function () {
    console.log("I don't think i'll run");
}