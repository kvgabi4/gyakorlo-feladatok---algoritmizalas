'use strict';

//14.	Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz 
//      véletlenszerű sorrendben. Rendezzük úgy a tömböt, hogy minden szám után 
//      egy string következzen! Írasd ki a rendezett tömböt!


// Mixed sorting

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

const array = [1, 23, '58', 'igen', 22, 'jó', 'ja', 213];

const Numbers = filterByNumbers(array);
const notNumbers = filterByNotNumbers(array);

function MixedSorting(arr1, arr2) {
    let arr = []
    for (let i = 0; i < arr1.length; i += 1) {
        arr[2 * i] = arr1[i];
        arr[2 * i + 1] = arr2[i];
    }
    return arr;
}

console.log('saját megoldás: ', MixedSorting(Numbers, notNumbers));


// oktatói megoldás:

const arr = [232, 234546, 'hello', 67, 'szia', 98, 'csá', 'cső'];

function customSort(arr) {  //ilyen hosszú fv-t már érdemes szétbontani
    const numbers = [];
    const strings = [];
    const sortedArray = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number') {
            numbers.push(arr[i]);
        } else {
            strings.push(arr[i]);
        }
    }
    //console.log(numbers, strings);
    //customSort(arr);

    for (let i = 0; i < numbers.length; i += 1) {
        sortedArray.push(numbers[i]);
        sortedArray.push(strings[i]);
    }
    return sortedArray;
}

console.log('oktatói megoldás1: ', customSort(arr));

//másik verzió:

function getPrimitiveElementByType(arr, type) {
    const typedArray = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === type) {
            typedArray.push(arr[i]);
        }
    }
    return typedArray;
}

function mixArrays(arr1, arr2) {
    const mixedArray = [];
    for (let i = 0; i < arr1.length; i += 1) {
        mixedArray.push(arr1[i], arr2[i]);
    }
    return mixedArray;
}

const numbers = getPrimitiveElementByType(arr, 'number');
const strings = getPrimitiveElementByType(arr, 'string');
console.log('oktatói megoldás2: ', mixArrays(numbers, strings));

