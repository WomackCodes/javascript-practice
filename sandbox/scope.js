const age = 100

function go() {
    const age = 200;
    const hair = "blonde";
    console.log(age);
    console.log(hair);
}

go();


function imTired(howTired) {
    if (howTired > 5) {
        console.log("Dad status");
    } else {
        console.log("You got some juice left, get on it!");
    }
    console.log(howTired);
    return howTired;
}

for(let i=0; i < 10; i++) {
    console.log(i);
}

const dog = `Tucker`;

function logDog() {
    console.log(dog);
}
function goDog() {
    const dog = `Sunny`;
    logDog();
}

goDog();