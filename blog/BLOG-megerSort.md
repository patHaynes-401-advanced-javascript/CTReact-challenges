## Blog Notes: Merge Sort
Merge sort is an algorithm that takes an array and sorts it by dividing and conquering. Merge sort divides and array over and over until you have single arrays, then merges the arrays back in order from highest to lowest one at a time. 

## Working Code
function mergeSort(arr) {

  let n = arr.length;
  if(n > 1) {
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    }
    else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  if(i === left.length) {
    while(j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
  else {
    while(i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }
  }
}

## Pseudocode
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
  
## Readings and References

# Watch
https://www.youtube.com/watch?v=pWXioZghP80

# Read
https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060
https://medium.com/techtrument/implementing-merge-sort-in-javascript-898d5f54a234
