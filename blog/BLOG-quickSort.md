## Blog Notes: Quick Sort
Quick sort is also a bit of a divide and conquer algorithm but in a much different way. Quick sort selects a number in the middle for reference and than compares that number from the furthest left and furthest right numbers, depending on if it is higher or lower the algorith will either stop or move on until it finds one higher on the left side and one lower on the right side. As soon as this is found for both sides, they will than swap sides.


## Working Code

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


## Pseudocode

ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp


## Readings and References

# Watch
https://www.youtube.com/watch?v=0KBvaKc__rc

# Read
https://dev.to/benweiser/quicksort-a-js-breakdown-lfg
https://humanwhocodes.com/blog/2012/11/27/computer-science-in-javascript-quicksort/