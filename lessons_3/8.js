
// TODO please check this function, if in object not found key you should return default value
// function parameters should be get(obj, keyPath, defaultValue)
const get = (obj, keyPath) =>
  keyPath.split('.').reduce((acc, key) =>
    (acc && acc[key] !== undefined) ? acc[key] : undefined, obj)

const obj = {a: {b: 2}};
console.log(get(obj, 'a.b'))
console.log(get({a: 1}, 'a')); // 1
console.log(get({a: {b: 2}}, 'a.b')); // 2
console.log(get({a: 1, b: 2}, 'c', 10)); // 10
console.log(get({a: 1, b: 2}, 'd.c', 10)); // 10 console.log(get({a: {b: {c: 'hello'}}}, 'a.b.c')); // 'hello'