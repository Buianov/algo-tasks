// Написать функцию получения простых чисел.
// Число является простым, если делиться на 1 и само себя.

var getNaturalNumbers = function(max) {
  let arr = [];
  // fill new array with Sieve of Eratosthenes
  for (let i = 2; i <= max; i++) {
    arr.push(i);
  }

  for (let i = 0; i < arr.length - 1; i++) {
    let e = arr[i];
    arr = arr.filter(el => el % e !== 0 || el === e);
  }
  return arr;
};

console.log(getNaturalNumbers(40));
