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