
//1. Check if a String is a Palindrome 
//Write a function to determine if a given string is a palindrome. A palindrome is a string that reads the same forward and backward (ignoring spaces, punctuation, and case). 


function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan, a canal, panama"));
console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome("Hello World"));

//2. Reverse a String. Write a function to reverse a given string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

//3. Find the Longest Palindromic Substring. Write a function to find the longest palindromic substring in a given string. 
// Function to check if a substring s[low..high] is a palindrome


function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

function longestPalindromicSubstring(s) {
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substring = s.substring(i, j + 1); // Extract substring
            if (isPalindrome(substring) && substring.length > longest.length) {
                longest = substring;
            }
        }
    }
    return longest;
}
console.log(longestPalindromicSubstring("babad")); 
console.log(longestPalindromicSubstring("cbbd")); 
console.log(longestPalindromicSubstring("racecar"));
console.log(longestPalindromicSubstring("a")); 
console.log(longestPalindromicSubstring("abcde"));

function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

function longestPalindromicSubstring(s) {
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substring = s.substring(i, j + 1); // Extract substring
            if (isPalindrome(substring) && substring.length > longest.length) {
                longest = substring;
            }
        }
    }
    return longest;
}
console.log(longestPalindromicSubstring("babad")); 
console.log(longestPalindromicSubstring("cbbd")); 
console.log(longestPalindromicSubstring("racecar"));
console.log(longestPalindromicSubstring("a")); 
console.log(longestPalindromicSubstring("abcde"));

// 4. Check if Two Strings are Anagrams 
//Write a function to check if two given strings are anagrams of each other. Two strings are anagrams if they contain the same characters in the same frequency but in different orders. 
function areAnagrams(str1, str2){
str1 = str1.toLowerCase().split('').sort().join('')
str2 = str2.toLowerCase().split('').sort().join('').toLowerCase()
return str1 === str2
}
console.log(areAnagrams('Listen', 'Silent'));
console.log(areAnagrams('Hello', 'World'));

//5. Remove Duplicates from a String 
//Write a function to remove duplicate characters from a string while preserving the order of the first appearance of each character.

function removeDuplicates(str) 
{  
    let n = str.length; 
    let res = ""; 
    for (let i = 0; i < n; i++) 
    { 
        let j; 
        for (j = i + 1; j < n; j++) 
            if (str[i] == str[j]) 
                break; 
        if (j == n) 
            res = res + str[i]; 
    } 
    return res; 
}
console.log(removeDuplicates("Programming"));
console.log(removeDuplicates("Hello World"));
console.log(removeDuplicates("aaaaaa"));
console.log(removeDuplicates("abcd"));
console.log(removeDuplicates("aabbcc"));

//6. Count Palindromes in a String 
//Write a function to count how many distinct palindromes are in a given string. A palindrome is considered distinct based on its start and end position in the string. 
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
function longestPalindromicSubstringSix(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let substring = s.substring(i, j); // Extract substring
            if (isPalindrome(substring)) {
         count ++;
                
            }
        }
    }
    return count;    
}
console.log(longestPalindromicSubstringSix("abab"));

//7. Longest Common Prefix 
//Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string. 
function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return "";
        }
    }
    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));

//8. Case Insensitive Palindrome 
//Modify the palindrome function to be case insensitive, meaning it should ignore upper and lower case differences when checking for a palindrome. 

function isCaseSensitivePalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
console.log(isCaseSensitivePalindrome('Aba'));
console.log(isCaseSensitivePalindrome('Racecar'));
console.log(isCaseSensitivePalindrome('Palindrome'));
console.log(isCaseSensitivePalindrome('Madam'));
console.log(isCaseSensitivePalindrome('Hello'));
