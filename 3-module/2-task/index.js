/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(string) {
  let num = [];
  let Mas3 = [];

  let mas = string.split(/[,\s]/);
  for (let key of mas) {
    if (isFinite(key)) {
      Mas3.push(key);

    }

  }
  let min = Math.min.apply(null, Mas3);
  let max = Math.max.apply(null, Mas3);

  let obj = {
    min: min,
    max: max,
  };
  return obj;
}
//console.log(getMinMax(inputData)); // ожидается [-5.8, 73]
