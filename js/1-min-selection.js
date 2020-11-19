'use strict';

//1.	Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legkisebb elemét!

//Minimum kiválasztás

const intArray = [3254, 546, 23426, 3476, 234, 256365, 23, 4];


function getMinElementFromAnArray(arr) {
    let min = arr[0]; //kezdetben ez legyen a legkisebb, aztán figyeljük, hogy van-e kisebb
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(getMinElementFromAnArray(intArray));
 
