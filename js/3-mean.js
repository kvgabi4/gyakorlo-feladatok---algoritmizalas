'use strict';

//3.	Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát!

//Átlag

const intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function meanElementsOfAnArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];
    }
    let mean = sum / arr.length;
    //console.log(sum);
    return mean;
}
console.log(meanElementsOfAnArray(intArray));


// oktatói megoldás:
 
function getSumFromAnArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];
    }
    return sum;
}

function getAverageFromAnArray(arr) {
    return getSumFromAnArray(arr) / arr.length;
}

console.log(getAverageFromAnArray(intArray));
