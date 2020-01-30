/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */


function makeFriendsList(friends) {
    let ulFirst = document.createElement('ul');
  document.body.append(ulFirst);
    for (let key in friends) { 
      let liFirst = document.createElement('li');
      liFirst.textContent = friends[key].firstName +' '+friends[key].lastName;
      ulFirst.append(liFirst);  
     }  
   return ulFirst;

}
