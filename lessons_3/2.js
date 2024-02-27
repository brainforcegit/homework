Function.prototype.customBind = function (context, ...args) {
  const uniqueProperty = Symbol('customBind');
  context[uniqueProperty] = this;
  return (...rest) => {
    const result = context[uniqueProperty](...args.concat(rest));
    delete context[uniqueProperty];
    return result;
  }
}

function foo(...props) {
  return `${this.name} ${this.age} ${props.join(',')}`

}

const result = foo.customBind({name: 'Tigran', age: 24}, 192)
console.log(result());
