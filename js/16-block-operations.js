'use strict';

//16.	Adott két azonos elemszámú, csak egész számokat tartalmazó tömb. 
//      Külön tömbökbe készítsük el a két tömb: metszetét, unióját, különbségét, 
//      és descartes szorzatát. Írassuk ki az új tömböket!


// Block operations

const array1 = [1, 1, 58, 4, 22, 9, 12, 213];
const array2 = [18, 213, 4, 4, 24, 95, 1, 12];

// Engraving - 1
function Engraving(arr1, arr2) {
    const engraving = [];
    let counter = 0;
    for (let i = 0; i < arr1.length; i += 1) {
        for (let j = 0; j < arr2.length; j += 1) {
            if (arr1[i] === arr2[j] && !engraving.includes(arr1[i])) {
                engraving[counter] = arr1[i];
                counter += 1;
            }
        }
    }
    return engraving;
}

console.log('Metszet - 1: ', Engraving(array1, array2));

// Engraving - 2
function Engraving2(arr1, arr2) {
    const engraving = [];
    let counter = 0;
    for (let i = 0; i < arr1.length; i += 1) {
        let j = 0;
        do {
            if (arr1[i] === arr2[j] && !engraving.includes(arr1[i])) {
                engraving.push(arr1[i]);
                counter += 1;
            }
            j += 1;
        } while (j - 1 < arr2.length || arr1[i] === arr2[j]);
    }
    return engraving;
}

console.log('Metszet - 2: ', Engraving2(array1, array2));


// Union
function Union(arr1, arr2) {
    const union = [];
    for (let i = 0; i < arr1.length; i += 1) {
        if (!union.includes(arr1[i])) {
            union.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i += 1) {
        if (!union.includes(arr2[i])) {
            union.push(arr2[i]);
        }
    }
    return union;
}

console.log('Union: ', Union(array1, array2));


// Difference
function Difference(arr1, arr2) {
    const difference = arr1.slice();
    for (let i = 0; i < arr2.length; i += 1) {
        if (difference.includes(arr2[i])) {
            difference.splice(difference.indexOf(arr2[i]), 1,);
        }
    }
    return difference;
}

console.log('Difference (A/B): ', Difference(array1, array2));
console.log('Difference (B/A): ', Difference(array2, array1));


// Cartesian product - Descartes szorzat

function CartesianProduct(arr1, arr2) {
    const product = [];
    for (let i = 0; i < arr1.length; i += 1) {
        for (let j = 0; j < arr2.length; j += 1) {
            product.push([arr1[i], arr2[j]]);
        }
    }
    return product;
}

console.log('Cartesian product (AxB): ', CartesianProduct(array1, array2));
console.log('Cartesian product (BxA): ', CartesianProduct(array2, array1));