// question1

function addDigits(num) {
    while (num >= 10) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}
const a = addDigits(4791);
console.log(a);

// question2

function containsDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}
const nums1 = [1, 2, 3, 1]; 
const nums2 = [1, 2, 3, 4]; 

console.log(containsDuplicate(nums1)); 
console.log(containsDuplicate(nums2))

// Question 3

function majorityElement(nums) {
    let majority = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === majority) {
            count++;
        } else {
            count--;
            if (count === 0) {
                majority = nums[i];
                count = 1;
            }
        }
    }

    return majority;
}
const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));

// question 4

function findSingle(num) {
    let result = 0;

    for (const num of num) {
        result ^= num;
    }

    return result;
}
const num = [4, 2, 1, 2, 1]; 
console.log(findSingle(num));

// question 5

function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0]; 

    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }
        prefix = prefix.slice(0, j);
        if (prefix === "") return "";
    }

    return prefix;
}
const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
