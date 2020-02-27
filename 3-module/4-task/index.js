/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let name = [];
  users.forEach((item) => { name.push(item.name)});
  return name;
}
