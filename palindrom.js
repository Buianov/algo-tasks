/**
 * Является ли строка палиндромом
 * @param  {string}  value
 * @return {boolean}
 */
function isPalindrome(value) {
  if (typeof value === 'string') {
    value = value.toLowerCase().replace(/\s/g, '');
    let newValue = [...value].reverse().join('');
    return value === newValue;
  }
  return false;
}

console.log(isPalindrome('abcd')); // false
console.log(isPalindrome('A man a plan a canal Panama')); // true
