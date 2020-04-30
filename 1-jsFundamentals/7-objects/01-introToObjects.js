// objects used to store key values
//  { } denotes an object
//  : assigns values in objects
// , seperate values in objects
// objects can store multiple data types
// can add more {} inside an object to create a new object
// can nest an array in an object and nest another object inside that array
// java reads the properties in an object as strings
// " " is a string

let netflix = {
    id: 1, 
    name: "The Office",
    seriesInfo: {
        seasons: 9,
        seasonInfo: [
            {
                season: 1,
                episodes: 6,
                episodeInfo: [
                    {
                        episode: 1, 
                        episodeName: "Pilot",
                    },
                    {
                        episode: 2,
                        episodeName: "Diversity Day"
                    }
                ]
            },
            {
                season: 2,
                episodes: 22,
                episodeInfo: [
                    {
                        episode: 1,
                        episodeName: "The Dundies"
                    }
                ]
            }
        ],
    },
};

console.log("Whole Object:", netflix);
console.log("Just Series Info", netflix.seriesInfo);
console.log("Just Season Info", netflix.seriesInfo.seasonInfo[0].episodeInfo[0]);
console.log("Season 2, Episode 1", netflix.seriesInfo.seasonInfo[1].episodeInfo[0].episodeName);

let spaceJam = {
    toonSquad: {
        human: "Michael Jordan",
        rabbit1: "Bugs Bunny",
        rabbit2: "Lola Bunny",
        duck: "Daffy Duck",
        tDevil: "Tasmanian Devil",
        bird: "Tweety",
        cat: "Sylvester",
        pig: "Porky Pig"
    },
    monstars: {
        0: "Bupkus",
        1: "Bang",
        2: "Nawt",
        3: "Pound",
        4: "Blanko"
    },
    nbaPlayers: {
        phoenixSuns: "Charles Barkley",
        newJerseyNets: "Shawn Bradley",
        newYorkKnicks: "Patrick Ewing",
        charlotteHornets1: "Larry Johnson",
        charlotteHornets2: "Muggsy Bogues"
    }
}

console.log(Object.keys(spaceJam));
console.log(Object.keys(spaceJam.monstars));
console.log(spaceJam.monstars[0])
// can use [ ] notation for objects as well if they're named numbers or named with spaces

console.log(Object.values(spaceJam));
// gives the values of the objects 

let garden = {
    vegetable: "zucchini",
    flower: "sun flowers",
    fruit: "grape",
    water: true,
    sun: true,
    size: 10
}

let keys = Object.keys(garden);
console.log(keys);
console.log(typeof keys[0]);

let zucchini = garden["vegetable"];
console.log(zucchini);

// can set properties via digging into objects

let baking = {};
// bunch of code

baking.zucchini = "Better make some bread!";
console.log(baking);

baking["flour"] = "Batter up!";
console.log(baking);

console.log(baking[garden["vegetable"]]);
// digging into baking object and grabbing garden object then digging into garden and grabbing vegetable key
