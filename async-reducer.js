/**
 * Асинхронный reduce
 * @param  {any[]}    input
 * @param  {Function} iterator
 * @param  {any} initialValue
 * @return {Promise}
 */
async function asyncReduce(input, iterator, initialValue) {
  let ret = initialValue;

  for (let el of input) {
    ret = iterator(ret, await el());
  }

  return ret;
}

let a = () => Promise.resolve('a');
let b = () => Promise.resolve('b');
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 500));

asyncReduce([a, c, b], (acc, value) => [...acc, value], ['d']).then(results => {
  console.log(results); // ['d', 'a', 'c', 'b'];
});
