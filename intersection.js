/**
 * Найти пересечение двух массивов
 * @param  {number[]} left
 * @param  {number[]} right
 * @return {number[]}
 */
function intersection(left, right) {
  return left.filter(el => right.includes(el));
}

console.log(intersection([1, 2, 3, 4, 5], [2, 8, 3]));
