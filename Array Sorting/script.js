// array sorting


let array = [20,5,16,74,50]

for (i =0; i < array.length; i++){
    for(j=0 ; j <array.length -1; j++) {
        if(array[j] >array[j+1]) {
            let temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
        }
    }


}

console.log(array);

