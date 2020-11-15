'use strict';

//7.	Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb harmadik legnagyobb elemét!

//Elem kiválasztás

const intArray = [3254, 546, 23426, 3476, 234, 256365, 23, 4];
const nthMax = 3;

function chooseNthElement(arr) {
    if (nthMax > arr.length) {
        console.log('Nincs ennyi elem!');
        return;
    }
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length - 1; j += 1) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
    console.log(arr[nthMax - 1]);
}
chooseNthElement(intArray);

