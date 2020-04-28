// Boolean
let on = true;
console.log(typeof on);

let off = false;


// Null - null is an empty value. Think of it as an empty container: nothing is in there, but it still exists as a space to fill

let empty = null;
console.log(empty);

// Undefined - default value when a variable is not initialized

let undef = undefined;
let correct;
console.log(undef, correct);

// Numbers

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let aNumber = Number("123");
console.log(typeof aNumber);

// Strings

let stringOne = 'single quotes';
let stringTwo = "double quotes";
let stringThree = `backticks`;

console.log(stringOne, stringTwo, stringThree);

let first = 1050 + 100;
let second = "1050" + "100";
console.log(typeof first);
console.log(typeof second);

let third = 1050 + "100";
console.log(typeof third);

// Objects - objects are used to store many values instead of a singular value

let frodo = {
    race: "hobbit",
    rings: 1,
    cloak: true
}
console.log(frodo);
console.log(typeof frodo);

// Arrays - arrays are containers that hold lists of items
/*

    let list =  [   "item1",    "item2",    "item3"];
         (1)   (2)        (3)

         1 - name of array
         2 - arrays are denoted by square brackets
         3 - each value is separated by a comma

         */
//               (1),   (2), (3)
let burritos = ["large", 4, true];
console.log(burritos);
console.log(typeof burritos);

let firstName = "Slayde";
let lastName = "Settle";
let houseNumber = 707
let aptNumber = "Unit 407"
let street = "E. North St."
let city = "Indianapolis, "
let state = "Indiana"
let zipcode = 46202
console.log( `${firstName} ${lastName}, ${houseNumber} ${street}, ${aptNumber}, ${city}, ${state} ${zipcode}`);

let myName = "Slayde";
console.log(myName.length);

console.log(myName.toUpperCase());

let home = "My home is indianapolis";
console.log(home.includes("indianapolis"));

let sent = 'This sentence will be split into individual parts ';
console.log(sent.split(" "));


