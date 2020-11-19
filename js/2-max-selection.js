'use strict';

//2.	Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legnagyobb elemét!

//Maximum kiválasztás

const intArray = [3254, 546, 23426, 3476, 234, 256365, 23, 4];


function getMaxElementFromAnArray(arr) {
    let max = arr[0]; //kezdetben ez legyen a legnagyobb, aztán figyeljük, hogy van-e nagyobb
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(getMaxElementFromAnArray(intArray));
 
