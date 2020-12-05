function sequentialSearch(arr, val){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val){
            return i;
        }
        console.log('k')
    }
    return -1;
}

console.log(sequentialSearch(Array(5,3,2,6,78,8,3,11), 6));