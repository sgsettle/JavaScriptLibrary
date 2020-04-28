// shortcut for writing if and if else statements, but not else if

let num = 6;

(num > 0) ? console.log("yes") : console.log("no");

if (num > 0) {
    console.log("yes");
} else {
    console.log("no");
}

(num == 0) ? console.log("hello") : (num > 0) ? console.log("hi") : console.log("goodbye");

if (num == 0) {
    console.log("hello");
} else if (num > 0) {
    console.log("hi");
} else {
    console.log("goodbye");
}