// Given an array A of size N of integers. 
// Your task is to find the minimum and maximum elements in the array.

// EX : 
// Input:
// N = 6
// A[] = {3, 2, 1, 56, 10000, 167}
// Output: 1 10000
// Explanation: minimum and maximum elements of array are 1 and 10000.


const minAndMaxOfAnArray = (no) => {
   console.log(no);
    let n = no.length;
    let arr = no;

    //initialize min and max
    let min = arr[0];
    let max = 0;

    for(let i=0;i<n;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    for(let i=0;i<n;i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
   return {min , max};
}

const output = minAndMaxOfAnArray([3, 2, 1, 56, 10000, 167]);
console.log(output);