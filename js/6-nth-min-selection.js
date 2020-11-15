'use strict';

//6.	Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb második legkisebb elemét!

//Elem kiválasztás

const intArray = [3254, 546, 23426, 3476, 234, 256365, 23, 4];
const nthMin = 2;

function chooseNthMinElement(arr) {
    if (nthMin > arr.length) {
        console.log('Nincs ennyi elem!');
        return;
    }
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length - 1; j += 1) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
    console.log(arr[nthMin - 1]);
}
chooseNthMinElement(intArray);



//oktatói megoldás:
function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    }
    while (swapped);
    return arr;
}


/* function getNthMinElement(arr, nth) {
    let swapped;
    do {
        swapped = false;
        for (let i=0; i < arr.length - 1; i+=1) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1]=temp;
                swapped = true;
            }
        }
    }
    while (swapped)
    return arr[nth-1];
} */

//a fenti fv röviden így:
function getNthMinElement(arr, nth) {
    const sortedArr = bubbleSort(arr);
    return sortedArr[nth - 1];
}

const sampleArray = [21, 46, 4846, 13213, 12, 12316, 1123, 24, 135];
console.log(getNthMinElement(sampleArray, 2));
