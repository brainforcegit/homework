Function.prototype.customNew = function (...args) {
  const instance = {};
  Object.setPrototypeOf(instance, this.prototype);
  const result = this.apply(instance, [...args]);
  return result instanceof Object ? result : instance;
}

function ExampleConstructor(name, surname) {
  this.name = name;
  this.surname = surname
  return `${this.name} ${this.surname}`
}

const newObj = new ExampleConstructor('Object New', "Surname");
const customNewObj = ExampleConstructor.customNew("Custom New", "Surname")
console.log(newObj)
console.log(customNewObj)
console.log(newObj instanceof ExampleConstructor)
console.log(customNewObj instanceof ExampleConstructor);

