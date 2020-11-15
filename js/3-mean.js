'use strict';

//3.	Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát!

//Átlag

const intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function meanElementsOfAnArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum = sum + arr[i];
    }
    let mean = sum / arr.length;
    console.log(sum);
    console.log(mean);
}
meanElementsOfAnArray(intArray);
 
