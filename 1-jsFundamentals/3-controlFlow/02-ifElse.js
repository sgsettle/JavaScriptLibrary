let weather = 75;

if (weather < 70){
    console.log("Wear a jacket!");
} else {
    console.log("No jacket necessary.")
}


let name = "Slayde";

if (name == "Slayde") {
    console.log(`Hello, my name is ${name}`);
} else {
    console.log("Hello, is your name " + name);
}

let name = 'zAchARy';

if (name[0] === name[0].toUpperCase()){
    console.log(name);
} else {
    console.log("hey, this isn't written correctly");
}

let name = 'zAchARy';

if (name[0] === name[0].toUpperCase()){
    console.log(name[0]);
} else {
    console.log(name.slice(1).toLowerCase());
}

let name = 'zAchARy';

if (name[0] === name[0].toUpperCase()){
    let isUpperCase = name[0] + name.slice(1).toLowerCase();
    console.log(isUpperCase);
} else {
    let notUpperCase = name[0].toUpperCase() + name.slice(1).toLowerCase();
    console.log(notUpperCase);
}

let age = 21;

if (age < 17) {
    console.log ("Sorry, you're too young to do anything.");
} else if (age < 18) {
    console.log ("You can vote!");
} else if (age >= 21) {
    console.log ("You can drink!");
} else if (age >= 25) {
    console.log ("You can rent a car!")
};


