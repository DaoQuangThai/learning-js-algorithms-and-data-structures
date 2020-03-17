/* Một số kiến thức javascript
Index of
Tìm vị trí index của 1 giá trị nào đó
vd: arr2.indexOf(2); tìm số 2 trong arr2 xem nó nằm ở vị trí index thứ mấy (lưu ý là chỉ lấy vị trí index đầu tiên tìm thấy)

splice
cắt bỏ hoặc thêm 1 phần tử nào đó vào một vị trí được chỉ định
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
myFish.splice(2, 0, 'drum'); // chèn 'drum' vào vị trí 2 và xóa 0 phần tử
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
myFish.splice(2, 1); // xóa 1 phần tử từ vị trí 2
// myFish is ["angel", "clown","mandarin", "sturgeon"]


for in: loop through an object
obj1 = {name: "Thai", age: "28"}
vd for (key in obj1) {
console.log(key); => name, age
}


for of: loop through each item of an array,string


add item to the object
obj = {};
obj.name = "Thai" // obj["name"] = Thai
console.log(obj) => {name: Thai}


constructor function: is a very special function that get call automatically whenever you create a new instance of that class
Constructor function and this keyword 
What this in this case means?
Khi chúng ta tạo ra một new instance thì điều đầu tiên là:
"new" sẽ tạo ra 1 empty object
constructor function will get call and execute code inside and assign value to the empty object just create
Nó sẽ assign cái gì?
"this" trong trường hợp này sẽ reffer to the new Instance that we create
What this means?
this.name = name => person.name = name;
this.age = age =>  person.age = age
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person("Thái", 29);
console.log(person);

slice, subtring, replace how it work?
*/

// --------------- FREQUENCY COUTER PATTER ---------------- //

// Nomarl solution
/* 
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    // hihi giờ đã hiểu tác dụng của dòng này, nếu k có xóa đi cái đã xuất hiện thì trường hợp trên vẫn sẽ đúng
    // vd cụ thể: [2,3,4,2] [4,9,16,15] => dung
    // nếu xóa đi: [2,3,4,2] [9,16,15] => sai
    }
    return true
}
*/

/* 
Step1: UNDERSTAND THE PROBLEM
- Create a function same(arr1, arr2)
  + True When?
    - tất cả giá trị xuất hiện trong arr1 phải xuất hiện trong arr2 với ** 2 value
    - same frequency of values (tần suất xuất hiện của value)

  vd true [2,3,4,2] [4,9,16,4] , [1,2,3,3] [1,2,9,9]
          [1,2,3,3] [1,2,9]
}
*/

/*
Step2: HOW TO SOLVE IT?
check if length không giống nhau => false
tạo 2 object để kiểm tra tần suất xuất hiện của mỗi object
đối chiếu 2 object với nhau để cho ra kết quả
*/

/*
// Cách làm chuẩn cho frequency counter
const arr1 = [2, 3, 4, 2];
const arr2 = [4, 9, 16, 4];

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  frequencyCounter1 = {};
  frequencyCounter2 = {};

  for (let val of arr1) {
   frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] != frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same(arr1, arr2));
*/

/*
// Một cách làm khác chỉ dùng 1 obj
const arr1 = [2, 3, 4, 2];
const arr2 = [4, 9, 16, 9];

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  frequencyCounter = {};

  for (let val of arr1) {
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
  }
  console.log(frequencyCounter);

  for (let i = 0; i < arr2.length; i++) {
    if (!frequencyCounter[Math.sqrt(arr2[i])]) {
      return false;
    } else {
      frequencyCounter[Math.sqrt(arr2[i])] -= 1;
      console.log(frequencyCounter);
    }
  }
  return true;
}

console.log(same(arr1, arr2));
*/

/*
SOME TEST CASE TO UNDERSTAND CODE ABOVE
var obj = {};
console.log((obj["age"] || 0) + 1);
*/

/* EXCIRCISE 
1 - Understand the problem?
Input? 
function
2 string


Output?
check if frist string is đảo vị trí ký tự của second string
Must be the same frequency

2 - How to solve?
Use naive approach
if length not equal => false
write a loop that check index of first string in second string
if not return false
every time found splice that index out!
return true

Use frequency pattern
if length not equal => false
create 2 object
check frequency of each object
check obj1 vs obj 
 -  letter in obj1 có xuất hiện trong obj 2?
 -  tần suất xuất hiện có giống nhau?

*/
/* 
//Naive solution
function test01(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    let correctIndex = str2.indexOf(str1[i]);
    console.log(str1[i]);

    if (correctIndex === -1) {
      return false;
    }
    str2 = str2.substring(0, correctIndex) + str2.substring(correctIndex + 1);
    //splice chỉ sử dụng được với arr ahihi
    // với chút ít nỗ lực search google cuối cùng đã ra
    console.log(str2);
  }
  return true;
}

const str1 = "myym";
const str2 = "ymmy";
console.log(test01(str1, str2));
// console.log(str2);
*/

/*
// frequency counter cách làm chuẩn
const str1 = "mymyy";
const str2 = "ymmym";

function test02(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  frequencyCounter1 = {};
  frequencyCounter2 = {};

  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] != frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
console.log(test02(str1, str2));

*/
/*
// frequency counter cách làm khác chỉ dùng 1 obj
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
      console.log(lookup);
      // tại sao 0 thì lại fail?
    }
  }
  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram("thait", "haiti"));
*/

// --------------- MULTIPLE POINTERS ---------------- //
/*
We have a sorted array
[-3,-2,-1, 0, 1, 2, 3]

output?
return arr of pair num that sum to zero
[-3, 3]

input?
function(arrSorted) {
  find first pair sum is zero and return that pair to an array
}

How to solve it? Naive approach!
[-3,-2,-1, 1, 2, 3]
   1 - i loop through every item in array
   2 - j loop through every item after i item in arry
   3 - check if i + j === 0?
   4 - true ==> return 2 ele to a new array
*/

/*
// Naive approach
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
const arr = [-4, -3, -1, 0, 1, 2, 3];
console.log(sumZero(arr));
*/

//MULTIPLE POINTERS APPROACH

/*
const arr = [-5, -3, 1, 1, 0, 6, 8];

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  // console.log(right);
  // tức là sau khi dò tới cặp cuối cùng sẽ dừng lại, nếu để  = thì thế nào? thì nó sẽ loop thêm 1 vòng nữa,
  // vậy có ảnh hưởng gì không? có vẽ k ảnh hưởng kk nhưng làm vậy k đẹp hehe
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
      // console.log(right);
    } else {
      left++;
    }
  }
}
console.log(sumZero(arr));
*/
// --------------- countUniqueValues ---------------- //

/*
I - Understand the problem
Output?
find the unique value in the array
[1,1,2,2,3]  => 3
Input?
- sorted arr
- function (arr)

II - How to solve it?
   hehe làm như trên để học thì được chứ thật ra mình nghĩ ra một cách còn tốt hơn đó chính là dùng Set()
const arr1 = [1, 1, 2, 2, 3];
const uniqueArray = [...new Set(arr1)];
console.log(uniqueArray.length);
   2 3 
[1,1,2,2,3] => [1,2,3,2,3]

// Another apporach
const arr = [1, 1, 2, 2, 3];
function countUniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues(arr));

*/

// --------------- SLIDING WINDOW ---------------- //

/* 
I - Understand the problem
Output?
Find the maximum sum consecutive base on condition we give
[1,2,3,4], 2 => tìm tổng 2 số liên tiếp lớn nhất
Input?

II - How to solve it?
1 - return null when codition > arr length
2 - loop through an array to positon ( length - condition + 1) why?
=> [1,2,3,4], 2 => (4 - 2 + 1) => tức là loop tới vị trí thứ 3 thôi vì loop tới 4 công cái gì?
   [1,2,3,4], 3 = > (4-3 + 1) => loop tới vị trí thứ 2

*/

/*
// Naive solution (ON2)
const arr = [1, 2, 3, 4, 5];
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;  
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
console.log(maxSubarraySum(arr, 2));
*/

/* 
// SLIDING WINDOW solution
How to solve this problem by sliding window?
  1 - tạo ra 1 cái móc để trừ một số trước dãy điều kiện đó và cộng một số sau dãy điều kiện đó sẽ ra kết quả như ý ta muốn
*/

/*
const arr = [1, 2, 3, 4, 5];
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  console.log(maxSum);

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
    console.log(maxSum);
  }
  return maxSum;
}
console.log(maxSubarraySum(arr, 2));
*/

// --------------- DIVIDE AND CONQUER ---------------- //
/*
1 - Understand the problem
- output?
return the index of (value) that pass to function  
- input?
sorted array
function search
2 - How to solve it?
Hehe tùy cơ ứng biến, vấn đề này khó nhỏ và đơn giản nên k cần bước này vì mình đã có thể hình dung trong đầu

*/

/*
// Hehe first thing that come to my head not very good but pround of it
function search(arr, valToFind) {
  for (i = 0; i < arr.length; i++) {
    if (arr.indexOf(valToFind)) {
      return arr.indexOf(valToFind);
    }
  }
}
*/

/*
// A better solution but still naive
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(search(arr, 5));

function search(arr, valToFind) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valToFind) {
      return i;
    }
  }
  return -1;
}
*/

/*
// Log N  binary search
How to solve it with log N / binary search?
1 create 2 min max point
2 điều kiện để tiếp tục loop chính là while min < = max
3 create a midle anchor
4 if value > anchor => middle + 1, < middle-1, else => middle
*/
/*
function search(array, val) {
  let min = 0;
  let max = array.length - 1;
  // let max = array.length; // nếu để vậy điều kiện bên dưới chỉ cần bằng
  // check tới vị trí cuối cùng lun, nếu k để bằng nó chỉ lấy kế cuối

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    console.log(middle);

    // let currentElement = array[middle];
    if (array[middle] < val) {
      min = middle + 1;
      // min = middle;
    } else if (array[middle] > val) {
      max = middle - 1;
      // max = middle; // để vậy về mặt tính toán cũng k ảnh hưởng gì nhưng về mặt logic là k tốt
    } else {
      return middle;
    }
  }
  return -1;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(search(arr, 10));
*/

/*
// E.g below to explain why need min < = max
const arr = [1, 2, 3, 4, 5, 6]; //min 2 max 5 mid 2 => min 3 max 5 middle 4 => min 3 max 3 midle 3

function search(arr, val) {                              
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    console.log("mid " + middle);
    console.log("min " + min);
    console.log("max " + max);

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search(arr, 4));
*/
