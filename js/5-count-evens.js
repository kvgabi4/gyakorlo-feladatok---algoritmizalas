'use strict';

//5.	Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb páros elemeinek a számát!

//Számlálás

const intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function countElementsOfAnArray(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 0) {
            count += 1;
        }
    }
    return count;
}
console.log(countElementsOfAnArray(intArray));
 
