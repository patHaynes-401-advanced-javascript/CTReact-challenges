# CTReact-challenges

Insertion Sort
# Challenge Description 
Take sudeo code, convert it to an actual function and test. 

# Approach and Efficiency
Wrote out the function as best I could and then researched insert sort methods to get a working function. 

## Solution
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
