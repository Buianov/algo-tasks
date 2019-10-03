/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} value
 * @return {string}
 */

function setChar(acc, el) {
  let add = acc.count === 1 ? acc.lastchar : `${acc.lastchar}${acc.count}`;
  acc.str += add;
  acc.count = 1;
  acc.lastchar = el;
  return acc;
}

function rle(value) {
  return [...value].reduce(
    (acc, el, ind) => {
      if (acc.lastchar === el) {
        acc.count += 1;
      } else {
        acc = setChar(acc, el);
      }

      //check last symbol
      if (ind + 1 === value.length) {
        acc = setChar(acc, el);
      }

      return acc;
    },
    { lastchar: '', str: '', count: 1 },
  ).str;
}

console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
console.log(rle('AAAB'));
console.log(rle('BCCDDDAXXXX'));
