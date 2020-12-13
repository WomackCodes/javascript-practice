function calculateBill (billAmount, taxRate) {
    console.log("I'm running the bill!");
    const total = billAmount * (1 + taxRate);
    return total;
}

const myTotal = (`Your total is...${calculateBill(100, 0.08)}`);
const myTotal2 = (`Your total is...${calculateBill(200, 0.08)}`);

console.log(myTotal, myTotal2);


function doctorize(name) {
    return `Dr. ${name}`;
}

function yell(name) {
    return `HEY ${name.toUpperCase()}`;
}

