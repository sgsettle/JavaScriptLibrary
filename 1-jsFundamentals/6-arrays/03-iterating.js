let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

for (let i = 0; i < food.length; i++){
    // console.log(food[i]);
}

// food.forEach((foodItem, i) => console.log(i, foodItem));

let movies = ["Scott Pilgrim", "Halloween", "The Invisible Man", "Harry Potter and The Sorcerers Stone"];

movies.push("The Hangover");
console.log(movies);
movies.splice(2, 1, "The Conjuring");
console.log(movies);
movies.forEach((movie, i) => console.log(i, movie));
