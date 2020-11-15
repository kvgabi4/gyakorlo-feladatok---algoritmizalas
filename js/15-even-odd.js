'use strict';

//15.	Adott egy tetszőleges pozitív egész számokat tartalmazó tömb. 
//      Válogassuk szét külön egy paros, és paratlan nevezetű tömbbe a páros, 
//      és páratlan számokat! Írjuk ki a 2 tömböt!


// Mixed sorting

const events = [];
const odds = [];
function EvenOddNumbers(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 0) {
            events.push(arr[i]);
        }
        else {
            odds.push(arr[i]);
        }
    }
    return events, odds;
}


const array = [1, 23, 58, 4, 22, 9, 12, 213];
EvenOddNumbers(array);

console.log('Páros számok: ', events);
console.log('Páratlan számok: ', odds);
