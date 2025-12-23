//*Merging Two Sorted Arrays Using a While Loop

let arrayOne = [10, 20, 30, 40, 50, 60, 70, 80];
let arrayTwo = [5, 15, 25, 35, 45];

let arrayThree = [];
let i = 0;
let j = 0;
let k = 0;

// Main merge loop
while (i < arrayOne.length && j < arrayTwo.length) {
    if (arrayOne[i] < arrayTwo[j]) {
        arrayThree[k] = arrayOne[i];
        i++;
    } else {
        arrayThree[k] = arrayTwo[j];
        j++;
    }
    k++;
}

// Copy remaining elements from arrayOne (if any)
while (i < arrayOne.length) {
    arrayThree[k] = arrayOne[i];
    i++;
    k++;
}

// Copy remaining elements from arrayTwo (if any) 
while (j < arrayTwo.length) {
    arrayThree[k] = arrayTwo[j];
    j++;
    k++;
}

console.log(arrayThree);
// Output: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80]