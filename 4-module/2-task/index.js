/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  let i = 0;
  for (let key of table.rows) {

    key.cells[i].style.backgroundColor = "red";
    i++;
  }
}
