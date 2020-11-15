'use strict';

//8.	Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, bármilyen típusú 
//      elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot, egyéb 
//      iterálható elemet nem tartalmaz) tartalmazza-e a 23-as számot! Használj lineáris keresést!

//Lineáris keresés

function linearSearch(arr, search) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === search) {
            return 'igen';
        }
    }
    return 'nem';
}

const numbers = [14, 23, 353, 425, 5, 686, 37, 18, 309, 10];

//console.log(numbers);
console.log(linearSearch(numbers, 23));

