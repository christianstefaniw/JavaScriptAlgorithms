function insertion_sort(arr){
    for (let i = 1; i < arr.length; i++){
        let curr = arr[i];
        let prevIndex = i-1;
        while (prevIndex >= 0 && arr[prevIndex] > curr){
            arr[prevIndex+1] = arr[prevIndex];
            prevIndex -= 1;
        }
        arr[prevIndex+1] = curr;
    }
    return arr;
}

console.log(insertion_sort(Array(5,4,3,2,1)));