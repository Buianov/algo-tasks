/**
 * Получения двумерный массив анаграмм из произвольного массива слов
 * @param   {string[]} list
 * @returns {Array<[string, string]>}
 */
function getHash(str) {
  return [...str].sort().join('');
}

function getAnagrams(list) {
  let arr = [];
  while (list.length > 0) {
    let elem = list.shift();
    list.forEach(value => {
      if (getHash(elem) === getHash(value)) {
        arr.push([elem, value]);
      }
    });
  }
  return arr;
}

const inputList = ['кот', 'пила', 'барокко', 'стоп', 'ток', 'кошка', 'липа', 'коробка', 'пост'];

// Проверка (лучше смотреть в консоль)
console.log(getAnagrams(inputList));
// [
//   ['кот', 'ток'],
//   ['пила', 'липа'],
//   ['барокко', 'коробка'],
//   ['стоп', 'пост'],
// ]
