var inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

/**
 * Найти min/max в произвольной строке
 * @param   {String} входные данные
 * @returns {{min:Number, max:Number}}  объект
 */
function getMinMax(string) {
  let arr = string.match(/[+-]?([0-9]*[.])?[0-9]+/g);

  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
}

console.log(getMinMax(inputData));
