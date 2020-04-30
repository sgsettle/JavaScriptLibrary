let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

for(let foodItem of food){
    console.log(foodItem);
}

food.push("Pizza");

food.splice(1, "Tacos");
console.log(food);

let removedFood = food.pop();
console.log(removedFood);

food.unshift("Burritos");
console.log(food);