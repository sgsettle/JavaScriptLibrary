//  variable  fat arrow
    let hi = () => {
       console.log('hi'); 
    }

    // arrow functions were introduced in ES6. The are basically a more conscise way to write functions expressions - NOT declarations
    // this means arrow functions do not get hoisted

    // BLOCK BODY
    let hi = () => {
        console.log('hi');
        // lots of code goes here

        // return goes here
    }
    // NOTE: block body arrow functions must have a return (if you want to get information out of the function) in body of a function 
    // return must be inside curly braces

    // CONCISE BODY
    let hi = () => console.log('hi');
    // NOTE: concise body arrow functions return by default; they automatically give back information

    let greeting = (firstName, lastName) => {
        console.log(`Greetings, ${firstName} ${lastName}`);
    }
// NOTE: when you have no or multiple parameters, you must include parenthesis; however when you have single parameter the parenthesis are optional
    greeting('Jerome', 'CoolGuy')