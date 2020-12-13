

// function doctorize(firstName) {
//     return `Dr. ${firstName}`;
// }


// // Anonymous Function
// function (firstName) {
//     return `Dr. ${firstName}`;
// }


// //Function Expression
// const doctorize = function (firstName) {
//     return `Dr. ${firstName}`;
// }

// function inchToCM(inches) {
//     const cm = inches * 2.54;
//     return cm;
// }
const inchToCM = (inches) => inches * 2.54;

const add = (a, b = 3) => a + b;

// function makeABaby (first, last) { 
//     const baby = {
//         name: `${first} ${last}`,
//         age: 1
//     }
//     return baby
// }

const makeABaby = (first, last) => ({name: `${first} ${last}`, age: 1});

// Making my own method! 

const womack = {
    name: "Chris Womack",
    skill: "Full Stack Engineer",
    hireMe: function() {
        console.log("Yep I'm working");
        return "Like buying AAPL Stock in Dec 1980"
    }
}

// Callback refesher
const button = document.querySelector('.click');
button.addEventListener('click', womack.hireMe);


const handledButton = document.querySelector('.clickHandle');
handledButton.addEventListener('click', handleClick);
function handleClick() {
    console.log("Yep, this click has been handled.")
}

