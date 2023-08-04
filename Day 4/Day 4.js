// Print odd numbers in an array


const numbers = [8, 19, 7, 5, 4, 15];


const odd = [];


numbers.forEach((num)=> {
    if(num % 2 === 1){
        odd.push(num);
    }
});


console.log(odd)


// Convert all the strings to title caps in a string array


function titleCase(string){
    string = string.toLowerCase().split(" ");
    for(var i = 0; i < string.length; i++){
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);


    }


    return string.join(" ");
}
titleCase(" I am a boy");


// Sum of all numbers in an array
let arr1 = [1, 2, 3, 4]
let sum = 0;
        for(let i = 0; i < arr1.length; i++)
        {
            sum = sum + arr1[i];
        }
       console.log(sum)


// Return all the prime numbers in an array


const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


const primes = arr.filter(function(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
});


console.log(primes);


// palindrome


let  words = ["level", "hello", "rececar", "world", "mom"];


function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}


let palindrome = [];


for(let i=0; i<words.length; i++) {
  if(isPalindrome(words[i])) {
    palindrome.push(words[i]);
  }
}


console.log(palindrome)


// Remove duplicates


function removeDuplicates(arr3) {
  let uniqueArr = [];
  for(let i = 0; i < arr3.length; i++) {
    if(uniqueArr.indexOf(arr3[i]) === -1) {
      uniqueArr.push(arr3[i]);
    }
  }
  return uniqueArr;
}
let arr3 = [1, 2, 2, 3, 3, 3, 4, 5, 5];
let uniqueArr = removeDuplicates(arr3);
console.log(uniqueArr); // [1, 2, 3, 4, 5]




// Rotating an array by k times


const rotateArray1 = function(nums, k) {


  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }


  return nums;
}


const nums = [1, 2, 3, 4, 5];
const k = 2;
const rotatedNums = rotateArray1(nums, k);


console.log(rotatedNums);



// Arrow functions

// Print odd numbers in an array

const numbers = [8, 19, 7, 5, 4, 15];
const odd = [];

numbers.forEach(num => {
    if (num % 2 === 1) {
        odd.push(num);
    }
});

console.log(odd);


// Convert all the strings to title caps 

const titleCase = string => {
  string = string.toLowerCase().split(" ");
  for (let i = 0; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  }
  return string.join(" ");
};

console.log(titleCase(" I am a boy"));


// Sum of all numbers in an array

let arr1 = [1, 2, 3, 4];
let sum = 0;

arr1.forEach(num => {
    sum += num;
});

console.log(sum);


// Return all the prime numbers in an array

const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const primes = arr.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
});

console.log(primes);


// Check for palindrome words

let words = ["level", "hello", "rececar", "world", "mom"];

const isPalindrome = str => {
    return str === str.split("").reverse().join("");
};

let palindrome = [];

words.forEach(word => {
    if (isPalindrome(word)) {
        palindrome.push(word);
    }
});

console.log(palindrome);
