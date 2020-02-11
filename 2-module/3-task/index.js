let calculator = {
  read (a,b) {
    this.a1 = a;
    this.b1 = b;

  },
  sum() {
    return this.a1 + this.b1;
  },
  mul() {
    return this.a1 * this.b1;
  }
};

calculator.read(3, 5);
console.log(calculator.sum()); // 8
console.log(calculator.mul()); // 15

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
