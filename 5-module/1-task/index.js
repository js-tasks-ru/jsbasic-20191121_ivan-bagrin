/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    
    //создаем цикл который перебирает строки в таблице
    for (let key=1; key<table.rows.length; key++){
        //Присваиваем к status все значения атрибута data-available
          let status = table.rows[key].cells[3].dataset.available;
        // Присваиваем к gender все значения поля Gender
          let gender = table.rows[key].cells[2]; 
        // Присваиваем к age значения поля Age
          let age = table.rows[key].cells[1];
        // Если значение < 18, то установить стиль
          if (age.innerHTML<18) {
            table.rows[key].style.textDecoration ='line-through';
          }
          // Если значение ячейки === m, то установить для этого TR класс male иначе female
          if (gender.innerHTML === 'm') {
            table.rows[key].classList.add("male");
          }else{
            table.rows[key].classList.add("female");
          }
        // Если status===undefined, то установить для этого поля hidden
          if (!status) {
            table.rows[key].hidden = true}; 
        // Если status === true, то установить класс available, иначе unavailable
          if (status === 'true') {
            table.rows[key].classList.add("available");
          }else{
            table.rows[key].classList.add("unavailable");
          }
    
        }
}
