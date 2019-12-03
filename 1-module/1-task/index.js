/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  let powRet = m;
  if (m > 0 & Number.isInteger(m) & m != null & n > 0 & Number.isInteger(n) & n != null) {

    for (let i = n - 1; i > 0; i--) {
      powRet *= m;
    }
    return powRet;
  } else {
    return 'Вы ввели не корректные значения';
  }
}
let m = +prompt('Введите число m', '0');
let n = +prompt('Введите число n', '0');
console.log(pow(m, n));
