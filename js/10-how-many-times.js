'use strict';

//10.	Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket 
//      tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot 
//      nem tartalmaz) hányszor tartalmazza a 23-as számot!

// Hányszor van egy elem

let counter = 0;

function howManyTimes(arr, search) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === search) {
            counter +=1;
        }
    }
    return counter;
}

const array = [14, 23, 353, 425, 5, '23', 23, 'string', 23, 23];

//console.log(numbers);
console.log(howManyTimes(array, 23));

