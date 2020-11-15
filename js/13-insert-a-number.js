'use strict';

//13.	Adott egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb. 
//      A tömb elemeit rendezzük növekvő sorrendbe. Ezután a felhasználótól kérjünk be 
//      egy számot (addig kérjünk be értéket, míg valóban egy véges egész számot ad meg). 
//      A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, tehát 
//      a megfelelő indexű helyre kerüljön be a plusz elem. Írasd ki a rendezett tömböt!


// Insert a number

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


const array = [1, 23, 58, 3, 22, 23, 48, 213];
//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let answer = parseInt(prompt("Please enter a number:"));

function setIndex(arr, value) {
    // hova szúrja be? - 
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > value) {
            return i;  //melyik indexű elemek nagyobbak
        }
    }
}

const sortedArray = bubbleSort(array);
const index=setIndex(sortedArray,answer);

function newArray(i,a) {
    sortedArray.splice(i, 0, a);
    return sortedArray;
}

console.log('newArray: ', newArray(index, answer));



//oktatói megoldás - 1:

function bubbleSortAsc(arr) {
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

function custom13(arr) {
    const inputNumber = parseInt(prompt('Adj meg egy számot!'), 10);
    arr.push(inputNumber);
    return bubbleSortAsc(arr);
}

function getIndex(arr, value) {
    // hova szúrja be? - 
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > value) {
            return i;  //melyik indexű elemek nagyobbak
        }
    }
}

function custom13v2(arr) {
    let sortedArray = bubbleSortAsc(arr);
 //   const inputNumber = parseInt(prompt('Adj meg egy számot!'), 10);
    const inputNumber = 10;
    if (!Number.isNaN(inputNumber)) {
        const index = getIndex(sortedArray, inputNumber);
        sortedArray.splice(index, 0, inputNumber);
    }
    return sortedArray;

}


const array1 = [1.14, 23.23, 583.53, 0.425, 225, 23, 48.23, 23];

console.log('custom3: ', custom13(array1));
console.log('custom3v2: ', custom13v2(array1));