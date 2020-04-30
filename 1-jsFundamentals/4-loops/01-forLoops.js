let i = 7;

//    (1)     (2)   (3)
for (i = 0; i < 10; i++){
    console.log(i);
}

console.log(i)

/*
1- initial expression - run once before the loop starts
2- condition - loop runs until the condition evaluates to false
3 - increment expression - run once after each iteration of the loop 
*/

// ++ is shorthand for increasing by 1

// - - is shorthand for decreasing by 1


for (x = 0; x<=20; x+= 2){
    console.log(x);
}

console.log(x);

// challenge: start at 10 and count down to 0 by 1
for (y = 10; y >= 0; y--){
    console.log(y);
}

// challenge: count from 0, going down by 2's to -24
 for (x = 0; x >= -24; x -= 2){
     console.log(x);
 }
 
//  challenge: go through name and display each letter individually
 let name = "Slayde";

 for (i = 0; i < name.length; i++){
     console.log(name[i]);
 }

 let sum = 0;

 for (let z = 1; z <= 50; z++){
     sum += z 
 }

 console.log(sum);

    
