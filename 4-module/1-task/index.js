/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */


function makeFriendsList(friends) {
  let user = [];
  let show = '';
  for (let i = 0; i < friends.length; i++) {
    show += '<ul>';
    user = [];
    for (let key in friends[i]) {
      //friends[i][key];
      show += `<li>${friends[i][key]}</li>`;
    };
    show += '</ul>';

  };
  document.body.innerHTML = show;
}
makeFriendsList(friends);