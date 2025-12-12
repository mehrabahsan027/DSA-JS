
//* Insert Element in an existing array in a particular index ...index 2

let array = [100, 80, 65, 20, 39]

let newElement = 50;
let positionIndex = 2

for (let i = array.length - 1; i >= positionIndex; i--) {
    array[i + 1] = array[i];
}

array[positionIndex] = newElement;
console.log(array);
