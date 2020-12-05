function jumpSearch(arr, val) {
    let length = arr.length;
    let jump = parseInt(Math.sqrt(length));
    let left = 0, right = 0;

    while (left < length && arr[left] <= val) {
        right = Math.min(length - 1, left + jump);
        if (arr[left] <= val && arr[right] >= val) {
            break;
        }
        left += jump;
    }

    if (left >= length || arr[left] > val) {
        return -1
    }

    right = Math.min(length - 1, right);
    i = left;
    while (i <= right && arr[i] <= val) {
        if (arr[i] == val) {
            return i;
        }
        i++;
    }
    return -1;
}

console.log(jumpSearch(Array(1, 2, 3, 4, 9, 19, 45), 19));