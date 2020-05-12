// async function myFn(){
//     await
// }

// // cannot use await if you don't have async

// const myFn = async () => {

// }

async function myFn(){
    const response = await fetch("https://random.dog/woof.json");
    const json = await response.json();
    console.log(json);
}

myFn()
    // .then(console.log)
    // .catch(console.log)

// myFn().then(console.log)


// fetch('https://random.dog/woof.json')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.log(error))

    // fetch is a browser function
    // in order to use fetch you need an HTML document