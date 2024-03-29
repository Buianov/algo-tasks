/**
 * Релизуйте сортировку массива
 * @param   {any[]}     values  сортируемый массив
 * @returns {any[]}
 */
function sort(values) {
  for (let step = 0; step < values.length; step += 1) {
    for (let i = 0; i < values.length - step; i += 1) {
      if (values[i] > values[i + 1]) {
        [values[i], values[i + 1]] = [values[i + 1], values[i]];
      }
    }
  }
  return values;
}

console.log(sort([7, 2, 99, 5, 1, 3, 4, -1])); // [-1, 1, 2, 3, 4, 5, 7, 99]
