// grabs the keys, will give numbers before values 
// better for arrays 

let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (let item in student){
    console.log(item);
    console.log(student[item]);
}

let catArray = ["tabby", "british shorthair", "burmese", "main coon", "rag doll"];

for (let cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

// challenge: capitalize first letter of name and lowercase rest
let name = "sLaYdE";
let capName;

for (let l in name){
    if (l == 0) {
        capName = name[l].toUpperCase();
    } else {
        capName += name[l].toLowerCase();
    }
}

console.log(capName);