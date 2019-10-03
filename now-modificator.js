// Реализовать метод `now`:
//  - now() — вернет текущий timestamp
//  - now('+min'); — `сейчас + 1 минута`
//  - now('-3.5h'); — или `сейчас - 3.5 часа`
//
// Поддерживаемые форматы:
//   `ms`, `s`, `sec`, `m`, `min`, `h`, `hours` & etc.

function now(v) {
  if (!v) {
    return Date.now();
  }

  let z = v.match(/([+-])(\d*)\s*(\w*)/);
  let shift = 0;
  switch (z[3]) {
    case 'ms':
      shift = z[2];
      break;
    case 's':
    case 'sec':
      shift = z[2] * 1000;
      break;
    case 'm':
    case 'min':
      shift = z[2] * 60 * 1000;
      break;
    case 'h':
    case 'hours':
      shift = z[2] * 60 * 60 * 1000;
      break;
  }
  if (z[1] === '-') {
    shift = -shift;
  }
  return Date.now() + shift;
}

console.log(now('+30min')); // Date.now() + 30 * 60 * 1000
