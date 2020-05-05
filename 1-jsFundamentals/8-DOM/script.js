let listTitle = document.getElementById('listTitle');
console.log(listTitle);

let listItem = document.querySelector('ul li');
console.log(listItem);

listTitle.style.textAlign = 'center';
// centered title without a single line of CSS

listItem.style.color = 'red';

let grocery = document.getElementsByClassName('groceryItem');
console.log(grocery);
console.log(grocery[2]);
console.log(grocery.item(2));

let listItems = document.getElementsByTagName('li');
console.log(listItems);
// HTML element

// let unorderedListItems = document.querySelectorAll('ul li');
// console.log(unorderedListItems);
// Node element

console.log(document.body.childNodes);
console.log(document.body.children);

let listDiv = document.getElementById("list");

console.log(listDiv.firstChild);
console.log(listDiv.firstChild.nextSibling.nextSibling);

let todoTitle = document.getElementById('listInput');
console.log(todoTitle);



document.getElementsByClassName('listItem')[4].innerText = "Visit Grindelwald";
// changes list item to new text

document.getElementsByClassName('groceryItem')[0].innerText = "Moondew Drops";

document.getElementById("clickMe").addEventListener("click", event => {
    // event => is a callback function
    event.target.style.backgroundColor = "lightblue";
});

document.getElementById("listInput").addEventListener("keyup", event => {
    console.log(event.target.value);
});

let newGroceryItem = document.createElement('li');
console.log(newGroceryItem);

let groceryList = document.getElementById('groceryList');

groceryList.appendChild(newGroceryItem);

newGroceryItem.innerText = 'Ginger Root';

let unorderedListItems = document.querySelectorAll('ul li');
console.log(unorderedListItems);

for(tag of unorderedListItems) {
    tag.style.textDecoration = "underline";
    tag.style.fontSize = "20px";
}