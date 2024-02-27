Function.prototype.customNew =  function (...args){
    const instance = {};
    const result = this.apply(instance, [...args]);
    return result instanceof Object ? result : instance;
}

function ExampleConstructor(name, surname) {
  this.name = name;
  this.surname = surname
  return `${this.name} ${this.surname}`
}

const newObj = new ExampleConstructor('Object New',"Surname");
console.log(newObj)
console.log(ExampleConstructor.customNew("Custom New", "Surname"));

