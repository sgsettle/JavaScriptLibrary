const baseURL = "https://api.spacexdata.com/v2/rockets";

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('table');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(e) {
    e.preventDefault();
    
    fetch(baseURL)
        .then(data => data.json())
        .then(json => displayRockets(json))
        // wait until we have the data then call a function to display data
        .catch(err => console.log(err));
}

// async programming: when we write code in an order but want it to come back in a different order
// async lets us move on in code and come back after doing what its doing
// fetch: built in language feature that makes async more compatible
// promise: callback with 2 parameters
// more callback functions make promises easier to read
// Ask Donovan if he can post definitions
// anytime you have a "fetch" command, you need to have .then(data => data.json()) as the next line

function displayRockets(rockets){
    console.log("Results:", rockets);
    let eachRocket = rockets.forEach(r => {
        console.log(r);

        let rocket = document.createElement('tr');
        let rocketName = document.createElement('td');
        let rocketCost = document.createElement('td');

        rocketName.innerText = r.name;
        rocketCost.innerText = r.cost_per_launch;

        spaceShips.appendChild(rocket);
        rocket.appendChild(rocketName);
        rocket.appendChild(rocketCost);
    })
}