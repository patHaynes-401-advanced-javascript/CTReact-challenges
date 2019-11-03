## Blog Notes: Insertion Sort
This algorithm takes an array of numbers and organizes them from lowest to highest. This can be very useful for organizing a list of information. 

## Working Code
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


## Pseudocode

  InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp

## Readings and References

# Watch
https://www.youtube.com/watch?v=ArPCGZRXXc0

# Read
https://dev.to/ryan_dunton/insertion-sorting-for-beginners-in-js------fkg
https://hackernoon.com/programming-with-js-insertion-sort-1316df8354f5

