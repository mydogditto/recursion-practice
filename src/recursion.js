// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n, product = 1) {
 //base
 if(n < 0){
  return null;
 }
  if (n === 0){
    return product;
  }
       let result = product *= n 
  return  factorial(n - 1, result);

 } 

 console.log(3)
// // 2. Compute the sum of an array of integers.
// // Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, num = 0) {

//base
if(array.length === 0){
  return num;
}
  
 // recursion 
  // iterate through the array and add the first number to the num
  let result = array[0] += num

  // return the function with the array sliced and the num updated
  return sum(array.slice(1), result)
}




// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// // 4. Check if a number is even.
var isEven = function(n, even = false) {
   //base
if(!Number.isInteger(n/2)){
  return even
}
  // recursive 
  if(Number.isInteger(n/2)){
    even = true
  
} else {  
    return true}
  return isEven(n-1, even)
};




// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, sum = 0) {

//base
if(n === 0){
  return sum;

}
//recursive 
if(n > 0){
  sum += n -1
  return sumBelow(n-1, sum)
} else if(n<0){
 sum += n+1;

return sumBelow(n + 1, sum)
}
}

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, array = []) {
//base case
if(x === y - 1){
  return array
}
if ( x === y + 1){
  return array
}
if (x === 0 && y === 0){
  return []
}
if (x === y){
  return []
}

// //recursion
// //iterate through the array and push the numbers into the array

if(x < y){
array.push(x+1)

// iterate till y - 1 is reached 
return range(x + 1, y, array)
}

// }; 
//recursion
//iterate through the array and push the numbers into the array
// if x is grater less than y. 
// push x + 1 into the array

if(x < y){
array.push(x+1)
// itterate till y - 1 is reached 
return range(x + 1, y, array)
}
if(x > y){
  array.push(x - 1)
  return range(x - 1, y , array)
}

}


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp, total = 0) {
//base cases 
if(exp === 0){
  return 1
}


  //recurstion 
  //if exp is grater than 1, multiply the base by the base and decrement the exp by 1

 if (exp < 0){
  return 1/ exponent(base, - exp);
 }
 else{ return base * exponent(base, exp -1)
}

};
// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(num) {
  //base
  if(num === 1){
    return true
  }
  if(num === 0){
    return false
  }
  //recursion

  return powerOfTwo(num / 2)
};


// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, reversedString = "") {

    //base
  // when string.length is 0, return the new string
  if(string.length === 0){
    return reversedString
  }
  //recursion
  // add the last letter of the string to the new string.
  
  // return the function with the string sliced and the new string updated.
  reversedString += string[string.length - 1]
  return reverse(string.slice(0, string.length - 1), reversedString)
};


// 10. Write a function that determines if a string is a palindrome.
//palindrome = same backwards and forwards
// IGNORE SPACES AND CAPITALIZATION
var palindrome = function(string){
  // replace space to have no spaces
  var newString = string.replace(/ /g, '');
  // base
  // if the string is empty, all characters that were sliced have been checked so it is a palindrome
  if (newString.length === 0){
    // return true
    return true;
  }
  // if the first value of the string is not the same as the last value of the string
  if (newString[0].toLowerCase() !== newString[newString.length - 1].toLowerCase()){
    // return false
    return false;
  }
  // recursion
  // if the string is "jamie" we slice it at the letter j and e
  return palindrome(newString.slice(1, newString.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
  if(x === 0 || y === 0){
    return 0
  }
  if(x > 0){
    return y + multiply(x - 1, y)
   
  
}
if(x < 0){
  return -y + multiply(x + 1, y, )

}
}

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
  if (x === 0 || y === 0){

    return 0
  }
  if(x > 0){
    return y - divide(x + 1, y) 
  }
  if (x < 0){
    return -y - divide(x + 1, y)

  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
let compareStr = function(str1, str2) {
  // base case
  if(str1.length === 0 && str2.length ===0){
    return true
  }

  // recursion
  // if the first letter of str1 is not equal to the first letter of str2, return false
  if(str1[0] === str2[0]){
    return compareStr(str1.slice(1), str2.slice(1))
  } else {
    return false;
  }


}




// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, output = []){
    //base
    if(str.length === 0){
      return output
    }
    //recursion
    //push the first letter of the string into the array
    output.push(str[0])
    // return the function with the sliced string
    return createArray(str.slice(1), output)
  };
  

// 17. Reverse the order of an array
var reverseArr = function (array, output = []) {
    //base
    if(array.length === 0){
      return output
    }
    //recursion
    //push the last letter of the array into the output array
    output.push(array[array.length - 1])
    // return the function with the sliced array
    return reverseArr(array.slice(0, array.length - 1), output)
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output = []) {
  if(length === output.length){
    return output
  }
  //recursion
  output.push(value)
  return buildList(value, length , output)
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, number = 0) {
  //base
  if(array.length === 0){
    return number
  }
  //recursion
  //if the first element of the array is equal to the value, increment number by 1
  if(array[0] === value){
    number++
  }
  // return the function with the sliced array
  return countOccurrence(array.slice(1), value, number)

};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output=[]) {
  if(array.length === 0){
    return output;
  }
  output.push(array[0] * 2);
  return rMap(array.slice(1), callback, output)
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //base
  if(n === 0){
    return 0
  }
  if(n === 1){
    return 1
  }
  if(n < 0){
    return null
  }
  //recursion
  //return the function with n - 1 and n - 2
  return nthFibo(n - 1) + nthFibo(n - 2)

};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output = []) {
  //base
  if(input.length === 0){
    return output
  }
  //recursion
  //push the first letter of the first element of the array into the output array capitilized
  output.push(input[0].toUpperCase())
  // return the function with the sliced array
  return capitalizeWords(input.slice(1), output)
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output = []) {
    //base
    if(array.length === 0){
      return output
    }
    //recursion
    //push the first letter of the first element of the array into the output array while capitilizing the first letter
    output.push(array[0][0].toUpperCase() + array[0].slice(1))
    // return the function with the sliced array
    return capitalizeFirst(array.slice(1), output)
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj, output = {}) {
  if(str.length === 0){
    return output
  }
  if (output[str[0]] === undefined){
    output[str[0]] = 1
  } else { 
    output[str[0]] += 1
  }
  return letterTally(str.slice(1), obj, output)
};

var compress = function(list, output = []) {
  //base
  if(list.length === 0){
    return output
  }
  //recursion
  //if the first element of the list is not equal to the second element of the list, push the first element of the list into the output array
  if(list[0] !== list[1]){
    output.push(list[0])
  }
  // return the function with the sliced list
  return compress(list.slice(1), output)
}

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]

var minimizeZeroes = function(array, output = []) {
  //base
  if(array.length === 0){
    return output
  }
// only push if the proceeding element was not 0
  if(array[0] !== 0 && array[1] === 0 ){
    //push to output
    output.push(array[0])
    return minimizeZeroes(array.slice(1), output)
  } else if (array[0] === 0 && array[1] === 0){
    
    return minimizeZeroes(array.slice(1), output)
  } else {
    output.push(array[0])
    return minimizeZeroes(array.slice(1), output)
  }
}



  


// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, output= []) {
  //base
  if(array.length === 0){
    return output
  }
  //recursion
  //if the first element of the array is positive, push the first element of the array into the output array and push the negative value of the first element of the array into the output array
  if(array[0] > 0){
    output.push(array[0])
    output.push(-Math.abs(array[0]))
    return alternateSign(array.slice(1), output)
  }
}



// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, newString = "") {
  if(str.length === 0){
    return newString
  }

  if(str[0] === "0"){
    newString += "zero"
  } else if(str[0] === "1"){
    newString += "one"
 
} else if(str[0] === "2"){
    newString += "two"
} else if(str[0] === "3"){
    newString += "three"
} else if(str[0] === "4"){
    newString += "four"
} else if(str[0] === "5"){
    newString += "five"
} else if(str[0] === "6"){
    newString += "six"
} else if(str[0] === "7"){
    newString += "seven"
} else if(str[0] === "8"){
    newString += "eight"
} else if(str[0] === "9"){
    newString += "nine"
} else {
    newString += str[0]
}  
  return numToText(str.slice(1), newString)
}
// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------