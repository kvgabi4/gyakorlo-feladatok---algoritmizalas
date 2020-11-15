'use strict';

//4.	Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb összegét!

//Összeg

const intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function sumElementsOfAnArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum = sum + arr[i];
    }
    console.log(sum);
}
sumElementsOfAnArray(intArray);
 
