// first recursion function
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// countDown(5);

// second recursion function
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

function factorial(num) {
  let total = 1;
  for (i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

// console.log(factorial(5));

// ------------------- Recursion Part 2 ----------------------//
// recursion helper pattern
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // cắt từ vị trí index đầu tiên ra 1 element
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

// In a normal way not recursive at all lol proud of myself;
function test01(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

// pure recursion
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
