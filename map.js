/**
 * Реализовать свой Map
 * @constructor
 */
class XMap {
  constructor() {
    this.adr = [];
    this.values = [];
  }

  get(adr) {
    let ind = this.adr.findIndex(el => el === adr);
    if (ind !== -1) {
      return this.values[ind];
    }
  }

  set(adr, value) {
    let ind = this.adr.findIndex(el => el === adr);
    if (ind !== -1) {
      this.values[ind] = value;
      return;
    }
    this.adr.push(adr);
    this.values.push(value);
  }

  has(adr) {
    return this.adr.includes(adr);
  }

  remove(adr) {
    let ind = this.adr.findIndex(el => el === adr);
    if (ind !== -1) {
      this.adr = [...this.adr.slice(0, ind), ...this.adr.slice(ind + 1)];
      this.values = [...this.values.slice(0, ind), ...this.values.slice(ind + 1)];
    }
  }
}

// Проверка
const map = new XMap();
const objKey = { foo: true };

map.set(123, 'ok');
map.set(objKey, 'fail');
map.has(objKey) && map.set(objKey, 'wow');

console.log(map.get(123)); // "ok"
console.log(map.get(objKey)); // "wow"

map.remove(123);
console.log(map.has(123)); // false
