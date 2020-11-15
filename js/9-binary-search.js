'use strict';

//9.	Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat 
//      tartalmazó tömb tartalmazza-e a 23-as számot! Használj logaritmikus keresést! 
//      Nézz utána mi az, milyen feltételei vannak, és hogyan valósítható meg!

// Logaritmikus/bináris keresés

function binarySearch(arr, search) {
    let start = 0;
    let end = arr.length - 1;

    //rendezett kell legyen a tömb, ezért rendezzük:
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length - 1; j += 1) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    //console.log('arr: ', arr);
    let counter = 0;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === search) {
            return 'igen';
        }
        else if (arr[mid] < search) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
        counter +=1;
    }
    return 'nem';
}

const numbers = [14, 23, 353, 425, 5, 686, 37, 18, 309, 10];

//console.log(numbers);
console.log(binarySearch(numbers, 23));

