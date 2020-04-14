// Add your code here
/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательное свойство, которое ссылается на элемент <table>
   * 
   */
    
 let theadName = {
                name: 'Name',
                age: 'Age',
                salary: 'Salary',
                city: 'City'
            };

  this.el = document.createElement('table');
  
  this.thead = document.createElement('thead');
  
   this.el.appendChild(this.thead);
   this.tr = document.createElement('tr');
    this.thead.appendChild(this.tr);
 
  for (let key in theadName){ 
         this.td = document.createElement('td');
    this.td.innerHTML = theadName[key];
    this.tr.appendChild(this.td);  
    
          
        
  }

  this.tbody = document.createElement('tbody');
  
   this.el.appendChild(this.tbody);
  
   
  
  for(let key=0; key<items.length; key++){
    
    this.tr = document.createElement('tr');
    this.tbody.appendChild(this.tr);
    for (let key2 in items[key]){ 
      
      this.td = document.createElement('td');
      
    this.td.innerHTML = items[key][key2];
    this.tr.appendChild(this.td); 

    }
   
    

  }
 // console.log(items);
    let div = document.querySelector('.result')
    //console.log(div); 
  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (compare, desc=false) => { 
    //console.log(column);
   // items.sort((a, b) => a.name > b.name ? 1 : -1);
  
   let tbodyMy = this.el.querySelector('tbody'); 

      let rowsArray = Array.from(tbodyMy.rows);
      console.log(rowsArray);
  
      let compareMy;
    
      switch (compare) {
        case 2:
        if (desc) {
          compareMy = function(rowA, rowB) {
            return  rowB.cells[compare].innerHTML- rowA.cells[compare].innerHTML ;}

          }else {
          compareMy = function(rowA, rowB) {
            return   rowA.cells[compare].innerHTML -rowB.cells[compare].innerHTML ;}}
          break;

        case 0:
        if (desc){ 
          compareMy = function(rowA, rowB) {
            return rowA.cells[compare].innerHTML < rowB.cells[compare].innerHTML ? 1 : -1;}}
            else{
              compareMy = function(rowA, rowB) {
            return rowA.cells[compare].innerHTML > rowB.cells[compare].innerHTML ? 1 : -1;

            }
            
      }}

      rowsArray.sort(compareMy);

      tbodyMy.append(...rowsArray);
 
 

   };  
  
}