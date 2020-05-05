/*
Challenge 5/4/2020
Pig Latin:
Create a function that takes in strings
In the function, translate a phrase into pig latin and print both the original and pig latin version to the console.
If able to do so, return the value into another variable and print that variable
What is Pig Latin?
    * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
    * If the word begins with a vowel, simply add an 'ay' at the end of the word
*/
// Pig -> IgPay (testing one word, testing the consonat case)
// Latin -> AtinLay (tests one word, testing the vowel case)
// Pig Latin -> IgPay AtinLay (tests a sentence with both consonants and vowels)


let firstTest = "Hello"; // expecting: "Ellohay"

const vowels = ["a", "e", "i", "o", "u"];

const pigLatin = (toTranslate) => {
    let translated = " ";
    let wordsList = toTranslate.split(" ")

    wordsList.forEach(item => {
        // callback given to a function to callback another item in it's code
        // procedure defined below
        let translatedWord;
        item = item.toLowerCase();
    
        if (vowels.includes(item[0])){
            translatedWord = item + "ay";
        } else {
            for (let i = 0; i < item.length; i++){
                if (vowels.includes(item[i])){
                    let chunk = item.slice(0, i);
                    translatedWord = item.slice(i) + chunk + "ay";
                    i = item.length;
                }
            }
        }

        translated += translatedWord + " ";
    });

    // check whether the first character is a vowel or consonant
        // Vowel -> 
            // add "ay" to end of the word
            // -fin (meaning done)
        // Consonant ->
            // remove from the first character to the first vowel (iteration)
            // take those letters, in order, and place them at the end of word
            // ad "ay" to the end of the word
            // -fin
    // return the translated word
    // let translated;
    // toTranslate = toTranslate.toLowerCase();

    // if (vowels.includes(toTranslate[0])){
    //     translated = toTranslate + "ay";
    // } else {
    //     for (let i = 0; i < toTranslate.length; i++){
    //         if (vowels.includes(toTranslate[i])){
    //             let chunk = toTranslate.slice(0, i);
    //             translated = toTranslate.slice(i) + chunk + "ay";
    //             i = toTranslate.length;
    //         }
    //     }
        // while (!vowels.includes(toTranslate[0])){
        //     let first = toTranslate[0];
        //     toTranslate = toTranslate.substring(1) + first;
        //     // substring - grabs substring from a position to the very end
        //     // remove first character, return the rest of the subtring, and move first character to very end
        // }
        // translated = toTranslate + "ay";
    
    console.log(translated);
    return translated;
};

pigLatin("I think functions are cool");