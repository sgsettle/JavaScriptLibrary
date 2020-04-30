let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let colors = ["blue", "green", "yellow", "red", "orange", "purple"];
console.log(colors.length);

console.log(colors.toString());

console.log(typeof colors);
arrays are considered objects in javascript

let colors = ["blue", "green", "yellow", "red", "orange", "purple"];

console.log(colors instanceof Array);
colors.reverse();
colors.forEach(color => console.log(color));

let colors = ["blue", "green", "yellow", "red", "orange", "purple"];

let correctSpelling colors.forEach(color => {
    let newColor = color[0].toUpperCase() + color.slice(1).toLowerCase()
    console.log(newColor)
})

colors.forEach(color => console.log(color[0].toUpperCase() + color.slice(1).toLowerCase()));