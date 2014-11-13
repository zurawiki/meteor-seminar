// The magic of JavaScript arrays

// so far so good... not much different from C
var arr = [];
var arr2 = ["Arrays", "in", "JS"];
var thirdElement = arr2[2];
console.log(thirdElement)

// How to get the length
var arr2len = arr2.length;

// arrays can have different types inside
var arr3 = [2.3, true, 5];

// array values can change types
arr3[2] = "I'm a string";

// arrays can have infinite size
arr3[100] = "legit";
console.log(arr3);
