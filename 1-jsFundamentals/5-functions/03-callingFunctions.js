function hi() {
    console.log('HI');
}

hi();
console.log(hi);


function numbers(){
    for (let i = 0; i <= 10; i++){
        console.log(i);
    }
}

numbers();


let arr = ['This', 'is', 'really', 'cool'];

function cool(){
    for (let letters of arr){
        console.log(letters);
    }
}

cool();