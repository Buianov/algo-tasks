// Возможно ли реализовать такое?

var a = {
  count: 0,
  valueOf: function() {
    return this.count++;
  },
};

console.log(a);
// Проверка
console.log(a == a); // true
console.log(a < a); // true
