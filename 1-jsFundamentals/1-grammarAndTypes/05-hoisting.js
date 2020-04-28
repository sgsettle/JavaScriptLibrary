let name = "Slayde";
console.log(name);

b();

function b(){
    console.log("I have been hoisted");
}

/* Variables and functions that are declared with the "var" and "function"
keywords are "hoisted" into a leger for JavaScript's interpreter to use.
How it creates the "leger" is, it reads the file character by character
collecting the "var" variables and "function" definitions, and after the
first pass reaches the end of the file, it then finally runs the actual
code written in the file. */