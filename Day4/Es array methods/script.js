//// task 1   destructing task

// let num1 = 5;
// let num2 = 10;

// [num2, num1] = [num1, num2];

// console.log(num2);

/*==========================================================================*/
//// task 2 array task

// let arr = [1, 5, 6, 7, 15, 20];

// var getmaxandmin = function (...args) {
//   return [Math.max(...arr), Math.min(...arr)];
// };

// var myarr = getmaxandmin(arr);
// [maxvalue, minvalue] = myarr;
// console.log(
//   `the max value of the array is ${maxvalue} and min value is ${minvalue}`
// );

/*=====================================================================*/
/////task 3

/// 1-(check every element in the array is string)
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let result = fruits.every((item) => typeof item == "string");

/// 2-(check some element in the array starting with a letter "a")
let res2 = fruits.some((item, index) => item.startsWith("a"));

/// 3-(check some element in the array starting with a letter "b"  or "s')
let res3 = fruits.filter(
  (item) => item.startsWith("b") || item.startsWith("s")
);

/// 4-(return array with i love the fruit names)
let res4 = fruits.map((item) => `i love ${item}`);

/// 5-(return array with all elements
res4.forEach((element) => {
  console.log(element);
});
