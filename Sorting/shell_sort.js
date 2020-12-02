function shellSort(arr){
    n = arr.length;
    gap = Math.floor(n/2);
    let temp;

    while (gap > 0){
        for (let i = gap; i < n; i += 1){
            temp = arr[i];

            k = i;

            while (k >= gap && arr[k-gap] > temp){
                arr[k] = arr[k-gap];
                k -= gap;
            }
            arr[k] = temp;
        }
        gap = Math.floor(gap/2);
    }
    return arr;
}

console.log(shellSort(Array(1,3,4,5,6,2,1)))