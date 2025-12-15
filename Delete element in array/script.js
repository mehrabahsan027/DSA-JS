
//! Delete an element from an array ...index 4

let array = [10, 20, 30, 40, 50, 60, 70]

let deleteindex = 4

for (let i = deleteindex; i < array.length - 1; i++) {

    array[i] = array[i + 1]




}

array.length = array.length - 1

console.log(array);


