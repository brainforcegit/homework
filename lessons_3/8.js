const get = (obj, keyPath) =>
  keyPath.split('.').reduce((acc, key) =>
    (acc && acc[key] !== undefined) ? acc[key] : undefined, obj)

const obj = {a: {b: 2}};
console.log(get(obj, 'a.b'))
