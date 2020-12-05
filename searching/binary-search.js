function binarySearch(arr, x){
    let start = 0;
    let end = arr.length-1;
    let mid = 0;

    while (end >= start){
        mid = Math.floor((start+end)/2)
        if (arr[mid] == x){
            return mid;
        }

        if (arr[mid] > x){
            end = mid-1;
        }

        else if (arr[mid] < x){
            start = mid+1;
        }

    }
}

console.log(binarySearch(Array(1,73,78,86,100,101), 86));