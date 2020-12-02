function sequential_search(arr, val){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val){
            return i;
        }
        console.log('k')
    }
    return -1;
}

console.log(sequential_search(Array(5,3,2,6,78,8,3,11), 6));