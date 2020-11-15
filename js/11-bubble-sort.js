'use strict';

//11.	Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem
//      ismered) segítségével egy tetszőleges elemszámú, csak lebegőpontos számokat
//      tartalmazó tömb elemeit növekvő sorrendbe! Írasd ki a rendezett tömböt!

// Bubble sort

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

const array = [1.14, 23.23, 58.353, 0.425, 22.5, 23, 48.23, 23];

//console.log(numbers);
console.log(bubbleSort(array));

