// 1. Write a JavaScript function to check whether an 'input' is a string or not.
function isString(input) {
    return typeof input === 'string';
}
console.log(isString('w3resource')); // true
console.log(isString([1, 2, 4, 0])); // false

// 2. Write a JavaScript function to check whether a string is blank or not.
function isBlank(str) {
    return str === '';
}

console.log(isBlank('')); // true
console.log(isBlank('abc')); // false

// 3. Write a JavaScript function to split a string and convert it into an array of words
function stringToArray(str) {
    return str.split(' ');
}

console.log(stringToArray("Robin Singh")); // ["Robin", "Singh"]

// 4. Write a JavaScript function to extract a specified number of characters from astring
function truncateString(str, num) {
    return str.slice(0, num);
}

console.log(truncateString("Robin Singh", 4)); // "Robi"

// 5. Write a JavaScript function to convert a string into abbreviated form
function abbrevName(name) {
    let parts = name.split(' ');
    return parts.length > 1 ? `${parts[0]} ${parts[1][0]}.` : name;
}

console.log(abbrevName("Robin Singh")); // "Robin S."

// 6. Write a JavaScript function that hides email addresses to prevent unauthorized
//access
function protectEmail(email) {
    let [user, domain] = email.split('@');
    return `${user.slice(0, 5)}...@${domain}`;
}

console.log(protectEmail("robin_singh@example.com")); // "robin...@example.com"

// 7. Write a JavaScript function to parameterize a string
function stringParameterize(str) {
    return str.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/ /g, '-');
}

console.log(stringParameterize("Robin Singh from USA.")); // "robin-singh-from-usa"

// 8. Write a JavaScript function to capitalize the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize('js string exercises')); // "Js string exercises"

// 9. Write a JavaScript function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeWords('js string exercises')); // "Js String Exercises"

// 10. Write a JavaScript function that converts uppercase letters to lowercase and vice-versa
function swapcase(str) {
    return str.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
}

console.log(swapcase('AaBbc')); // "aAbBC"

// 11. Write a JavaScript function to convert a string into camel case.
function camelize(str) {
    return str.replace(/(?:^|\s)([a-z])/g, (_, char) => char.toUpperCase()).replace(/\s+/g, '');
}

console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises"

// 12. Write a JavaScript function to uncamelize a string.
function uncamelize(str, separator = ' ') {
    return str.replace(/([a-z])([A-Z])/g, `$1${separator}$2`).toLowerCase();
}

console.log(uncamelize('helloWorld')); // "hello world"
console.log(uncamelize('helloWorld', '-')); // "hello-world"

// 13. Write a JavaScript function to concatenate a given string n times.
function repeat(str, n) {
    return str.repeat(n);
}
console.log(repeat('Ha!', 3)); // "Ha!Ha!Ha!"

// 14. Write a JavaScript function to insert a string within another string at a given
// position.
function insert(str, insertStr, position) {
    return str.slice(0, position) + insertStr + str.slice(position);
}

console.log(insert('We are doing some exercises.', 'JavaScript ', 18)); // "We are doing some JavaScript exercises."

// 15. Write a JavaScript function that formats a number with the correct suffix (1st,
// 2nd, etc.).
function humanize_format(num) {
    let suffixes = ['th', 'st', 'nd', 'rd'];
    let lastDigit = num % 10;
    let suffix = (num % 100 >= 11 && num % 100 <= 13) ? 'th' : suffixes[lastDigit] || 'th';
    return num + suffix;
}

console.log(humanize_format(301)); // "301st"

// 16. Write a JavaScript function to truncate a string and append "..."
function textTruncate(str, length, ending = '...') {
    return str.length > length ? str.slice(0, length) + ending : str;
}

console.log(textTruncate('We are doing JS string exercises.', 15, '!!')); // "We are doing !!"

// 17. Write a JavaScript function to chop a string into chunks.
function string_chop(str, size) {
    let chunks = [];
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size));
    }
    return chunks;
}

console.log(string_chop('w3resource', 3)); // ["w3r", "eso", "urc", "e"]

// 18. Write a JavaScript function to count occurrences of a substring in a string.
function count(str, sub) {
    return str.toLowerCase().split(sub.toLowerCase()).length - 1;
}

console.log(count("The quick brown fox jumps over the lazy dog", 'the')); // 2

// 19. Write a JavaScript function that reverses the binary representation of a number
// and returns its decimal form
function reverseBinary(num) {
    return parseInt(num.toString(2).split('').reverse().join(''), 2);
}

console.log(reverseBinary(100)); // 19

// 20. Write a JavaScript function to pad a string to a specified length.
function formatted_string(format, num, align) {
    num = num.toString();
    return align === 'l' ? format.slice(0, -num.length) + num : num + format.slice(num.length);
}

console.log(formatted_string('0000', 123, 'l')); // "0123"
