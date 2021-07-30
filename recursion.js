/** product: calculate the product of an array of numbers. */
function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  if (words.length === 1) return words[0].length;

  const longestWord = longest(words.slice(1));
  return words[0].length > longestWord ? words[0].length : longestWord;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  let strIdx = 0;
  let result = '';

  // make a closure to keep track of main string
  function _everyOther(s) {
    if (s.length === 0) return;
    // do something
    if (strIdx % 2 === 0 || strIdx === 0) {
      result += str[strIdx];
    }
    strIdx++;
    _everyOther(s.substr(1, s.length - 1));
    return str[strIdx];
  }
  _everyOther(str);
  return result;
}

/** isPalindrome: checks whether a string is a palindrome or not. */
// isPalindrome('tacocat') //true
// isPalindrome('racecar') //true
// isPalindrome('a') //true
// isPalindrome('helloolleh') //true
// isPalindrome('tacodog') //false
// isPalindrome('az') //false
// isPalindrome('goodbye') //false
function isPalindrome(str) {
  if (str.length <= 1) return true;

  if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    return isPalindrome(str.substring(1, str.length - 1));
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
