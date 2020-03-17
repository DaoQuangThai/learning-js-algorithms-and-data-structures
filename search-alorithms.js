//LINEAR SEARCH
// BINARY SEARCH
// STRING SEARCH
const long = 'lorie loled';
const short = 'lol';

// psudecode
// 2 loop
// check every shorth loop in long loop
// if frist check dont == break check next i
// if == check next j and next i + j

function find(long, short) {
  let count = 0;
  for (i = 0; i < long.length; i++) {
    for (j = 0; j < short.length; j++) {
      // console.log(short[j], long[i + j]);
      if (short[j] !== long[i + j]) {
        // console.log("break");
        break;
      }
      if (j === short.length - 1) {
        // console.log("FOUND IT");
        count++;
      }
    }
  }
  return count;
}

//BUBBLE SORT
/*
sort() bulit in javascript function
what does this function pass in does?
The built-in sort method accepts an optional comparator function
You can use this comparator function to tell JavaScript how you want it to sort
The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
If it returns a negative number, a should come before b
If it returns a positive number, a should come after b,
If it returns 0, a and b are the same as far as the sort is concerned

*/
// Smallest to largest
function numberCompare(num1, num2) {
  return num1 - num2;
}

// Largest to smallest
function numberCompare(num1, num2) {
  return num1 - num2;
}

const arrSort = [4, 6, 15, 10, 20, 19, 15].sort(numberCompare);
// console.log(arrSort);

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

const stringLength = ['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(
  compareByLen
);
// [ "Colt", "Steele", "Algorithms", "Data Structures" ]

/*
SECTION SORT
Selection Sort Pseudocode

Store the first element of arr as smallest 
Compare this item to the next item in the array until you find a smaller number.
If a smaller number is found, set it as new smallest
after j loop end swap the smallest to arr[i]
Repeat this with the next element until the array is sorted.

*/
function sectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let smallest = i;

    for (j = i + 1; j < arr.length; j++) {
      // console.log(arr[i], arr[j]);

      if (arr[j] < arr[smallest]) {
        smallest = j;
        // console.log(smallest);
      }
    }
    //SWAP

    // prevent do swap not necssecsary (eg 0 0)
    if (i !== smallest) {
      console.log(i, smallest);
      var temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }
  }
  return arr;
}
/*
SECTION SORT
Select i at index 1, current value at arr[i]
select j at index  i - 1;
compare these two
if arr[j] > current value và điều kiện dừng loop
set arr[j+1] = arr[j]
sau khi stop the loop
set arr[j+1] = current value
*/

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
      // console.log(j);
      // console.log(arr);
    }
    // console.log(j);
    arr[j + 1] = currentValue;
    // console.log(arr);
  }
  return arr;
}
insertionSort([2, 1, 9, 76, 0]);

/*
[1,2,9,76,0]  cv 1
[1,2,9,76,0]  cv 9
[1,2,9,76,0]  cv 76
[]  cv 0
*/

//          76 76    curr 0
//       9  9 76
//    1  1  9 76
// 2  2  1  9 76

//========================== MERGE SORT =========================//

/*
Merge 2 sorted arr
Create an empty array, take a look at the smallest values in each input array
While there are still values we haven't looked at...
If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
Once we exhaust one array, push in all remaining values from the other array
 */

function mergeArr(arr1, arr2) {
  let results = [];
  let j = 0;
  let i = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  // console.log(i);
  // console.log(j);

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  // console.log(results);
  return results;
}

/*
Break up the array into halves until you have arrays that are empty or have one element
Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
Once the array has been merged back together, return the merged (and sorted!) array
*/

//Merge Sort
function mergeSort() {
  if (arr.length <= 1) return arr; // base case
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid)); // [2,5], return [2] return [5]
  let right = mergeSort(arr.slice(mid)); //wait => call [6,4], return [6] return [4]
  return merge(left, right); //wait [2,5] [4,6] wait => call => [2,4,5,6]
}

mergeSort([2, 5, 6, 4]);
