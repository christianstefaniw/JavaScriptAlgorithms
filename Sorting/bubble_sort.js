function bubble_sort(arr){
    for (let passNum = arr.length; passNum > 0; passNum--){
        for (let i = 0; i < passNum; i++){
            if (arr[i] > arr[i+1]){
                let tmp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = tmp;
            }
        }
    }
    return arr;
}


console.log(bubble_sort(new Array(6,2,1,8,7)));