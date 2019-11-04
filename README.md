# CTReact-challenges


## Insertion Sort
Challenge Description 
* Take pseudo code, convert it to an actual function and test. 

## Approach and Efficiency
* Wrote out the function as best I could and then researched insert sort methods to get a working function. 

### Solution
function insertionSort(arr) {

  for(let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];

    while(j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
};




## Merge Sort
Challenge Description 
* Take pseudo code, convert it to an actual function and test. 

## Approach and Efficiency
* Wrote out the function as best I could and then researched merge sort methods to get a working function. 

### Solution
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





## Quick Sort
Challenge Description 
* Take pseudo code, convert it to an actual function and test. 

## Approach and Efficiency
* Wrote out the function as best I could and then researched quick sort methods to get a working function. 

### Solution
function quickSort(arr, left, right) {
  if(left < right) {
    let position = partition(arr, left, right);
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let low = left - 1;
  for(let i = left; i < right; i++) {
    if(arr[i] <= pivot) {
      low++;
      swap(arr, i, low);
    }
  }
  swap(arr, right, low + 1);
  return low + 1;
}

function swap(arr, i, low) {
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

module.exports = quickSort;
