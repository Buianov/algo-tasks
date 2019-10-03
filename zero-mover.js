/**
 * Перенос нулей в конец массива
 * @param  {number[]} input
 * @return {number[]}
 */
function zsort(input) {
  const zero = input.filter(el => el === 0);
  const nonzero = input.filter(el => el !== 0);
  return [...nonzero, ...zero];
}

// Проверка
console.log(zsort([1, 0, 2, 3, 0, 4, 0])); // [1, 2, 3, 4, 0, 0, 0]
