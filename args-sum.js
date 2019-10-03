var sum = function(...args) {
  return args.reduce((acc, el) => {
    acc += el;
    return acc;
  }, 0);
};

console.log('result:', sum(1, 2, 3, 4, 5));
