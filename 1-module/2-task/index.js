/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {

  if (name == null) {
    return false;
  } else

  if (name.indexOf(' ') > -1)
  {
    return false;
  } else if
  (name.length < 4) {
    return false;
  } else {
    return true;
  }
}


function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    console.log(`Welcome back, ${userName}!`);
  } else {
    console.log('Некорректное имя');
  }
}

