/**
 * Реализовать функцию суммирования
 * @param  {string} input
 * @return {number}
 */

function operation(oper, arg1, arg2) {
  switch (oper) {
    case '+':
      return arg1 + arg2;
    case '-':
      return arg2 - arg1;
    case '*':
      return arg1 * arg2;
    case '/':
      return arg2 / arg1;
  }
}

function calc(input) {
  let stack = [];
  input.split(' ').forEach(el => {
    switch (el) {
      case '+':
      case '-':
      case '*':
      case '/':
        stack.push(operation(el, stack.pop(), stack.pop()));
        break;

      default:
        stack.push(Number(el));
    }
  });
  return stack[0];
}

console.log(calc('4 7 + 1 -')); // (4 + 7) - 1 = 10
console.log(calc('3 6 8 * + 10 -')); // 3 + (6 * 8) - 10 = 41
