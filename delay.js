// Реализовать метод `.delay`
// ...
Function.prototype.delay = function(d) {
  setTimeout(this.bind(this), d);
};

foo.delay(300);

function foo() {
  console.log('Wow!');
}
