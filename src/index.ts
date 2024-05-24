import findWords from "./findWords";

// Example usage:
let inputString = 'ate';
let dictionary = ['ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good'];
let result = findWords(inputString, dictionary);
console.log("Example 1", result); // Output: ['ate', 'eat', 'tea']


inputString = 'oogd';
dictionary = ['ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good'];
result = findWords(inputString, dictionary);
console.log("Example 2", result); // Output: ['dog', 'god', 'goo', 'go', 'good']


inputString = 'aaa';
dictionary = ['aaa', 'aaaaaa', 'a'];
result = findWords(inputString, dictionary);
console.log("Example 3", result); // Output: [ 'aaa', 'a' ]