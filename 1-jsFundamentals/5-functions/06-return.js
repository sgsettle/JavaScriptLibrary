let hi = () => {
    // 1
    return 'hi';
}
//     2       3
let greeting = hi();

/*
1- the keyword that brings our data out of our function
2- a new variable to hold the value of the return
3- when called, the function becomes the value of the return
*/

console.log(greeting);

function name(firstName) {
    return `Hello, ${firstName}`;
}

let greetedName = name('Leia Organa')

console.log(greetedName);

function capitalizeName(name){
    return name[0].toUpperCase() + name.slice(1).toLowerCase()
}

let correctName = capitalizeName('sLaYdE');

console.log(correctName);

function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}

let width = 5;
let length = 5;

let newArea = areaOfRectangle(length, width);
// let newArea = 25;
console.log(newArea)

function gratuity(totalBill) {
    let bill = cost + tip;
    return bill;
}

let cost = 45;
let tip = 10;

console.log(tip);

function tip(bill, twentyPercent) {
    let tip = bill * twentyPercent
    return tip;
}

let myBill = 100;
let myTax = .2;
let totalTip = tip(myBill, myTax) + "%";
console.log(totalTip);