//STRING
let movieName: string = 'Iron Man';
movieName = 'Avengers';
// movieName = 2;  || cannot change type of variable

movieName.toUpperCase();
// movieName.push(); || methods only used by strings are allowed.

//NUMBERS
let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = 'zero'; || string not assignable to number

// BOOLEAN
let isMarried: boolean = false;

isMarried = true;

// TYPE INFERENCE
let monthName = 'Ramadan';

// Any Type 
let myNum: any = 23;
myNum = 'Twenty-three';

// Delayed Initialization
let blockedURL: string;

const URLs = ['gmail.com', 'hotmail.com', 'yopmail.com']

for (let url of URLs) {
  if (url === 'gmail.com')
    blockedURL = url;
}

blockedURL = 'yahoo.com';
