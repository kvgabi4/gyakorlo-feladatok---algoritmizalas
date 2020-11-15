'use strict';

//12.	Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered)
//      segítségével egy tetszőleges elemszámú, beágyazott tömb, és objektum kivételével 
//      bármilyen típusú elemeket tartalmazó tömb elemeit csökkenő sorrendbe! A nem szám 
//      típusú elemeket rakd a tömb végére az eredeti sorrendbe. Írasd ki a rendezett tömböt!

// Bubble sort

function bubbleSort(arr) {

    let counter = 0;
    for (let i = arr.length - 1; i > 0; i -= 1) {
        if (typeof (arr[i]) !== 'number' || Number.isNaN(arr[i])) {
            let index = arr.length - 1 - counter;
            let temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
            counter += 1;
        }
    }

    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - counter; i += 1) {
            if (arr[i] < arr[i + 1]) {
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

const array = [5, 0.3, 1.14, 'string', 58.353, NaN, 0.425, 22.5, 'value', '48.23', 23, false];

//console.log(numbers);
console.log(bubbleSort(array));



//oktatói megoldás:

function bubbleSortDesc(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] < arr[i + 1]) {
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

function filterByNumbers(arr) {
    const numbers = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number') {
            if (!Number.isNaN(arr[i])) {
                numbers.push(arr[i]);
            }
        }
    }
    return numbers;
}

function filterByNotNumbers(arr) {
    const notNumbers = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] !== 'number' || Number.isNaN(arr[i])) {
            notNumbers.push(arr[i]);
        }
    }
    return notNumbers;
}

function customSorting(arr) {
    const numbers = filterByNumbers(arr);
    const notNumbers = filterByNotNumbers(arr);
    const sortedArray = bubbleSortDesc(numbers);
    return sortedArray.concat(notNumbers);
}

function customSorting2(arr) {
    const numbers = [];
    const notNumbers = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] !== 'number' || Number.isNaN(arr[i])) {
            notNumbers.push(arr[i]);
        } else {
            numbers.push(arr[i]);
        }
    }
    const sortedArray = bubbleSortDesc(numbers);
    return sortedArray.concat(notNumbers);
}


const sample = [5, 0.3, 1.14, 'string', NaN, 58.353, 0.425, 22.5, 'value', '48.23', 23, false];

//console.log(numbers);
console.log(customSorting(sample));
console.log(customSorting2(sample));