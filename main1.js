// coding challenge set one





function fizzBuzz(a, b) {
    const combinedLength = a.length + b.length;

    if (combinedLength % 3 === 0 && combinedLength % 5 === 0) {
        return "FizzBuzz";
    } else if (combinedLength % 3 === 0) {
        return "Fizz";
    } else if (combinedLength % 5 === 0) {
        return "Buzz";
    } else {
        return "Neither Fizz nor Buzz";
    }
}
const solution = fizzBuzz("Fizz", "Buzz");
console.log(solution);

// question2
let yearOfbirth = prompt("what is your year of birth")

function checkAge(years){
let age = 2023-yearOfbirth;
if(age<18){
    console.log("you are a minor");
}
else if(age>18 && age <=36){
    console.log("you are a youth");
}
else {
    console.log("you are an elder");
}
}
console.log(checkAge());

// question3

function twoSum(nums, target) {
  const numMap = {};
  
for (let i = 0; i < nums.length; i++) {
    const difference = target. Nums[i];
    
    if (numMap[difference] !== undefined) {
      return [numMap[difference], i];
    }
    
    numMap[nums[i]] = i;
  }
  
  return null;
}

const nums = [2, 7, 11 ,15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); 


// question 4


function firstPalindrome(words) {
    function isPalindrome(word) {
        return word === word.split('').reverse().join('');
    }

    for (let i = 0; i < words.length; i++) {
        if (isPalindrome(words[i])) {
            return words[i];
        }
    }

    return "";
}
const set1 = ["racecar", "hello", "level"];
const answer1 = firstPalindrome(words1); 

const set2 = ["world", "test", "hello"];
const answer2 = firstPalindrome(words2); 

// question 5


function categorizeAndSort(arr) {
    const result = {
        evens: [],
        odds: [],
        chars: []
    };

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            if (arr[i] % 2 === 0) {
                result.evens.push(arr[i]);
            } else {
                result.odds.push(arr[i]);
            }
        } else if (typeof arr[i] === 'string' && arr[i].length === 1) {
            result.chars.push(arr[i]);
        }
    }

   
    result.evens = result.evens.sort((a, b) => a - b);
    result.odds = result.odds.sort((a, b) => a - b);

   
    result.chars = result.chars.sort();

    return result;
}
const arr = [3, 5, 2, 'a', 7, 4, 'b', 8, 1, 'c', 6];
const output = categorizeAndSort(arr);
console.log(output);