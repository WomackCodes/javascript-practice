console.log("it works");

const name = "Christoper";
const middle = "P";
const last = "Womack";

const sentenceWithEscape = "I \"enjoy\" watching Frozen for the 347th time";

const multiLineSentence = `Into the UNKNOOOOOOWN

Into the unknOOOOOOOWWWWWWN

Into the unknOOOOOOOwwwwOOOOwwwwww`;

const greeting = `Hello world! My name is ${name} ${middle} ${last}.  I'll be the next Elon Musk soon... but I have roughly \$${1-1} billion dollars comparitively so, got some cathcing up to do.`

const a = 10;
const b = 5;

let add = function() {
    return a + b;
}

const bones = 206;
const boneNecklace = 32;
let howManyBoneNecklaces = Math.floor(bones / boneNecklace);
const bonesLeft = bones % boneNecklace;

console.log(`There will be ${howManyBoneNecklaces} bone necklaces made from a human body, with ${bonesLeft} bones left over!`);