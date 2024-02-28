const get = (obj = {}, keyPath, defaultValue) =>
  keyPath.split('.').reduce((acc, key) =>
    (acc && acc[key] !== undefined) ? acc[key] : defaultValue, obj)

const obj = {a: {b: 2}};
console.log(get(obj, 'a.b.d', 10))
