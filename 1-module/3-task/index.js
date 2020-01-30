/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str===''){
    return str;
  } else{
    str = str.slice(0,1).toUpperCase() + str.slice(1);
    return str;
  }
}