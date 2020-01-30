/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    let data = str.toUpperCase();
    if (data.indexOf('XXX')!=-1 || data.indexOf('1XBET')!=-1 )
    {return true;}
    else{ return false;}
}